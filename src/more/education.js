import '../IM_Fell_French_Canon/IMFellFrenchCanon-Italic.ttf'; 
/* Data */
const education = [
    {
        level:"B.Tech, Computer Science and Engineering",
        school: "Indira Gandhi Delhi Technical University for Women",
        percentage:"Percentage: 85.25%",
        date: " Expected: 2022"
    },
    {
        level:"Senior Secondary",
        school: "Presidium, Ashok Vihar",
        percentage:"Percentage: 93.6%",
        date: "2018"
    },
    {
        level:"Secondary",
        school: "Ryan International School, Rohini",
        percentage:"CGPA: 9.6",
        date: "2016"
    }
]

/* CSS */
const lev = {
    backgroundColor: "white",
    borderRadius: '30px',
    boxShadow: '0px 2px 5px 0px #00001a',
    marginBottom: '40px',
    padding: '2vw',
    width: '60%',
    display: 'inline-block',
    fontSize: '100%'
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
    marginTop:"0",
    marginRight:"50%",
    marginBottom: '40px',
    borderBottom: '2px solid #00001a',
}

const p = {
    fontSize:'1.2vw'
}

const h3 = {
    fontSize:'2.4vw'
}
const h2 = {
    fontSize:'2.2vw'
}
    

/*Component*/
function Education(){
    return (
        <div className="group education" >
            <h1 style={h1}> Education </h1>
            {education.map((element) => (
                <div className="level" style={lev}>
                        <h2 style = {h2}>{element.level} </h2>
                        <h3 style = {h3}>{element.school}</h3>
                        <p style = {p}> {element.date } </p>
                        <p style = {p}>{element.percentage}</p>
                </div>
            ))}
        </div>
    )
}

export default Education;