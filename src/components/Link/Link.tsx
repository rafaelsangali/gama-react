import "./style.css"

interface LinkProps {
    texto:string
    redirect:string
}

export default function Link(props: LinkProps){
    return(
        <a href="/contato">
            {props.texto}
        </a>
    )
}