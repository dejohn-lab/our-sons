function Home() {
    return (
        <>
            <h1 className="text-center heading1"><span className="styles2">Author of Our Son's</span> <span classNameName="styledtext">Dejohn
                Huffman</span></h1>

            <div className="text-center">

                <div className="inlineWraps">
                    <h2 className="shadow p-3 mb-5 bg-white borderRadius" >Drama Suspense!</h2>

                </div>
                <img src="images/Oursons_2021.jpg" />
                <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/billyclub_1/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                <button type="button" className="btn btn-danger btn-lg getStartedButton">Get Started</button>
            </div>
        </>
    )
}

export default Home;