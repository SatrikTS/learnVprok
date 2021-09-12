import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.scss';
import Prices from "../Prices/Prices";
// import 'react-tabs/style/react-tabs.css';

const TabsList = () => {
    return (
        <Tabs className="tabs-list">
            <TabList className="tabs-list__list">
                <Tab className="tabs-list__tab">Среднее</Tab>
                <Tab className="tabs-list__tab">Усреднение позиций</Tab>
            </TabList>

            <TabPanel className="tabs-list__panel">
                <Prices
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