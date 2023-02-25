import AboutMe from "../../components/about_me/AboutMe";
import Footer from "../../components/footer/Footer";
import Introduction from "../../components/introduction/Introduction";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Main = props => {
    return <>
    <Introduction />
    <AboutMe />
    <Skills />
    <Projects />
    <Footer /></>
}

export default Main;