import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.scss';
import Prices from "../Prices/Prices";
import {useState, useEffect} from "react";

const TabsList = (props) => {

    const [averagePrice, setAveragePrice] = useState(0);

    const sum = function(arr){
        var result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i]
        }
        return result;
    }

    useEffect(() => {
        props.data.forEach((item) => {
            if(item.cardName === 'Точки входа') {

                const countArr = item.listData.map((item) => {
                    return item.count;
                });

                const costArr = item.listData.map((item) => {
                    return item.count * item.price;
                });

                setAveragePrice(sum(costArr) / sum(countArr));
            }
        })
    });

    return (
        <Tabs className="tabs-list">
            <TabList className="tabs-list__list">
                <Tab className="tabs-list__tab">Среднее</Tab>
                <Tab className="tabs-list__tab">Усреднение позиций</Tab>
            </TabList>

            <TabPanel className="tabs-list__panel">
                <Prices
                    averagePrice={averagePrice}
                    pricesList = {{
                        average: true,
                        list: [
                            {
                                label: 'Текущая цена',
                                value: '100'
                            },
                            {
                                label: 'Текущий профит',
                                result: '+ 2 200$'
                            }
                        ]
                        }
                    }
                ></Prices>
            </TabPanel>
            <TabPanel className="tabs-list__panel">
                <Prices
                    pricesList={
                        {
                           list:  [
                                {
                                    label: 'Желаемая средняя цена',
                                    value: '200'
                                },
                                {
                                    label: 'Текущая цена',
                                    value: '205'
                                }
                            ]
                        }
                    }
                ></Prices>
            </TabPanel>
        </Tabs>
    )
}


export default TabsList;