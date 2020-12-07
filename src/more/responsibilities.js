import '../IM_Fell_French_Canon/IMFellFrenchCanon-Italic.ttf'; 
/* Data */
const responsibilities = [
    {
        role: "Mentor",
        organisation: "LeanIn @IGDTUW",
        startDate: "September 2020",
        endDate: "Present",
        description: "Mentoring a community of approximately 150 students on campus in the field of algorithms and competitive programming. Preparing assignments, monthly contests, and clarifying the doubts of mentees"
    },
    {
        role: "Microsoft Student Learn Ambassador",
        organisation: "Microsoft",
        startDate: "August 2020",
        endDate: "Present",
        description: "Organized various workshops on topics such as Basic Coding in Python and Front-End Web Development, which were attended by 60 people per workshop on average."
    },
    {
        role: "Senior Executive Committee Member",
        organisation: "IEEE IGDTUW",
        startDate: "July 2020",
        endDate: "Present",
        description: "Managing various technical events, workshops, and talks in the university with IEEE, IGDTUW."
    },
    {
        role: "Core Team Member",
        organisation: "Online Communications Team - Women Who Code Delhi",
        startDate: "March 2020",
        endDate: "Present",
        description: "Organising various online Webinars as a part of the Online Communications Team of the Core Committee."
    },
    {
        role: "Executive Committee Member",
        organisation: "IEEE IGDTUW",
        startDate: "September 2019",
        endDate: "June 2020",
        description: "Managed various technical events, workshops, and talks in the university with IEEE, IGDTUW."
    },
    {
        role: "Organiser",
        organisation: "Progate IGDTUW Week Of Learning",
        startDate: "August 2020",
        endDate: "August 2020",
        description: "Organized a week-long training on HTML/CSS using resources provided by the Progate online platform. Also organized a workshop on the following weekend, guiding the students through their first Web Development project."
    }
]

/* CSS */
const responsib = {
    backgroundColor: "white",
    borderRadius: '20px',
    boxShadow:' 0px 2px 5px 0px #00001a',
    marginBottom: '20px',
    padding: '2vw',
    width: '60%',
    display: 'inline-block'
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
function Responsibilities(props){
    return(
        <div className="group responsibilities" >
            <h1 style={h1}> Responsibilities </h1>
            {responsibilities.map((responsibility) => (
                <div className="responsibilty" style={responsib}>
                    <h2 style = {h2}>{responsibility.role} </h2>
                    <h3 style = {h3}>{responsibility.organisation}</h3>
                    <p style = {p}>{responsibility.startDate} - {responsibility.endDate}</p>
                    <p style = {p}> {responsibility.description} </p>
                </div>
            ))}
        </div>
    )
}

export default Responsibilities;