import React from 'react';

const SettingForm: React.FC<any> = (props) => {
    const { handleSubmit, checkRef, handleClose, rayonId } = props

    return (
        <div className='d-flex justify-content-center'>
            <form className='w-auto' onSubmit={(e) => handleSubmit(e, rayonId)}>
                <input type="text" ref={checkRef} placeholder='Ajouter un rayon' className='form-control' />
            </form>
            <button className='btn btn-danger' onClick={() => handleClose(false)}>X</button>
        </div>
    );
};

export default SettingForm;