import "./WorkExperience.css"
import WorkExperienceItem from "./WorkExperienceItem"
const WorkExperience = props => {


    const workList = [
        {
            start: "Aug 2022",
            end: "Dec 2022",
            position: "Machine learning developer",
            company: "Infilock Company -intern",
            location: "Toronto, Canada, (Remote)",
            focus: ["Anomaly Detection using machine learning methods", "Data Analysis", "Python developer", "Predictive maintenance of HVAC systems"]
        },
        {
            start: "Jan 2022",
            end: "Apr 2022",
            position: "Full-stack developer",
            company: "Edgecom Energy - intern",
            location: "Toronto, Canada, (Remote)",
            focus: ["Codeless API service", "Python (Machine Learning)", "ReactJS (Frontend)", "Node JS (Backend)", "PostgreSQL", "REST APIs."]
        },
        {
            start: "Sep 2019",
            end: "Aug 2021",
            position: "Full-stack developer",
            company: "City development and innovation company",
            location: "Tehran, Iran",
            focus: ["City bank mobile application", "Frontend: {Flutter (mobile application) - ReactJS (Admin Panel)}", "NodeJS (Admin Panel) - Mobile application APIs (JAVA)"]
        },
        {
            start: "Sep 2019",
            end: "Apr 2020",
            position: "Full-stack developer",
            company: "E-nemayandeh insurance company (contract)",
            location: "Tehran, Iran (remote)",
            focus: ["Insurance exploration", "comparison and analysis application", "Flutter (Mobile application)", "NodeJS", "Mongodb"]
        },
        {
            start: "Oct 2018",
            end: "Dec 2019",
            position: "Front-end developer",
            company: "IOEC company",
            location: "Tehran, Iran",
            focus: ["Flutter", "ReactJS", "PostgreSQL"]
        },
        {
            start: "Sep 2015",
            end: "Aug 2018",
            position: "Research assistant",
            company: "BISP Lab., Sharif University of Tech.",
            location: "Tehran, Iran",
            focus: ["Computer vision", "machine learning", "biomedical image and signal processing", "Biomedical imaging"]
        },
    ]
    return <div className="work_experience__container">
        <div className="timeline__work">
            {
                workList.map((item, idx) => {
                    const dir = (idx % 2 === 0) ? "right__work" : "left__work"
                    return <div  key={item.start+item.end+item.company} className={`work__container ${dir}`} >
                        <WorkExperienceItem start={item.start} end={item.end} position={item.position} company={item.company} location={item.location} focus={item.focus}/>
                    </div>
                })
            }
        </div>
    </div>
}


export default WorkExperience;