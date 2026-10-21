import Overview from '../Component/overview';
import { useState, useEffect } from 'react';



function Products() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
    }, []);
    return (
        <div className='Content-box'>
            <h4 className='p-4'>Products</h4>
            <div className="overview-boxes grid grid-cols-4 px-4">
                {items.map((e) => {
                    return <Overview key={e.id}
                     Name={e.title} Number={e.price} thumbnail={e.thumbnail} discount={e.discountPercentage} id={e.id} />
                })}
            </div>
        </div>
    )
}

export default Products