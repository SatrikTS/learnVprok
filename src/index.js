import React, {useState} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Tabs from "./components/TabsList/TabsList";

// import App from './App';

const App = () => {
    const [cardData, setCardData] = useState([
        {
            cardName: 'Точки входа',
            cardId: 1,
            listData: [
                {
                    count: 10,
                    price: 100,
                    sum: 1000
                },
                {
                    count: 20,
                    price: 90,
                    sum: 1820
                }
            ]
        },
        {
            cardName: 'Точки выхода',
            cardId: 2,
            listData: [
                {
                    count: 2,
                    price: 32,
                    sum: 64
                },
                {
                    count: 20,
                    price: 72,
                    sum: 1440
                }
            ]
        }
    ])


    const addTask = (cardId, counter, buyPrice) => {
        const newItem =
        {
            count: counter,
            price: buyPrice,
            sum: 1440
        }
        cardData.filter((item) => {
            if(item.cardId === cardId) {
                newItem.sum = newItem.count * newItem.price;
                item.listData.push(newItem);
            }
        })
        setCardData([...cardData])
    }

    const removeItem = (index, cardId) => {
        cardData.filter((item) => {
            if(item.cardId === cardId) {
                item.listData.splice(index, 1);
            }
        })
        setCardData([...cardData])
    }

    return (
        <div className="app">
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className="card-group">
                        {
                            cardData.map((item) =>
                                <Card
                                    caption={item.cardName}
                                    listData={item.listData}
                                    cardId={item.cardId}
                                    key={item.cardId}
                                    addTask={addTask}
                                    removeItem={removeItem}
                                >
                                </Card>
                            )
                        }
                    </div>
                    <Tabs data={cardData}></Tabs>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);