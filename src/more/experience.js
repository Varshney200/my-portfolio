import '../IM_Fell_French_Canon/IMFellFrenchCanon-Italic.ttf'; 
/* Data */
const internships = [
    {
        title: "Intern",
        company: "Cisco ThinqQbator, IGDTUW",
        location: "Delhi",
        startDate: "January 2020",
        endDate: "January 2020",
        description: "Worked on the following during the internship: Face Identification Software- Developed using Python. -It identifies unique faces and counts the number of people visiting the ThingQbator during the whole day.  -Fingerprint Scanner System- Contributed to the script of a software which records the attendance details of students in the university"
    },
    {
        title: "Open Source Contributor",
        company: "GirlScript Summer of Code",
        location: "Delhi",
        startDate: "March 2020",
        endDate: "May 2020",
        description: "Contributed to Open-Source Projects, Map-bot, a Python-based chatbot which helps in interacting with Google Maps, and Cosmos, a project that deals with Algorithms and Data Structures."
    },
    {
        title: "Mentor",
        company: "LeanIn @IGDTUW",
        location: "Delhi",
        startDate: "August 2019",
        endDate: "Feb 2019",
        description: "Mentoring a community of approximately 150 students on campus in the field of algorithms and competitive programming. Preparing assignments, monthly contests, and clarifying the doubts of mentees"
    },
    {
        title: "Mentee",
        company: "LeanIn @IGDTUW",
        location: "Delhi",
        startDate: "August 2019",
        endDate: "Feb 2019",
        description: "Got trained in the field of Competitive Programming by seniors and peers through various sessions and contests organized by LeanIn IGDTUW round the year."
    },
    {
        title: "Mentee",
        company: "WooTech",
        location: "Delhi",
        startDate: "August 2019",
        endDate: "Feb 2019",
        description: "Got mentored in Data Structures and Algorithms by experts in the field and built a deeper understanding of concepts through discussions and various assignments given by the mentors."
    }
]

/* CSS */
const intern = {
    backgroundColor: "white", 
    borderRadius: "30px",
    boxShadow: "0px 2px 5px 0px #00001a",
    marginBottom: "40px",
    padding: "2vw",
    width: "60%",
    display: "inline-block",
    fontSize: "100%",
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
const h4 = {
    fontSize:'1vw'
}
    

/*Component*/
function Experience(props){
    return (
        <div className="internships">
            <h1 style={h1}> Internships/Experience </h1>
            <br></br>
            {internships.map((internship) => (
                <div className="internship" style={intern}>
                    <h2 style={h2}>{internship.title} </h2>
                    <h3 style={h3}>{internship.company}</h3>
                    <h4 style={p}> {internship.location } </h4>
                    <p style={p}>{internship.startDate} - {internship.endDate}</p>
                    <p style={p}> {internship.description} </p>
                </div>
            ))}
        </div>
    )
}

export default Experience;