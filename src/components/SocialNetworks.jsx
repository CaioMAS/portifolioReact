import {FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'

import '../styles/components/socialNetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/caio-santos-332889160/" },
    {name: "github", icon: <FaGithub/>, link: "https://github.com/CaioMAS"},
    {name: "whatsapp", icon: <FaWhatsapp/>, link: "https://whatsfacil.com/415a54"}
]

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
           {socialNetworks.map((network) => (
            <a target='_blank' href={network.link} className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
           ))}
        </section>
    )
}


export default SocialNetworks