import React from 'react';
import { Item } from '../../interfaces/interface';


const ItemCourse: React.FC<Item> = (props) => {

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <h1 className='me-5'>items</h1>
            <input type="checkbox" className='form-check-input' />
        </div>
    );
};

export default ItemCourse;