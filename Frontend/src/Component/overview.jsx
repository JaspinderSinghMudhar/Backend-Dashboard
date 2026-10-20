import React from 'react'

function Overview(props) {
    return (
        <div className="overview">
            <p>{props.Name}</p>
            <h4>{props.Number}</h4>
            <span className='text-xs! text-gray-400!'>Last 30 days</span>
        </div>
    )
}

export default Overview