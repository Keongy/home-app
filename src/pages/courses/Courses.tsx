import React, { useEffect, useRef, useState } from 'react';
import ItemCourse from '../../components/itemCourse/ItemCourse';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { Items } from '../../interfaces/interface';



const Courses: React.FC = () => {
    const [items, setItems] = useState<Items[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null);
    const db = getDatabase();

    useEffect(() => {
        const listCourseRef = ref(db, 'homeApp/listeCourse')
        onValue(listCourseRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Try data import", data);
            setItems(data)
        });
    }, [])


    const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputRef.current?.value) {

            let item = {
                name: inputRef.current?.value,
                checked: false
            }
            let list = [...items, item]
            set(ref(db, 'homeApp/'), {
                listeCourse: list,
            })
            inputRef.current.value = ""
        }
    }


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
                                <ItemCourse
                                    name={item.name}
                                    checked={item.checked}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;