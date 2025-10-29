import './Navbar.css'; // Puedes personalizar estilos aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function Navbar() {



return (
    // Comentario en JS
    <>

        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="custom-collapsed-content">
            <h5 className="h4">Collapsed content</h5>
            <span>Toggleable via the navbar brand.</span>
        </div>
        </div>


         {/*  dentro del JSX debes usar la sintaxis esta sintaxis para comentarios */}

        {/*  -----------1° elemento---------- */}
        <nav className="navbar navbar-expand-lg custom-navbar">


            {/*  -----------2° elemento---------- */}
            <div className="container-fluid custom-container">   


        

                {/*  -----------4° elemento---------- */}
                <div className="collapse navbar-collapse custom-navbar-collapse" id="navbarNav">
                    
                    {/*  -----------5° elemento---------- */}
                    <ul className="navbar-nav custom-nav-list">



                        
                        <li className="nav-item">
                        <a className="nav-link icono-navbar" aria-current="page" href="#">
                            <FontAwesomeIcon icon={faHouse} className="fa-icon me-2" />
                            {/* Puedes dejar solo el ícono o agregar texto si lo deseas */}
                        </a>
                        </li>





                        <li className="nav-item">
                            <a className="nav-link" href="#sobre-mi">Sobre mí</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>

);
}

export default Navbar;