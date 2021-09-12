import React from "react";
import './style.scss';
import SelectBox from "../SelectBox/SelectBox";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <span className="header__title">Калькулятор расчёта среднего</span>
                    <SelectBox>
                        {['TAL', 'RIG', 'LPL']}
                    </SelectBox>
                </div>
            </div>
        </header>
    )
}

export default Header;