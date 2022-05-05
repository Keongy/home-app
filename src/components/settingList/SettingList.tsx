import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IListState } from '../../interfaces/interface';
import { addItem, deleteItem, deleteRayon, updateRayon } from '../../redux/listCourse.reducer';
import SettingForm from './settingForm/SettingForm';
import SettingItem from './settingItem/SettingItem';
import { AiOutlineEdit } from "react-icons/ai";

const SettingList: React.FC = () => {
    const [items, setItems] = useState<string | undefined | boolean>(undefined)
    const [edit, setEdit] = useState<string | undefined | boolean>("")
    const [editRayon, setEditRayon] = useState<string | undefined | boolean>("fd")

    const dispatch = useDispatch()
    const listRayon = useSelector<any, IListState[]>(state => state.settingList)
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setEditRayon(edit)
    }, [edit])


    const handleItem = (e: React.FormEvent, rayonId: string) => {
        e.preventDefault()
        let newItem = inputRef.current?.value
        if (inputRef.current?.value) {
            dispatch(addItem({ newItem, rayonId }))
            inputRef.current.value = ""
            setItems(undefined)
        }
    }

    const handleDeleteItem = (itemId: string, rayonId: string) => {
        dispatch(deleteItem({ itemId, rayonId }))
    }

    const handleChange = (props: string) => {
        if (props === 'rayon') {
            setEditRayon(inputRef.current?.value)
        }
    }

    const handleUpdateRayon = (e: React.FormEvent, rayonId: string) => {
        e.preventDefault()
        dispatch(updateRayon({ editRayon, rayonId }))
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
                            {item.products.map((e: any, index: number) => (
                                <li key={index}>
                                    <SettingItem
                                        product={e.product}
                                        handleDelete={() => handleDeleteItem(e.id, item.rayon.id)}
                                    />
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