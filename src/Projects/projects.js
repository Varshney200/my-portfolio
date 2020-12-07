import { Button, Row, Container, Col} from 'react-bootstrap';
import './projects.css';
import WebSocial from "./WebSocial.jpeg";
import backgroundGenerator from './background-generator.jpeg';
import todo from './todo.PNG'

const projects=[
    {
        Title: "WebSocial",
        image: WebSocial,
        Techstack:["HTML/CSS, Bootstrap, Django, SQLite"],
        description: "Built a social networking website using Django Framework. The user can upload a picture, like and comment on pictures of other users and visit their profiles.",
        link: "https://github.com/Varshney200/WebSocial"
    },
    {
        Title: "Background Generator",
        image: backgroundGenerator,
        Techstack:[ "JavaScript, DOM Manipulation"],
        description: "A Web Application built using DOM manipulation and JavaScript that generates a gradient for a combination of colors. The application can be used for design purposes.",
        link: "https://github.com/Varshney200/Background-generator"
    },
    {
        Title: "To-Do Application",
        image: todo,
        Techstack:[ "HTML, Bootstrap, SQLite, Django Framework"],
        description: "Developed a Web Application using which the user can manage daily tasks through an interactive To-Do List.",
        link: "https://github.com/Varshney200/WebSocial"
    },
    {
        Title: "Face-Detector",
        image: todo,
        Techstack:[ "Python, OpenCV, face_recognition library, SQL"],
        description: "Developed a software at Cisco ThingQbator, IGDTUW that identifies unique faces and counts the number of people visiting a place during the whole day.",
        link: "https://github.com/Varshney200/Face-Detector"
    }
];

function Projects(){
    return (
        <div className="projects">
            <Container>
                {projects.map((project) => (
                    <div className="project">
                        <Row key={project.Title}>
                            <Col>
                                <img src={project.image} alt = {project.Title}></img>
                            </Col>
                            <Col>
                                <h1> {project.Title}</h1> 
                                <p style = {{fontSize: "1.2vw" }}><b>Tech Stack</b> : {project.Techstack}</p>
                                <p>{project.description}</p>
                                <Button variant="primary" bsPrefix="btn code" href={project.link}>
                                    See Code
                                </Button>
                                
                            </Col>
                        </Row>
                    </div>
                    
                ))

                }
                
            </Container>
        </div>
    )
}

export default Projects;