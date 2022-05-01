import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../../../redux/course.reducer';


const ShoppingItem: React.FC<any> = (props) => {
    const { name, checked, id, rayon, index } = props
    const dispatch = useDispatch()

    return (
        <div className='item'>
            <p
                className='text'
                onClick={() => dispatch(toggleItem({ checked, id, rayon }))}
            >
                {checked ? (
                    <s>{name}</s>
                )
                    :
                    (
                        name
                    )
                }

            </p>
            <div className="icons">
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
        </div>
    );
};

export default ShoppingItem;