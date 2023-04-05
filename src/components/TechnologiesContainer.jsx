import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMongodb,
    DiReact,
} from "react-icons/di"

import '../styles/components/technologiesContainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Sei isso de html" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Sei isso de CSS" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Sei isso de Javascript" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Sei isso de Node" },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, text: "Sei isso de MongoDB" },
    { id: "react", name: "React", icon: <DiReact />, text: "Sei isso de React" },
]

const TechnologiesContainer = () => {
    return (
        <section className="techologies-container">
            <h2>Tecnologias</h2>
            <div className="technlogies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.text}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer