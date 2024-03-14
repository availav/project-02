import img1 from "../../../assets/hero-img.png";
import "./Home.css";


function Home() {
  return (
    <div className="container-fluid container-home ">
      <div className="row">
        <div className="col-lg-6  order-2 order-lg-1">
          <div className="home-text ">
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className=" home-btn  ">
              <button className="get-start">Get started</button>
              <a className="watch-video">
              <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
                watch video
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pt-0 order-1 order-lg-2 align-items-center">
          <div className="home-img ">
            <img src={img1} alt="heroimg" className="homeimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
