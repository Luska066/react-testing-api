import { Link } from 'react-router-dom';

export function HeaderComponent() {
    
    return (
        <header className='bg-dark text-white d-flex align-items-center justify-content-between px-4 py-3'>
            <article>
                React
            </article>

            <section className="list-unstyled d-flex align-items-center gap-5">
                 <Link to="/">Home</Link>
                 <Link to="/store">Store</Link>
                 <Link to="/suport">Suport</Link>
            </section>

        </header>
    )

}