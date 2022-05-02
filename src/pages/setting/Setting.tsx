import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SettingForm from '../../components/settingList/settingForm/SettingForm';
import SettingItem from '../../components/settingList/settingItem/SettingItem';
import { IListState } from '../../interfaces/interface';
import { addItem, addRayon } from '../../redux/listCourse.reducer';

const Setting: React.FC = () => {
    const [rayon, setRayon] = useState<boolean>(false)
    const [items, setItems] = useState<string | undefined | boolean>(undefined)
    const [idRayon, setIdRayon] = useState<string | undefined>(undefined)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch()

    const listRayon = useSelector<any, IListState[]>(state => state.settingList)


    console.log('listerayon', listRayon);

    const handleRayon = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputRef.current?.value) {
            dispatch(addRayon(inputRef.current?.value))
            inputRef.current.value = ""
            setRayon(false)
        }
    }

    const handleItem = (e: React.FormEvent, rayonId: string) => {
        e.preventDefault()
        let newItem = inputRef.current?.value
        if (inputRef.current?.value) {
            dispatch(addItem({ newItem, rayonId }))
            inputRef.current.value = ""
            setItems(undefined)
        }
    }

    return (
        <div className='setting container text-center'>
            <h1 className='mb-5'>Réglages</h1>

            <ul className='list-unstyled'>
                {listRayon.map((item, index) => (
                    <li key={index}>
                        <h3 className='border'>{item.rayon.name}</h3>
                        {item.products ? (
                            <ul className='list-unstyled'>
                                {item.products.map((e: any, index: number) => (
                                    <li key={index}>
                                        <SettingItem
                                            product={e.product}
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
            <hr />
            {
                rayon ? (
                    <SettingForm
                        handleSubmit={handleRayon}
                        checkRef={inputRef}
                        handleClose={setRayon}
                    />
                ) : (
                    <h3 className='text-black-50'>Ajouter un rayon <span className='add-rayon fs-1' onClick={() => setRayon(true)}>+</span> </h3>
                )
            }
        </div >
    );
};

export default Setting;