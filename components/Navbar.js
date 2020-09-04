import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
            <Link href="/"><a className="navbar-brand">BitPrice</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    // <div>
    //     <ul>
    //         <li><Link href="/"><a>Home</a></Link></li>
    //         <li><Link href="/about"><a>About</a></Link></li>
    //     </ul>

    //     <style jsx>{`
    //         ul {
    //             background: #333;
    //             color: #fff;
    //             list-style: none;
    //             display: flex
    //         }

    //         ul li {
    //             font-size: 18x;
    //             margin-right: 20px;
    //             padding: 10px
    //         }

    //         ul li a {
    //             color: #fff;
    //             text-decoration: none;
    //         }
    //     `}</style>
    // </div>
)

export default Navbar;