import './Navbar.scss'


export const Navbar = () => {

    return(
        <header className="header container ">
            <div className="header__container">
                <img src={'./public/LogoPatin.png'} alt="LOGO" className='logo'/>


                <nav className="navbar">
                    <a href='#' className="navbar__link">Enlase 1</a>
                    <a className="navbar__link">Enlase 2</a>
                    <a className="navbar__link">Enlase 3</a>
                </nav>
            </div>
        </header>
    )
}

