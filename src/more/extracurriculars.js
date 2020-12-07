import {Card} from 'react-bootstrap';
import { BsFillLightningFill } from "react-icons/bs";

/* Data */
const extracurriculars = [
    " Member of the eco club of IGDTUW - Greensphere. Worked for a sustainable environment focused on SDG-12",
    " Head Coordinator of Event Management team in Cultural fest - Taarangana' 20. Managed and conducted various cultural events at the fest including the Fine Arts event and Fun Events.",
    " Actor at The Street Play Society of IGDTUW - Rahnuma. Performed at 30+ locations in Delhi to raise awareness against Ethnic Discrimination",
    " Coordinator of Event Management and Public Relations team in cultural fest - Taarangana' 19. Carried out the offline as well as online publicity. Also managed various events at The fest including the Street Play Competition and Fun Events"
]

/* CSS */
const extracurr = {
    listStyleType: 'none',
    textAlign: 'left',
    margin: '20px 100px',
    fontSize: '20px',
    backgroundColor: "rgba(0,0,0,0)"
};

const h1 = {
    textAlign:"left",
    color: "#00001a",
    fontFamily: "'IM Fell French Canon', serif",
    fontSize:'3.2vw',
    fontStyle: 'italic',
    paddingBottom: '10px',
    paddingLeft: '85px',
    fontWeight: '400',
    marginTop:"0",
    marginRight:"50%",
    marginBottom: '40px',
    borderBottom: '2px solid #00001a',
}

/*Component*/
function Extracurriculars(props){
    return(
        <div className="group extracurriculars" >
            <h1 style={h1}> Extracurriculars </h1>
            <ul>
            {extracurriculars.map((extracurricular) => (
                <div className="element extracurricular" style={extracurr}>
                    <Card style={{border:"none", backgroundColor: "rgba(0,0,0,0)"}}>
                        <li style={{border:"none", paddingTop: "20px", paddingBottom: "0px", paddingLeft: "20px",}}><BsFillLightningFill /> {extracurricular} </li>
                    </Card>
                </div>
                
            ))}
            </ul>
            
    </div>
    )
}

export default Extracurriculars;