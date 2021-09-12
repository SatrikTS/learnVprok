import './style.scss'
import {useState} from "react";

const Prices = (props) => {
    const data = props.pricesList;
    console.log(data)
    return (
        <div className="prices">
            {data.average &&
                <span className="prices__caption">
                    Средняя цена позиции: 207,5 $
                </span>
            }
            <div className="prices__inputs">
                {
                    data.list.map((item, i) =>
                        <div className="prices__input-group" key={i}>
                            <label htmlFor="" className="prices__label">{item.label}</label>
                            {item.value &&
                                <input
                                    type="text"
                                    className="prices__input"
                                    placeholder={item.value}/>
                            }
                            {item.result &&
                                <span className="prices__input-result">
                                    {item.result}
                                </span>
                            }

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Prices;