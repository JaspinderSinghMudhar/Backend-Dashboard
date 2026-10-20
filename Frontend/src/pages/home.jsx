import Overview from '../Component/overview';




function Home() {
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
        <>
            <h4 className='p-4'>Overview</h4>
            <div className="overview-boxes grid grid-cols-4">
                {overview_data.map((e) => {
                    return <Overview key={e.id} Name={e.Name} Number={e.Number} />
                })}
            </div>
        </>
    )
}

export default Home