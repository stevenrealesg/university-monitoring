import { NavLink } from "react-router-dom";

function Sidebar() {

    const handleSignOut = () => {

    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "250px", height: "100vh", position: "fixed" }}>
            <div className="text-center text-white">
                <span className="fs-4">University</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink to='/app/monitor' className="nav-link text-white">
                        <i className="bi bi-people-fill me-2"></i>
                        Monitores
                    </NavLink>
                    <NavLink to='/app/monitoring' className="nav-link text-white">
                        <i className="bi bi-card-list me-2"></i>
                        Monitorías
                    </NavLink>
                </li>
            </ul>
            <div className="dropdown">
                <span className="d-flex align-items-center text-white dropdown-toggle cursor-pointer" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle ms-2 me-2"></i>
                    <strong>usuario</strong>
                </span>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><span className="dropdown-item cursor-pointer" onClick={handleSignOut}>Cerrar sesión</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;