import React from "react";
import IconCopy from "./IconCopy";
import IconCheck from "./IconCheck";


const Icon = ({ id, props }) => {

    const icons = {

        copy: IconCopy,
        check: IconCheck,
    };

    const component = icons[id] || null;
    if(!component) return null;

    return <div className={`svg ${id}`}>{React.createElement(component, props)}</div>
};

export default Icon;