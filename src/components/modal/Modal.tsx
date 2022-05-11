import React from 'react';
import { useNavigate } from 'react-router';
import { IModal } from '../../interfaces/interface';


const Modal: React.FC<IModal> = (props) => {
    const { modal, path, background } = props

    const navigate = useNavigate()

    return (
        <div className='modal-icon d-flex align-items-center justify-content-center overflow-hidden' onClick={() => navigate(path)} >
            <div className='filter h-100 w-100'>
                <img className='w-100' src={background} alt="" />
            </div>
            <h4 className='position-absolute'>{modal}</h4>

        </div>
    );
};

export default Modal;