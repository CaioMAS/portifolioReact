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
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Conhecimento sólido em estrutura e sintaxe básicas, criação de formulários, semântica, validação, CSS, melhores práticas e exemplos de projetos." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Habilidade em criar estilos visuais para elementos HTML com cores, fontes, layouts e efeitos." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Domínio da linguagem de programação para criação de scripts interativos, manipulação do DOM e consumo de APIs." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Experiência em desenvolver aplicações backend escaláveis e em tempo real, com uso de bibliotecas e frameworks." },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, text: "Conhecimento em banco de dados NoSQL orientado a documentos, com habilidade em criar e consultar coleções." },
    { id: "react", name: "React", icon: <DiReact />, text: "Experiência em criação de interfaces de usuário (UI) escaláveis, componentes reutilizáveis e utilização de bibliotecas e frameworks." },
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