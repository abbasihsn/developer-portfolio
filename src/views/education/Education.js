import "./Education.css"
const Education = props => {


    const educationList = [
        {
            start: "2021",
            end:"Present",
            degree: "PhD",
            university: "Carleton University",
            gpa: "A+",
            thesis: "Autonomous vehicle in adverse weather"
        },
        {
            start: "2013",
            end:"2015",
            degree: "MSc",
            university: "Sharif University of Tech.",
            gpa: "A",
            thesis: "Medical imaging"
        },
        {
            start: "2009",
            end:"2013",
            degree: "BSc",
            university: "Shahid Beheshti University",
            gpa: "A+",
            thesis: "Spinal mouse"
        }
    ]
    return <div className="education__container">
        <div className="timeline">
            {
                educationList.map((item, idx)=>{
                    const dir = (idx%2===0)?"right":"left"
                    return <div key={item.degree} className={`container ${dir}`} >
                    <div className="content">
                        <h2>{item.start}-{item.end}</h2>
                        <h1>{item.degree} | {item.university}</h1>
                        <p>GPA: {item.gpa}</p>
                        <p>Thesis: {item.thesis}</p>
                    </div>
                </div>
                })
            }
        </div>
    </div>
}


export default Education;