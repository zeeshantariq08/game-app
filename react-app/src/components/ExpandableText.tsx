import {useState} from "react";


interface Props {
    children: string,
    maxChars?: number,
    onClick?: () => void
}

const ExpandableText = ({children, maxChars = 50, onClick}: Props) => {

    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        setExpanded(!expanded);

    }
    if (children.length <= maxChars) return <div><p>{children}</p></div>
    const text = expanded ? children : children.substring(0, maxChars)
    return <p>{text} ...
        <button onClick={() => toggle()}> {expanded ? 'Show Less' : 'Show More'}</button>
    </p>

}

export default ExpandableText