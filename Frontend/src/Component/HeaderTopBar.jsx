import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useState } from 'react'
import { Link } from 'react-router-dom';


function HeaderTopBar() {
    const breadcrumbs = useBreadcrumbs();
    const [form_value, setFormValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send search value to backend
        try {
            await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: form_value })
            });
            console.log('Search sent:', form_value);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    return (
        <>
            <div className="top-bar flex items-center justify-between gap-2 p-4">
                <div className="breadcrumbs">
                    {breadcrumbs.map(({ match, breadcrumb }, index) => (
                        index === 0 ? <span key={match.pathname}> <Link to={"/"+match.pathname}>Dashboard</Link> / </span> :
                            <span key={match.pathname}><Link to={match.pathname}>{breadcrumb} / </Link></span>
                    ))}
                </div>
                <form className="search w-[25%] pr-4" onSubmit={handleSubmit}>
                    <input value={form_value} onChange={(e) => setFormValue(e.target.value)}
                        type="text" placeholder="Search..." className="basic-input" />
                </form>
            </div>

        </>
    )
}

export default HeaderTopBar