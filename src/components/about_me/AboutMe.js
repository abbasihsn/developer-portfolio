import classes from "./AboutMe.module.css"
import aboutImage from "../../assets/about_me.svg";
import Button from "../UI/Button";
import githubLogo from '../../assets/github.png';
import soLogo from '../../assets/stackoverflow.png';
import glLogo from '../../assets/gitlab.png';
import liLogo from '../../assets/linkedin.png';
import Icon from "../UI/Icon";
const AboutMe = () => {
    const socialMedia = [
        { src: githubLogo, href: "github", link: "https://github.com/abbasihsn/", id: 0},
        { src: soLogo, href: "stackoverflow", link: "https://stackoverflow.com/users/10866453/abbasihsn?tab=profile", id: 1 },
        { src: glLogo, href: "gitlab", link: "https://gitlab.com/Abbasihsnn", id: 2 },
        { src: liLogo, href: "linkedin", link: "https://www.linkedin.com/in/abbasihsn/", id: 3 }
    ]
    return <div className={classes.about}>
        <div className={classes.about__left}>
            <img src={aboutImage} alt="about_me" />
        </div>
        <div className={classes.about__right}>
            <div className={classes.description}>
                <h1>About Me</h1>
                <p>I am a <strong>full-stack developer</strong> and <strong>Machine Learning specialist</strong> based in <strong>Ottawa, Canada</strong> who loves innovation and learning. I build clean, appealing and functional interfaces which comply with the latest development standards.</p>
                <p>I I am eager to learn new things, the harder to learn the better I like it. I
                    have more than 5 years of experience in the field of Machine Learning and Computer vidsion and +4 years as a fullstack developer</p>
            </div>
            <div className={classes.button__section}>
                <Button title="CV" onClick={() => {
                    fetch('CV.pdf').then(response => {
                        response.blob().then(blob => {
                            // Creating new object of PDF file
                            const fileURL = window.URL.createObjectURL(blob);
                            // Setting various property values
                            let alink = document.createElement('a');
                            alink.href = fileURL;
                            alink.download = 'CV.pdf';
                            alink.click();
                        })
                    })
                }} />
                <div className={classes.social}>
                    {socialMedia.map(item => <Icon src={item.src} href={item.href} key={item.id} link={item.link} />)}
                </div>
            </div>
            <div className={classes.contact}>
                <h2>Contact me here!</h2>
                <a href="mailto:Abbasi.hsnn@gmail.com">Abbasi.hsnn@gmail.com</a>
                <a href="tel:343-988-7644">343-988-7644</a>
            </div>
        </div>
    </div>
}

export default AboutMe;