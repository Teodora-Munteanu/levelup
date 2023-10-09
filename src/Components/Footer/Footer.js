import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="text-center text-white mb-0" >
            <div className="container pt-4">
            
            <section className="mb-1">
            
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1 mb-0"
                href="https://www.facebook.com/teeu.teo"
                role="button"
                data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1 mb-0"
                    href="https://www.instagram.com/teuuut/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1 mb-0"
                    href="https://www.linkedin.com/in/munteanu-teodora-95a756226/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i></a>
                <Link className="btn btn-link btn-floating btn-lg text-dark m-1 mb-0" to="/contact"><i className="fa-regular fa-envelope" ></i></Link>
                </section>
            
            </div>
            
            <div className="text-center text-dark p-2 mb-1" >
                    
                © 2023 Copyright:
                Teodora Munteanu
            </div>
        </footer>
    )
}

export default Footer;
