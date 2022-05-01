import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/course.reducer';



const FormCourse = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()


    const addProduct = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputRef.current?.value) {
            dispatch(addItem(inputRef.current?.value))
            inputRef.current.value = ""
        }
    }

    return (
        <form className='d-flex justify-content-center mt-5 mb-5' onSubmit={(e) => addProduct(e)}>
            <input
                type="text"
                className='form-control w-25'
                placeholder='Ajouter un produit...'
                ref={inputRef}
            />
            <button className="btn btn-primary">Valider</button>
        </form>
    );
};

export default FormCourse;