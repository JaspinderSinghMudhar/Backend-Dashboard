import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useState } from 'react'

function HeaderTopBar() {
    const breadcrumbs = useBreadcrumbs();
    const [form_value, setFormValue] = useState('');
    return (
        <>
            <div className="top-bar flex items-center justify-between gap-2 p-2">
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    index === 0 ? <span key={match.pathname}> <a href={match.pathname}>Dashboard</a> / </span> :
                        <span key={match.pathname}><a href={match.pathname}>{breadcrumb} / </a></span>
                ))}
                <form action="http://localhost:3000/" className="search" onSubmit={(e) => {
                    console.log(form_value);
                    e.preventDefault();
                }}>
                    <input value={form_value} onChange={(e) => setFormValue(e.target.value)}
                     type="text" placeholder="Search..." className="basic-input" />
                </form>
            </div>

        </>
    )
}

export default HeaderTopBar