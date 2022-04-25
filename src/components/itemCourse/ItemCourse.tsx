import React, { useEffect, useState } from 'react';
import { IProduct, Items } from '../../interfaces/interface';


const ItemCourse: React.FC<IProduct> = (props) => {
    const { name, checked } = props
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
        setIsChecked(checked)
    }, [])


    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <p className='me-5 fs-4'>
                {isChecked ? (
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
                checked={isChecked}
                onChange={handleChecked}
            />
        </div>
    );
};

export default ItemCourse;