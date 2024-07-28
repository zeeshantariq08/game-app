import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useState} from "react";

interface Props {
    onClick?: () => void
}

const Like = ({onClick}: Props) => {
    const [liked, setLiked] = useState(true)
    const toggle = () => {
        setLiked(!liked);
        if (onClick) {
            onClick();
        }
    }
    if (liked) return <div><FaHeart onClick={toggle} color="#ff6b81" size="50px"/></div>

    return <div><FaRegHeart onClick={toggle} size="50px"/></div>

    // return (
    //     <div>
    //         <FaHeart onClick={onClick} color="#ff6b81" size="50px"/>
    //
    //
    //     </div>
    // )
}

export default Like