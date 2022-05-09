import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IListState } from '../../interfaces/interface';
import { addItem, deleteItem, deleteRayon, updateProduct, updateRayon } from '../../redux/listCourse.reducer';
import SettingForm from './settingForm/SettingForm';
import SettingItem from './settingItem/SettingItem';
import { AiOutlineEdit } from "react-icons/ai";

const SettingList: React.FC = () => {
    const [items, setItems] = useState<string | undefined | boolean>(undefined)
    const [edit, setEdit] = useState<string | undefined | boolean>("")
    const [editItem, setEditItem] = useState<string | undefined | boolean>("")
    const [editRayon, setEditRayon] = useState<string | undefined | boolean>("")
    const [editProduct, setEditProduct] = useState<string | undefined | boolean>("")

    const dispatch = useDispatch()
    const listRayon = useSelector<any, IListState[]>(state => state.settingList)
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setEditRayon(edit)
    }, [edit])

    useEffect(() => {
        setEditProduct(editItem)
    }, [editItem])

    const verifItem = (item: string) => {
        let verif: boolean = false
        listRayon.map(e => e.products.map(e => e.product === item ? verif = true : null))
        return verif
    }


    const handleItem = (e: React.FormEvent, rayonId: string) => {
        e.preventDefault()
        if (inputRef.current?.value) {
            let newItem = inputRef.current?.value
            inputRef.current.value = ""
            setItems(undefined)
            if (!verifItem(newItem)) {
                dispatch(addItem({ newItem, rayonId }))
                inputRef.current.value = ""
                setItems(undefined)
            } else {
                alert('Le produit existe déjà !')
                setItems('')
            }
        }
    }

    const handleDeleteItem = (itemId: string, rayonId: string) => {
        dispatch(deleteItem({ itemId, rayonId }))
    }

    const handleChange = (props: string) => {
        if (props === 'rayon') {
            setEditRayon(inputRef.current?.value)
        } else if (props === 'product') {
            setEditProduct(inputRef.current?.value)
        }
    }

    const handleUpdateRayon = (e: React.FormEvent, rayonId: string) => {
        e.preventDefault()
        dispatch(updateRayon({ editRayon, rayonId }))
    }

    const handleUpdateProduct = (e: React.FormEvent, rayonId: string, productId: string) => {
        e.preventDefault()
        dispatch(updateProduct({ editProduct, rayonId, productId }))
    }


    return (
        <ul className='list-unstyled'>
            {listRayon.map((item, index) => (
                <li key={index}>
                    {item.rayon.name === edit ?
                        (
                            <SettingForm
                                handleClose={setEdit}
                                value={editRayon}
                                onChange={() => handleChange('rayon')}
                                checkRef={inputRef}
                                handleSubmit={(e: React.FormEvent) => handleUpdateRayon(e, item.rayon.id)}
                            />
                        )
                        :
                        (
                            <h3
                                className='position-relative border p-2'
                            >
                                {item.rayon.name}
                                <AiOutlineEdit
                                    className='cursor-pointer'
                                    onClick={() => setEdit(item.rayon.name)}
                                />
                                <button
                                    className='btn btn-danger position-absolute end-0'
                                    onClick={() => dispatch(deleteRayon(item.rayon.id))}
                                >X</button></h3>
                        )}

                    {item.products ? (
                        <ul className='list-unstyled'>
                            {item.products.map((elem: any, index: number) => (
                                <li key={index}>
                                    {elem.product === editItem ?
                                        (
                                            <SettingForm
                                                handleClose={setEditItem}
                                                value={editProduct}
                                                onChange={() => handleChange('product')}
                                                checkRef={inputRef}
                                                handleSubmit={(e: React.FormEvent) => handleUpdateProduct(e, item.rayon.id, elem.id)}
                                            />
                                        )
                                        :
                                        (
                                            <SettingItem
                                                product={elem.product}
                                                handleDelete={() => handleDeleteItem(elem.id, item.rayon.id)}
                                                handleEdit={() => setEditItem(elem.product)}
                                            />
                                        )
                                    }
                                </li>
                            ))}
                        </ul>
                    )
                        : null
                    }

                    {item.rayon.name === items ? (
                        <SettingForm
                            handleSubmit={handleItem}
                            checkRef={inputRef}
                            handleClose={setItems}
                            rayonId={item.rayon.id}
                        />
                    )
                        :
                        (
                            <h4 className='cursor-pointer' onClick={() => setItems(item.rayon.name)}>+</h4>
                        )
                    }
                </li>
            ))}
        </ul >
    );
};

export default SettingList;