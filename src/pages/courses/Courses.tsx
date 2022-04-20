import React, { useRef, useState } from 'react';
import ItemCourse from '../../components/itemCourse/ItemCourse';


export interface Items {
}

const Courses: React.FC = () => {
    const [items, setItems] = useState<Items[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null);


    const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputRef.current?.value) {
            setItems([...items, inputRef.current?.value])
            inputRef.current.value = ""
        }
    }

    console.log(typeof (items));
    console.log(items);

    return (
        <div className="container">
            <div className='text-center mt-4'>
                <h1>Liste de course...</h1>
                <form className='d-flex justify-content-center mt-5' onSubmit={(e) => addProduct(e)}>
                    <input
                        type="text"
                        className='form-control w-25'
                        placeholder='Ajouter un produit...'
                        ref={inputRef}
                    />
                    <button className="btn btn-primary">Valider</button>
                </form>
                <div className="list-item mt-5">
                    <ul className='list-unstyled'>
                        {items.map((item, index) => (
                            <li key={index}>
                                <ItemCourse />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;