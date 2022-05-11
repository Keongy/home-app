import { AiFillSetting } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router';
import FormCourse from '../../components/form/Form.course';
import ShoppingList from '../../components/shoppingList/ShoppingList';

const Courses: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className='text-center mt-4'>
                <div className="d-flex align-items-center justify-content-center">
                    <h2 className='me-5'>Liste de course...</h2>
                    <div className='cursor-pointer' onClick={() => navigate('/setting')}><AiFillSetting /></div>
                </div>
                <FormCourse />
                <ShoppingList />
            </div>
        </div>
    );
};

export default Courses;