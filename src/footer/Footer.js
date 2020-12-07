import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
// import {my_contact} from './my_contact';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// for more icons visit "https://react-icons.github.io/"
const my_contact = [
    {
        name: "EMAIL",
        text: "architavarshney200@gmail.com",
        link: "mailto:architavarshney200@gmail.com",
        icon: FiMail
    },
    {
        name: "LINKEDIN",
        text: "Archita Varshney",
        link: "https://www.linkedin.com/in/archita-varshney-290550188",
        icon: FaLinkedin
    },
    {
        name: "GITHUB",
        text: "Varshney200",
        link: "https://github.com/Varshney200",
        icon: FaGithub
    },
    {
        name: "FACEBOOK",
        text: "Archita Varshney",
        link: "https://www.facebook.com/architavarshney/",
        icon: FaFacebook
    }
];


function Footer(props){
    return(
        <div id='footer'>
            <Container>
                <Row>
                    <Col bsPrefix="title"> 
                    <p style = {{fontSize: "40px"}}> Contact Me</p>
                    </Col>
                    <Col>
                    <div id='ContactInfo'>
                    {
                        my_contact.map((contact)=>(
                           
                            <div className="contact" key={contact.name}>
                                 <Container>
                                    <Row> 
                                        <a alt="contact.name" href={contact.link}> < contact.icon /> {contact.text} </a>
                                        {/* </Col> */}
                                    </Row>
                                </Container>
                            </div>
                            
                        ))
                    }  
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;