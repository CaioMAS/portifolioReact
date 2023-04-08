import ContainerProject from "./ContainerProject"
import { Link } from "react-router-dom"
import {BiArrowBack} from "react-icons/bi"

import '../styles/components/pagproject.sass'

const PagProject = () => {
    return (
        <div id="project">
            <h1>Projetos</h1>
            <Link className="link" to={"/"}>
            <div className="link-home">
                <BiArrowBack id="seta"/>
                <h3>Home</h3>
            </div>
            </Link>            
            <ContainerProject/>
        </div>
    )
}

export default PagProject