const NewPage = ({props}) => {
    return(
        <a className="text-decoration-none" href={props.link}>{props.name}</a>
    )
}

export default NewPage