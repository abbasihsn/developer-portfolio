import "./Education.css"
import EducationItem from "./EducationItem"
const Education = props => {


    const educationList = [
        {
            start: "2021",
            end: "Present",
            degree: "PhD",
            university: "Carleton University",
            gpa: "A+",
            thesis: "Autonomous vehicle in adverse weather"
        },
        {
            start: "2013",
            end: "2015",
            degree: "MSc",
            university: "Sharif University of Tech.",
            gpa: "A",
            thesis: "Medical imaging"
        },
        {
            start: "2009",
            end: "2013",
            degree: "BSc",
            university: "Shahid Beheshti University",
            gpa: "A+",
            thesis: "Spinal mouse"
        }
    ]
    return <div className="education__container">
        <div className="timeline">
            {
                educationList.map((item, idx) => {
                    const dir = (idx % 2 === 0) ? "right" : "left"
                    return <div key={item.degree} className={`container ${dir}`} >
                        <EducationItem start={item.start} end={item.end} degree={item.degree} university={item.university} gpa={item.gpa} thesis={item.thesis}/>
                    </div>
                })
            }
        </div>
    </div>
}


export default Education;