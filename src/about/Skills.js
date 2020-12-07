

import { Col,Row } from "react-bootstrap";

// Data
const skills =[
    {
        title:"Languages",
        elements: ["C","C++","Python","JavaScript","Java(beginner)"]
    },
    {
        title:"Libraries/Frameworks",
        elements: ["Django","React","Bootstrap","OpenCV","Numpy","Pandas","Matplotlib"]
    },
    {
        title:"Databases",
        elements: ["MySQL"]
    },
    {
        title:"Others",
        elements: ["Data Structures and Algorithms","HTML","CSS","Git/GitHub"]
    }
]

/*CSS*/

const ele ={
    display: "inline-block",
    backgroundColor: "#00001a",
    color:"#e6e6ff",
    margin: "6px",
    padding: "3px 8px",
    borderRadius: "100px",
    fontSize: "20px",
}

const skill = {
    color: "#00001a",
}

const h1 = {

    textAlign:"left",
    color: "#00001a",
    fontFamily: "'IM Fell French Canon', serif",
    fontSize:'3.2vw',
    fontStyle: 'italic',
    paddingBottom: '10px',
    paddingLeft: '85px',
    fontWeight: '400',
    marginTop:"100px",
    marginRight:"60%",
    marginBottom: '60px',
    borderBottom: '2px solid #00001a',
    borderTop: '2px solid #00001a',
}
const skillsclass = {
    textAlign:"left"
}

function Skills(){
    return(
        <div id="Skills" style = {skillsclass}>
            <h1 style={h1}> Technical Skills </h1>
            {skills.map((skill) => (
                <div className = "skill" style={{ color: "#00001a",justifyContent: "left"}}>
                        <Row style ={{margin: "10px 40px"}}>
                            <Col>
                                <h3>{skill.title}</h3>
                            </Col>
                            <Col >
                                <div className="elements"style = {{display: "inline-block"}}>
                                {skill.elements.map((element) => (
                                    <div className="Element" style ={ele}>
                                        {element}
                                    </div>
                                ))}
                                </div>
                            </Col>
                        </Row>
                        
                </div>
                ))
            }
        </div>  
    )
}

export default Skills;