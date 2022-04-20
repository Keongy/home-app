import React from 'react';
import { Items } from '../../interfaces/interface';


const ItemCourse: React.FC<Items> = (props) => {
    const { name, checked } = props

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <h1 className='me-5'>{name}</h1>
            <input type="checkbox" className='form-check-input' />
        </div>
    );
};

export default ItemCourse;