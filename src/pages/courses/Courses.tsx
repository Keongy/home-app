import React, { useEffect, useRef, useState } from 'react';
import ItemCourse from '../../components/shoppingList/shoppingItem/ShoppingItem';
import { Items } from '../../interfaces/interface';
import { category } from '../../config/category';
import { useSelector } from 'react-redux';
import Form from '../../components/form/Form';
import ShoppingList from '../../components/shoppingList/ShoppingList';
import { getDatabase, onValue, ref } from 'firebase/database';



const Courses: React.FC = () => {
    // const [items, setItems] = useState<Items[]>([])
    // const inputRef = useRef<HTMLInputElement | null>(null);
    // const items = useSelector((state) => console.log(state))


    return (
        <div className="container">
            <div className='text-center mt-4'>
                <h2>Liste de course...</h2>
                <Form />
                <ShoppingList />
            </div>
        </div>
    );
};

export default Courses;