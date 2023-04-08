import { Link } from "react-router-dom"

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laboriosam rem esse possimus itaque impedit soluta, asperiores sit natus alias iste vitae quisquam recusandae reiciendis inventore dolores repellat delectus ab.
            </p>

            <Link to={"/project"} className="btn">            
                Ver Projetos            
            </Link>
            
        </section>
    )
}


export default ProjectsContainer