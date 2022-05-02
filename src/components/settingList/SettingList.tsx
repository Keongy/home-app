import React from 'react';
import { useSelector } from 'react-redux';
import { IProduct, ItemsState } from '../../interfaces/interface';
import ShoppingItem from '../shoppingList/shoppingItem/ShoppingItem';

const SettingList: React.FC = () => {

    const items = useSelector<any, ItemsState[]>((state) => state.course)


    return (
        <div className="ShoppingItem">
            <ul className='list-unstyled'>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3 className='border'>{item.rayon}</h3>
                        <ul className='list-unstyled'>

                        </ul>
                    </li>
                ))}
            </ul >
        </div >
    );
};

export default SettingList;