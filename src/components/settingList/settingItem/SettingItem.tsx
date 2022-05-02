import React from 'react';

const SettingItem: React.FC<any> = ({ product }) => {

    return (
        <div className='position-relative d-flex justify-content-center align-items-center bg-secondary mb-2'>
            <p className='w-100'>
                {product}
            </p>
            <div className="position-absolute end-0">
                <button
                    className="btn btn-sm btn-success ms-3"
                    onClick={() => null}
                >
                    /
                </button>
                <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={() => null}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default SettingItem;