import AmigoDaObra from '../img/amigo-da-obra.png'
import GeradorSenha from '../img/gerador-senha.png'
import Estudio21 from '../img/estudio21.png'
import ControleFinanceiro from '../img/controle-financeiro.png'
import Space from '../img/space.png'
import Clinica from '../img/dermato.png'

import '../styles/components/cardproject.sass'

const projects = [
    {
        id: "controleFinanceiro", name: "Controle Financeiro", image: <img src={ControleFinanceiro} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
    },
    {
        id: "amigoDaObra", name: "Amigo da Obra", image: <img src={AmigoDaObra} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
    },
    {
        id: "geradorSenha", name: "Gerador de Senha", image: <img src={GeradorSenha} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
    },
    {
        id: "estudio21", name: "Estúdio 21", image: <img src={Estudio21} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
    },
    {
        id: "space", name: "Space", image: <img src={Space} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
    },
    {
        id: "dermato", name: "Dermato", image: <img src={Clinica} />, text: "Projeto bla bla bla bla bla bla bla bla bla bla bla bla bla"
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
                            <p>{proj.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardProject