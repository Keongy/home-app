import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IListState } from '../../interfaces/interface';
import { addItem } from '../../redux/course.reducer';



const FormCourse = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()

    const listRayons = useSelector<any, IListState[]>(state => state.settingList)


    const addProduct = (e: React.FormEvent) => {
        e.preventDefault()
        let product = inputRef.current?.value
        if (inputRef.current?.value) {
            dispatch(addItem({ product, listRayons }))
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