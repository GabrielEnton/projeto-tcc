import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { copyToClipboeard } from "../helpers/copyToClickboard";



const Copy = (props) =>{
    
    const SETTIMEOUT_MS = 3000
    const [hasCopied, setHasCopied] = useState(false);
    const timeoutRef = useRef(null)

    useEffect(()=>{
        setTimeout(setHasCopied, SETTIMEOUT_MS, false);

        return () => {
            if(!timeoutRef) return;
            clearTimeout(timeoutRef.current)
        }

    }, [hasCopied])

    const handleOnClick = () => {
        copyToClipboeard(props.response)
        
        setHasCopied(true);
    };


    const iconId = hasCopied ? 'check': 'copy';

return (
    <button onClick={handleOnClick} type="button" className="copy">
        <Icon id={iconId}/>
    </button>
)

};

export default Copy;