import { Link } from 'react-router-dom';


function Overview(props) {
    return (
        <div className="overview bg-primary/10">
            <img src={props.thumbnail} alt={props.Name} className='w-100 p-4 bg-white rounded-xl rounded-br-none rounded-bl-none' />
            <div className="info border-t-1 border-primary p-4">
                <p>{props.Name}</p>
                <div className="pricing flex">
                    <h4>{props.Number}<sup className='discount'>-{props.discount}%</sup></h4>
                </div>
                <span className='text-xs! text-gray-400! mb-2'>Last 30 days</span>
                <br />
                <div className='mt-4 mb-2'>
                <Link to={'/products/'+props.id} className='button'>View</Link>
                </div>
            </div>

        </div>
    )
}

export default Overview