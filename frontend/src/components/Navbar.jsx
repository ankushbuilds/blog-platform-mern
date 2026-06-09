import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

            {/* Logo */}
            <Link className="navbar-brand fw-bold" to="/">
                BlogApp
            </Link>

            {/* Toggle for mobile */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    {/* If user is logged in */}
                    {token ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">
                                     Create New
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>
                        </>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;