import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AccordionGallery from '../Component/AccordionGallery.jsx'




function Product() {
    const { id } = useParams();
    const [data, setData] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/product?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setImages(
                    (data.images ?? []).map((url, index) => ({
                        image: url,
                        label: `${data.title} image ${index + 1}`,
                    }))
                );

            }
            )
            .catch((error) => { console.log('error ' + error) })

    }, [id])


    return (
        <div className="Content-box p-4">
            <div className="images-info">
                <div className="images">
                    {images.length > 0 && (
  <AccordionGallery items={images} defaultIndex={0} />
)}
                </div>
                <div className="info">
                    <h1 className='text-5xl! mt-7'>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Product