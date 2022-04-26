import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IProduct, Items } from '../../../interfaces/interface';


const ShoppingItem: React.FC<IProduct> = (props) => {
    const { name, checked } = props
    const [isChecked, setIsChecked] = useState<boolean>(false)


    // const test = useSelector(state => console.log('Check items: ', state))


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

export default ShoppingItem;