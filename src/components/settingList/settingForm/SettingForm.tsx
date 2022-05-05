import React from 'react';

const SettingForm: React.FC<any> = (props) => {
    const { handleSubmit, checkRef, handleClose, rayonId, value, onChange } = props


    return (
        <div className='d-flex justify-content-center'>
            <form className='w-auto' onSubmit={(e) => handleSubmit(e, rayonId)}>
                <input
                    type="text"
                    ref={checkRef}
                    placeholder='Ajouter un rayon'
                    value={value}
                    onChange={onChange}
                    className='form-control' />
            </form>
            <button
                className='btn btn-danger'
                onClick={() => handleClose("")}
            >
                X
            </button>
        </div>
    );
};

export default SettingForm;