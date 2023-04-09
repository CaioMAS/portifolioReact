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
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Solid knowledge in basic structure and syntax, form creation, semantics, validation, CSS, best practices, and project examples." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Ability to create visual styles for HTML elements with colors, fonts, layouts, and effects." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Proficiency in programming language for creating interactive scripts, manipulating the DOM, and consuming APIs." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Experience in developing scalable and real-time backend applications, using libraries and frameworks." },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, text: "Knowledge in NoSQL document-oriented databases, with ability to create and query collections." },
    { id: "react", name: "React", icon: <DiReact />, text: "Experience in creating scalable user interfaces (UI), reusable components, and utilizing libraries and frameworks." },
]

const TechnologiesContainer = () => {
    return (
        <section className="techologies-container">
            <h2>Technologies</h2>
            <div className="technlogies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer