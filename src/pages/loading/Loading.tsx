import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className='loading'>
            <div className="d-flex align-items-center">
                <strong className='fs-3 px-3'>Chargement... </strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </div >
    );
};

export default Loading;