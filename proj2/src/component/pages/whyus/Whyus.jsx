import "./whyus.css"
import Accordion from 'react-bootstrap/Accordion';

function Whyus() {
  return (
    <section id="whyus">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-strecth order-2 order-lg-1">
                <div className="accordian-title">
                    <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong>
</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                </div>
                <div className="accordian">
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>01 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>02 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>03 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

                </div>
            </div>
        <div className="col-lg-5 d-flex flex-column justify-content-center align-items-strecth order-1 order-lg-2"></div>
            </div>
        </div>
       

    </section>
  )
}

export default Whyus