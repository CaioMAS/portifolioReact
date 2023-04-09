import AmigoDaObra from '../img/amigo-da-obra.png'
import GeradorSenha from '../img/gerador-senha.png'
import Estudio21 from '../img/estudio21.png'
import ControleFinanceiro from '../img/controle-financeiro.png'
import Space from '../img/space.png'
import Clinica from '../img/dermato.png'

import '../styles/components/cardproject.sass'

const projects = [
    {
        id: "controleFinanceiro", name: "Controle Financeiro", image: <img src={ControleFinanceiro} />, text: "Project developed with the aim of managing monthly financial expenses. This project includes the user registration feature using Firebase authentication.", tech: "Javascript | HTML | CSS | MongoDB | NodeJs | Express | Firebase authentication | Mongoose ", link: "https://github.com/CaioMAS/controleDeGastos"
    },
    {
        id: "amigoDaObra", name: "Amigo da Obra", image: <img src={AmigoDaObra} />, text: "Project developed with the purpose of facilitating the life of Civil Engineers when making material surveys for construction.", tech: "JavaScript | HTML | CSS ", link: "https://github.com/CaioMAS/AmigoDaObra"
    },
    {
        id: "geradorSenha", name: "Gerador de Senha", image: <img src={GeradorSenha} />, text: "Project designed to provide support when generating different passwords.", tech: "JavaScript | HTML | CSS", link: "https://github.com/CaioMAS/GeradorDeSenha"
    },
    {
        id: "estudio21", name: "Estúdio 21", image: <img src={Estudio21} />, text: "Project developed to start a web page for Estúdio21, it is still in the development phase.", tech: " HTML | CSS", link: "https://github.com/CaioMAS/SiteEstudio21"
    },
    {
        id: "space", name: "Space", image: <img src={Space} />, text: "Project developed to practice React skills.", tech: "JavaScript | React", link: "https://github.com/CaioMAS/space"
    },
    {
        id: "dermato", name: "Dermato", image: <img src={Clinica} />, text: "Project developed to practice CSS skills, still in the development phase.", tech: " HTML | CSS", link: "https://github.com/CaioMAS/clinicaEstetica"
    }
]

const CardProject = () => {
    return (
        <section className="project-container">
            <div className="project-grid">
                {projects.map((proj) => (
                    <div className="project-card" id={proj.id} key={proj.id}>
                        <div className="project-info">
                            <h3>{proj.name}</h3>
                            {proj.image}
                            <p>Technologies: {proj.tech}</p>
                            <p className='description'>{proj.text}</p>
                            <a target='_blank' href={proj.link} className="btn">Access repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardProject