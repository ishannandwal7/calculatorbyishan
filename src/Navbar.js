import './Navbar.css';
function Navbar() {
    function Hide(){
        document.getElementById('main').style.display="none";
        document.getElementById('about').style.height="50%";
        document.getElementById('about').style.display="block";

        document.getElementById('about').style.fontSize="20px";
        document.getElementById('foot').style.display="none";


    }
    function show(){
        document.getElementById('main').style.display="block";
        document.getElementById('about').style.height="0%";
        document.getElementById('about').style.display="none";

        document.getElementById('foot').style.display="block";

 
    }
    return(
        <div className="nav" id="nav1">
            <div className="nav-brand">
                <h2>calculator</h2>
            </div>
            <div className="lin" >
                <a href="#" onClick={show}>home</a>
                <a href="# " onClick={Hide}>about</a>

            </div>
        </div>
    );
}
export default Navbar;