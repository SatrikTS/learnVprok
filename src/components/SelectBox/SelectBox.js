import React, {useState} from "react";
import './style.scss';

const SelectBox = ({children}) => {
    const [isActive, setActive] = useState(false);

    const showMenu = () => {
        setActive(!isActive);
    }

    return (
        <div className={isActive ? 'select-box is-active': "select-box"}>
            <div className="select-box__caption" onClick={showMenu}>SPOT</div>
            <div className="select-box__wrap">
                {React.Children.map(children, (child, i) => (
                    <span className="select-box__item">{child}</span>
                ))}
            </div>
        </div>
    )
}

export default SelectBox;