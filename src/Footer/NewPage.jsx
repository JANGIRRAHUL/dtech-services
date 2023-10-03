import { Link } from "react-router-dom"

const NewPage = ({props}) => {
    return(
        <Link className="text-decoration-none" to={props.link}>{props.name}</Link>
    )
}

export default NewPage