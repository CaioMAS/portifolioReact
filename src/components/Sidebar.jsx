import '../styles/components/sidebar.sass'


import Avatar from '../img/foto-perfil.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Caio Santos" />
            <p className="title">Fullstack Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a target='_blank' href= "https://mega.nz/file/Ejoj3RwS#BOxOt8NSzSKFeyEil8W5WFyFhtzNqPO_diBv5saJWg0" className="btn">Download resume</a>
        </aside>
    )
}


export default Sidebar