import React, {useState, useEffect, useRef} from 'react';
import ReacDOM from 'react-dom';


const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    
    return { enablePrevent, disablePrevent}
}


export default usePreventLeave;