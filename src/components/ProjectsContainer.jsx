import { Link } from "react-router-dom"

import "../styles/components/projectcontainer.sass"

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projects</h2>
            <p>
            Here you can learn in detail about some of my projects. Explore and discover more about each of them!
            </p>

            <Link to={"/project"} className="btnProject">            
            View Projects          
            </Link>
            
        </section>
    )
}


export default ProjectsContainer