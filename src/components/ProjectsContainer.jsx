import { Link } from "react-router-dom"

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Conheça com mais detalhes um pouco mais sobre meus projetos.
            </p>

            <Link to={"/project"} className="btn">            
                Ver Projetos            
            </Link>
            
        </section>
    )
}


export default ProjectsContainer