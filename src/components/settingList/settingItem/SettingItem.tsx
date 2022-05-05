import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const SettingItem: React.FC<any> = (props) => {
    const { product, handleDelete } = props

    return (
        <div className='position-relative d-flex justify-content-center align-items-center bg-secondary mb-2'>
            <p className='w-100'>
                {product}
            </p>
            <div className="position-absolute end-0">
                <AiOutlineEdit
                    className='cursor-pointer'

                />
                <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={handleDelete}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default SettingItem;