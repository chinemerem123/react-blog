const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'5px',
                    padding:"5px"
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;