import React from 'react';
import { useNavigate } from 'react-router';
import { IModal } from '../../interfaces/interface';


const Modal: React.FC<IModal> = (props) => {
    const { modal, path } = props

    const navigate = useNavigate()

    return (
        <div className='modal-icon d-flex align-items-center justify-content-center' onClick={() => navigate(path)} >
            <h4>{modal}</h4>
        </div>
    );
};

export default Modal;