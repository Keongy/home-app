import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import SettingForm from '../../components/settingList/settingForm/SettingForm';
import SettingList from '../../components/settingList/SettingList';
import { addRayon } from '../../redux/listCourse.reducer';

const Setting: React.FC = () => {
    const [rayon, setRayon] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch()



    const handleRayon = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputRef.current?.value) {
            dispatch(addRayon(inputRef.current?.value))
            inputRef.current.value = ""
            setRayon(false)
        }
    }



    return (
        <div className='setting container text-center'>
            <h1 className='mb-5'>Réglages</h1>
            <SettingList />
            <hr />
            {
                rayon ? (
                    <SettingForm
                        handleSubmit={handleRayon}
                        checkRef={inputRef}
                        handleClose={setRayon}
                    />
                ) : (
                    <h3 className='text-black-50'>Ajouter un rayon <span className='add-rayon fs-1' onClick={() => setRayon(true)}>+</span> </h3>
                )
            }
        </div >
    );
};

export default Setting;