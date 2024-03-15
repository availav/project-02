import img1 from "../../../assets/hero-img.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./skills.css"

function Skills() {
  return (
    <section id="skills">
        <div className="container py-4 my-3">
            <div className="row">
                <div className="col-lg-6">
                    <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 skills-heading px-15">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                   </p>
                   
                   <div className="skills-content">
                    
                    <span>Html</span>
                   <ProgressBar now={100}  className="progress" />
                   
                   <span>Css</span>
                   <ProgressBar now={80} className="progress" />

                   <span>Javascript</span>
                   <ProgressBar now={50}  className="progress" />
                   </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills