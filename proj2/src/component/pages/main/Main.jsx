import logo1 from "../../../assets/client-1.png"
import logo2 from "../../../assets/client-4.png"
import logo3 from "../../../assets/client-3.png"
import "./main.css"

function Main() {
  return (
   <section id="main">
    <div className="container-fluid mainlogo">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src={logo1} alt=""  className="img-fluid logo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={logo2} alt=""  className="img-fluid logo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={logo3} alt=""  className="img-fluid logo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={logo1} alt=""  className="img-fluid logo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={logo2} alt=""  className="img-fluid logo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={logo3} alt=""  className="img-fluid logo" />
            </div> 
        </div>
    </div>
   </section>
  )
}

export default Main