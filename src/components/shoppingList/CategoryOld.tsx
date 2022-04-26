import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { category } from '../../config/category';
import { Items } from '../../interfaces/interface';
import ItemCourse from './shoppingItem/ShoppingItem';


const Category: React.FC = () => {
    const [items, setItems] = useState<Items[]>([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'homeApp/listeCourse');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setItems(data)
        });
    }, [])


    return (
        <div className="category">
            <ul className='list-unstyled'>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3 className='border'>{item.rayon}</h3>
                        <ul className='list-unstyled'>
                            {item.products.map((product, index) => (
                                <li key={index}>
                                    <ItemCourse
                                        name={product.name}
                                        checked={product.checked}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul >
        </div >
    );
};

export default Category;
