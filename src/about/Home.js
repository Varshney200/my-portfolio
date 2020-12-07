
import myImage from "./my-image.jpeg";
const about = {
    margin: "50px",
    color: "#00001a"
}

const AboutMe= {
    padding: "0 20vw",
    color: "#00001a"
}

const img = {
    borderRadius:"100%",
    width: "300px",
    height: "300px",
    border: "None"
}

function About(props){
    return(
        <div className='About' style={about}>
            <img src={myImage} style= {img} alt ="Archita Varshney"></img>
            <div className="AboutMe" style={AboutMe}>
                <h1> Hi! I am Archita</h1>
                <p> I am a third-year engineering student at Indira Gandhi Delhi Technical University for Women pursuing a bachelor’s 
                    degree in Computer Science and Engineering. I am a Web Development and Machine Learning enthusiast. I am a quick 
                    thinker and an avid problem solver, always curious to explore new technologies.</p> 
                <p> I am a highly adaptive and hardworking individual looking for an opportunity in Software Development where I can
                    gain the necessary industrial exposure, enhance my skill set and help build applications that create an impact.</p>
            </div>
        </div>
    )
}


export default About ;