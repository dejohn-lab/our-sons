import "./Home.css";
import OurSons from '../../images/Oursons_2021.jpg';
import {Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <h1 className="text-center heading1"><span className="styles2">Author of Our Son's</span> <span className="styledtext">Dejohn
                Huffman</span></h1>

            <div className="text-center">

                <div className="inlineWraps">
                    <h2 className="shadow p-3 mb-5 bg-white borderRadius" >Drama Suspense!</h2>

                </div>
                <img src={OurSons} alt="Our Sons Logo"/>
                <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/billyclub_1/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                <Link to='/contact' className="btn btn-danger btn-lg getStartedButton">Get Started</Link>
            </div>
        </>
    )
}

export default Home;