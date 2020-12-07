import { GrAchievement } from "react-icons/gr";
import '../IM_Fell_French_Canon/IMFellFrenchCanon-Italic.ttf'; 

/* Data */
const achievements = [
    {
        title: "Flipkart's GirlsWannaCode Program",
        description: "Selected as 1 of the 189 students nationwide for Flipkart's GirlsWannaCode Mentorship Program.", 
    },
    {
        title: "GWC Scholar",
        description: " Received the GWC Scholarship awarded on the basis of exceptional performance in the Flipkart's GirlsWannaCode Mentorship Program." 
    },
    {
        title: "LeanIn Hacks",
        description: "Selected among the top 10 teams at LeanIn hacks." 
    }, 
    {
        title: "Facebook Hacker Cup' 20",
        description: "Participated and Qualified the online round of Facebook Hacker Cup'20." 
    },
]
/* CSS */
const achieve = {
    listStyleType:'none',
    textAlign: 'left',
    margin: '20px 200px',
    fontSize: '20px'
}

const h1 = {
    textAlign:"left",
    color: "#00001a",
    fontFamily: "'IM Fell French Canon', serif",
    fontSize:'55px',
    fontStyle: 'italic',
    paddingBottom: '10px',
    paddingLeft: '85px',
    fontWeight: '400',
    marginTop:"0",
    marginRight:"50%",
    marginBottom: '40px',
    borderBottom: '2px solid #00001a',
}


/* Component */
function Achievements(){
    return (
        <div className="achievements" >
            <h1 style={h1}> Achievements </h1>
            {achievements.map((achievement) => (
                <div className="achievement" style={achieve}>
                    <h3><GrAchievement/>  {achievement.title} </h3>
                    <p>{achievement.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Achievements