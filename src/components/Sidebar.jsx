import '../styles/components/sidebar.sass'


import Avatar from '../img/foto-perfil.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Caio Santos" />
            <p className="title">Desenvolvedor fullstack</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download currículo</a>
        </aside>
    )
}


export default Sidebar