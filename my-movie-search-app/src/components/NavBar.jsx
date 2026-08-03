import "../css/Navbar.css"

function NavBar (){
    return(
        <nav className="navbar">
            <div className="navbar-brand">🎥 Flixer</div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/favourites">Favourites</a>

            </div>
        </nav>
    );
}

export default NavBar