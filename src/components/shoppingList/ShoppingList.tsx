import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { category } from '../../config/category';
import { Items } from '../../interfaces/interface';
import { ItemsState } from '../../redux/redux';
import ShoppingItem from './shoppingItem/ShoppingItem';


const ShoppingList: React.FC = () => {

    const items = useSelector<any, ItemsState[]>((state) => state.course)


    return (
        <div className="ShoppingItem">
            <ul className='list-unstyled'>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3 className='border'>{item.rayon}</h3>
                        <ul className='list-unstyled'>
                            {item.products.map((product: any, index: number) => (
                                <li key={index}>
                                    <ShoppingItem
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

export default ShoppingList;
