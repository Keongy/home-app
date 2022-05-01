import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IListState } from '../../interfaces/interface';
import { addRayon } from '../../redux/listCourse.reducer';

const Setting: React.FC = () => {
    const [rayon, setRayon] = useState(false)
    const [items, setItems] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch()

    const listRayon = useSelector<any, IListState[]>(state => state.settingList)

    console.log('listerayon', listRayon);

    const handleRayon = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Adding rayon");
        if (inputRef.current?.value) {
            dispatch(addRayon(inputRef.current?.value))
            inputRef.current.value = ""
            setRayon(false)
        }
    }

    const handleItem = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Adding rayon");
        if (inputRef.current?.value) {
            dispatch(addRayon(inputRef.current?.value))
            inputRef.current.value = ""
            setRayon(false)
        }
    }

    return (
        <div className='setting container text-center'>
            <div className="text-center">
                <h1 className='mb-5'>Réglages</h1>
            </div>


            <div className="">
                <ul className='list-unstyled'>
                    {listRayon.map((item, index) => (
                        <li key={index}>
                            <h3 className='border'>{item.name}</h3>
                            <ul className='list-unstyled'>
                                {item.products.map((product: any, index: number) => (
                                    <li key={index}>
                                        {product}
                                    </li>
                                ))}
                            </ul>
                            {items ? (
                                <div className='d-flex justify-content-center'>
                                    <form className='w-auto' onSubmit={(e) => handleItem(e)}>
                                        <input type="text" ref={inputRef} placeholder='Ajouter produit' className='form-control' />
                                    </form>
                                    <button className='btn btn-danger' onClick={() => setItems(false)}>X</button>
                                </div>
                            )
                                :
                                (
                                    <h4 className='cursor-pointer' onClick={() => setItems(true)}>+</h4>
                                )
                            }
                        </li>
                    ))}
                </ul >
            </div >

            {
                rayon ? (
                    <form className='d-flex justify-content-center' onSubmit={(e) => handleRayon(e)}>
                        <input type="text" ref={inputRef} placeholder='Nouveau rayon' className='form-control w-25' />
                    </form>
                ) : (
                    <h3 className='text-black-50'>Ajouter un rayon <span className='add-rayon fs-1' onClick={() => setRayon(true)}>+</span> </h3>
                )
            }
        </div >
    );
};

export default Setting;