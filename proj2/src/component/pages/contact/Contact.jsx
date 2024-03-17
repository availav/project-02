import "./contact.css"
import { MdLocationOn, MdEmail,  MdAddIcCall } from "react-icons/md";
function Contact() {
  return (
    <section id="service">
        <div className="container-fluid service ">
            <div className="section-title svc">
                <h2>contact us</h2>
                <p >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                
              <div className="address">
              <MdLocationOn className="icon" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
              <MdEmail className="icon" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
              <MdAddIcCall className="icon" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56172.84915143013!2d77.2440957646588!3d28.364802785733794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcc300000001%3A0x67bc00f21965540a!2sBPTP!5e0!3m2!1sen!2sin!4v1710681152475!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
                
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name"className="form-control" id="name" required="" />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required="" />
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required="" />
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required=""></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div className="text-center"><button type="submit" >Send Message</button></div>
            </form>
          </div>

         

        </div>
            
        </div>
    </section>
  )
}

export default Contact
