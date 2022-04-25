import React, { useEffect, useRef, useState } from 'react';
import ItemCourse from '../../components/itemCourse/ItemCourse';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { Items } from '../../interfaces/interface';
import Category from '../../components/category/Category';
import { link } from 'fs';
import { category } from '../../config/category';



const Courses: React.FC = () => {
    const [items, setItems] = useState<Items[]>([])
    const db = getDatabase();
    const inputRef = useRef<HTMLInputElement | null>(null);

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


            let rayon = checkRayonProduct(inputRef.current?.value)

            let newProduct: {
                name: string
                checked: boolean
            } = {
                name: inputRef.current?.value,
                checked: false
            }

            let copyItems = [...items]

            if (!copyItems.length) {
                console.log("ITems vide");
                copyItems.push({
                    rayon: rayon,
                    products: [newProduct]
                })
            } else {
                console.log("ADD ITEMS");

                let findRayon = -1

                copyItems.map((e, index) => (
                    e.rayon === rayon ? (
                        findRayon = index
                    ) : null
                ))

                findRayon === -1 ? (
                    copyItems.push({
                        rayon: rayon,
                        products: [newProduct]
                    })
                )
                    :
                    (
                        copyItems[findRayon].products.push(newProduct)
                    )
            }
            setItems(copyItems)

            set(ref(db, 'homeApp/'), {
                listeCourse: copyItems,
            })
            inputRef.current.value = ""
            console.log(copyItems);
        }
    }

    const checkRayonProduct = (product: string) => {
        let rez: string = 'autre'
        category.map(rayon => (
            rez = rayon.products.includes(product) ? rayon.name : rez
        ))
        return rez
    }

    return (
        <div className="container">
            <div className='text-center mt-4'>
                <h2>Liste de course...</h2>
                <form className='d-flex justify-content-center mt-5 mb-5' onSubmit={(e) => addProduct(e)}>
                    <input
                        type="text"
                        className='form-control w-25'
                        placeholder='Ajouter un produit...'
                        ref={inputRef}
                    />
                    <button className="btn btn-primary">Valider</button>
                </form>

                <Category />

                {/* <div className="list-item mt-5">
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
                </div> */}
            </div>
        </div>
    );
};

export default Courses;