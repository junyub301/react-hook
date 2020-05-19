import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    
    if ( !allTabs || !Array.isArray(allTabs) ) {
        return;  
    }
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}; 

export default useTabs;