import Overview from '../Component/overview';
import { useState, useEffect } from 'react';




function Home() {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/products")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setItems(json);
    //         });
    // }, []);
    const overview_data = [
        {
            "id": 1,
            "Name": "Products",
            "Number": "144k"
        },
        {
            "id": 2,
            "Name": "Sales",
            "Number": "2M"
        },
        {
            "id": 3,
            "Name": "Top Product",
            "Number": "5"
        },
        {
            "id": 4,
            "Name": "Revenue",
            "Number": "20M"
        }
    ]
    return (
        <div className='Content-box'>
            <h4 className='p-4'>Overview</h4>
            <div className="overview-boxes grid grid-cols-4  px-4">
                {overview_data.map((e) => {
                    return <Overview key={e.id} Name={e.Name} Number={e.Number} img={e.thumbnail} day_30={true} />
                })}
            </div>
        </div>
    )
}

export default Home