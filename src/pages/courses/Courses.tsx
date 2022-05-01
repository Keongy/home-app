import FormCourse from '../../components/form/Form.course';
import ShoppingList from '../../components/shoppingList/ShoppingList';

const Courses: React.FC = () => {

    return (
        <div className="container">
            <div className='text-center mt-4'>
                <h2>Liste de course...</h2>
                <FormCourse />
                <ShoppingList />
            </div>
        </div>
    );
};

export default Courses;