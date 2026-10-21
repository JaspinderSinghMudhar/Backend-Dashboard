import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Product() {
    const { id } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
      fetch(`http://localhost:3000/api/product?id=${id}`)
      .then((response)=> response.json())
      .then((data)=> setData(data))
      .catch((error)=>{console.log('error ' + error)})
    }, [id])
    
    return (
        <div className="Content-box p-4">
            <div className="images-info flex justify-center">
                <div className="images w-4/12">
                    
                </div>
                <div className="info w-8/12">
                     <h1 className='text-5xl! mt-7'>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Product