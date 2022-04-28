import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IProduct, ItemsState } from '../../interfaces/interface';
import ShoppingItem from './shoppingItem/ShoppingItem';


const ShoppingList: React.FC = () => {

    const items = useSelector<any, ItemsState[]>((state) => state.course)


    return (
        <div className="ShoppingItem">
            <ul className='list-unstyled'>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3 className='border'>{item.rayon}</h3>
                        <ul className='list-unstyled'>
                            {item.products.map((product: IProduct, index: number) => (
                                <li key={index}>
                                    <ShoppingItem
                                        name={product.name}
                                        checked={product.checked}
                                        id={product.id}
                                        rayon={item.rayon}
                                        index={index}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul >
        </div >
    );
};

export default ShoppingList;
