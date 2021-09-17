import React, {useState} from "react";
import './style.scss';

const Card = (props) => {
    const data = props.listData;
    const [counter, setCounter] = useState(1);
    const [buyPrice, setBuyPrice] = useState(215.3);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);

    if(counter<=0) {
        decrementCounter = () => setCounter(0);
    }


    const addData = (data) => {
        props.addTask(props.cardId, counter, buyPrice);
        setCounter(1);
    }

    const removeItem = (index) => {
        props.removeItem(index, props.cardId)
    }

    const handleChange = (event) => {
        setBuyPrice(event.target.value);
    }

    return (
        <div className="card">
            <h2 className="card__title">{props.caption}</h2>
            <div className="card__item">
                <div className="card__top">
                    <div className="card__headers">
                        <span className="card__captions">количество акций</span>
                        <span className="card__captions">цена покупки</span>
                        <span className="card__captions">сумма</span>
                    </div>
                    {data.length > 0 ?
                        data.map((item, index) =>
                            <div className="card__list" key={item.sum} >
                                <span className="card__list-count card__list-data">{item.count}</span>
                                <span className="card__list-price card__list-data">{item.price} $</span>
                                <span className="card__list-sum card__list-data">{item.sum} $</span>
                                <span className="card__list-remove card__list-data" onClick={() => removeItem(index)}></span>
                            </div>
                        ) :
                        <div className="card__list-empty">
                            Нет записей
                        </div>
                    }
                </div>
                <div className="card__bottom">
                    <div className="card__line-add">
                        <div className="card__line-counter">
                            <div className="card__count-change-group">
                                <span>{counter} шт</span>
                            </div>
                            <div className="count-button">
                                <span className="count-button__btn count-button__btn--minus minus" onClick={decrementCounter}>-</span>
                                <span className="count-button__btn count-button__btn--plus plus" onClick={incrementCounter}>+</span>
                            </div>
                        </div>
                        <div className="card__line-price">
                            <input className="card__line-input" type="text" value={buyPrice} onChange={handleChange}/> $
                        </div>
                        <button className="card__button" onClick={addData}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;