import "./price.css";
import { FaCheck  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Pricing() {
  return (
    <section id="price">
      <div className="container pricing">
        <div className="section-title text-align-center st">
          <h1>Pricing</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
            <div className="col-lg-4">
            <div className="box">
              <h3>Free Plan</h3>
              <h4><sup>$</sup>0<span>per month</span></h4>
              <ul>
                <li><FaCheck /> Quam adipiscing vitae proin</li>
                <li><FaCheck /> Nec feugiat nisl pretium</li>
                <li><FaCheck /> Nulla at volutpat diam uteera</li>
                <li ><RxCross1 /> <span>Pharetra massa massa ultricies</span></li>
                <li ><RxCross1 /> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
            </div>
            <div className="col-lg-4">
            <div class="box featured">
              <h3>Business Plan</h3>
              <h4><sup>$</sup>29<span>per month</span></h4>
              <ul>
                <li><FaCheck /> Quam adipiscing vitae proin</li>
                <li><FaCheck /> Nec feugiat nisl pretium</li>
                <li><FaCheck /> Nulla at volutpat diam uteera</li>
                <li><FaCheck /> Pharetra massa massa ultricies</li>
                <li><FaCheck /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="box">
              <h3>Developer Plan</h3>
              <h4><sup>$</sup>49<span>per month</span></h4>
              <ul>
                <li><FaCheck /> Quam adipiscing vitae proin</li>
                <li><FaCheck /> Nec feugiat nisl pretium</li>
                <li><FaCheck /> Nulla at volutpat diam uteera</li>
                <li><FaCheck /> Pharetra massa massa ultricies</li>
                <li><FaCheck /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}

export default Pricing;


