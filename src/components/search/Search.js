import "./Search.css";
import { properties } from "../../data";
import Tabs from "./Tabs";
import Property from "./Property";
import { useState } from "react";

const tabs = ['all', ...new Set(properties.map((item) => item.option))];

const Search = () => {

    const [propertyData, setPropertyData] = useState(properties);
    const [tabIndex, setTabIndex]= useState(0);

    const filterPropertyData = (tab) => {
        if (tab === 'all') {
            setPropertyData(properties);
        }
        else {
            const newData = properties.filter((item) => item.option === tab);
            console.log(newData);
            setPropertyData(newData);
        }

    }

    return (
        <section className="search">
            <div className="search-container">
                <h2>Search your desired location</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                <div className="tabs">
                    {
                        tabs.map((item, index) => {
                            return (
                                <Tabs key={index}
                                    index={index}
                                    tabTitle={item} 
                                    filterPropertyData={filterPropertyData}
                                    tabIndex={tabIndex}
                                    setTabIndex={setTabIndex}/>
                            )
                        })
                    }
                </div>
                <div className="properties-container">
                    {
                        propertyData.map((item) => {
                            return (
                                <Property key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    option={item.option} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};
export default Search;