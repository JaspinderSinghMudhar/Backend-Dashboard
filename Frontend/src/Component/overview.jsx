import { Link } from 'react-router-dom';


function Overview(props) {
    return (
        <div className="overview">
            {props.thumbnail &&
                <img src={props.thumbnail} alt={props.Name} className='w-100 p-4 bg-white rounded-xl rounded-br-none rounded-bl-none border-b-1 border-primary' />
            }
            <div className="info p-4">
                <p>{props.Name}</p>
                <div className="pricing flex">
                    {props.Number && <h4>{props.Number}{props.discount && <sup className='discount'>-{props.discount}%</sup>}</h4>}
                </div>
                {props.day_30 && <span className='text-xs! text-gray-400! mb-2'>Last 30 days</span>}
                <br />
                {props.id &&
                    <div className='mt-2 mb-2'>
                        <Link to={'/products/' + props.id} className='button'>View</Link>
                    </div>
                }

            </div>

        </div>
    )
}

export default Overview