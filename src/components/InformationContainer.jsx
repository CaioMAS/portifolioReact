import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Phone</h3>
                    <p>+55 38 998001014</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>caiosantos.eng@hotmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Location</h3>
                    <p>Montes Claros - MG</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer