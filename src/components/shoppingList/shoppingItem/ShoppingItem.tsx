import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../../../redux/redux';


const ShoppingItem: React.FC<any> = (props) => {
    const { name, checked, id, rayon, index } = props
    const dispatch = useDispatch()

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <p className='me-5 fs-4'>
                {checked ? (
                    <s>{name}</s>
                )
                    :
                    (
                        name
                    )
                }

            </p>
            <input
                type="checkbox"
                className='form-check-input'
                checked={checked}
                onChange={() => dispatch(toggleItem({ checked, id, rayon }))}
            />
            <button
                className="btn btn-sm btn-danger ms-3"
                onClick={() => dispatch(deleteItem({ id, rayon, index }))}
            >
                X
            </button>
        </div>
    );
};

export default ShoppingItem;