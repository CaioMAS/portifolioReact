import { Link } from "react-router-dom"

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projects</h2>
            <p>
            Here you can learn in detail about some of my projects. Explore and discover more about each of them!
            </p>

            <Link to={"/project"} className="btn">            
            View Projects          
            </Link>
            
        </section>
    )
}


export default ProjectsContainer