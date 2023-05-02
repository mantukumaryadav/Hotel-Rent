const Tabs=({ index, tabTitle, filterPropertyData, tabIndex, setTabIndex })=>{
    return(
        <div className={index===tabIndex? "tab active": "tab" } 
            onClick={()=> {
                filterPropertyData(tabTitle);
                setTabIndex(index)
                }}>
            <h4>{tabTitle}</h4>
        </div>
    );
};
export default Tabs;