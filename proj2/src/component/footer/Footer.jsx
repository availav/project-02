import "./footer.css"
import { FaFacebook, FaTwitter, FaGooglePlusSquare,FaLinkedin,FaChevronRight  } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer">
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa natus esse totam?</p>
                    <form action="" method="post">
              <input type="email" name="email" fdprocessedid="fz0cd6"/><input type="submit" value="Subscribe" />
            </form>
                </div>

                </div>
            </div>
        </div>

        <div className="footer-top">
      <div className="container">
        <div className="row">

          
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Arsha</h3>
            <p>
            A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><FaChevronRight /><a href="#">Home</a></li>
              <li> <FaChevronRight /><a href="#">About us</a></li>
              <li> <FaChevronRight /><a href="#">Services</a></li>
              <li> <FaChevronRight /><a href="#">Terms of service</a></li>
              <li> <FaChevronRight /><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><FaChevronRight /> <a href="#">Web Design</a></li>
              <li> <FaChevronRight /><a href="#">Web Development</a></li>
              <li><FaChevronRight /> <a href="#">Product Management</a></li>
              <li><FaChevronRight /> <a href="#">Marketing</a></li>
              <li><FaChevronRight /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><FaTwitter /></a>
              <a href="#" className="facebook"><FaFacebook /></a>
              <a href="#" className="instagram"><FaTwitter /></a>
              <a href="#" className="google-plus"><FaGooglePlusSquare /></a>
              <a href="#" className="linkedin"><FaLinkedin /></a>
            </div>
          </div>

        </div>s
       
       
      </div>
    </div>

    <div className="container-fluid footer-bottom clearfix">
      <div className="copyright">
        © Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
       
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
    </section>
    
  )
}

export default Footer
