import React, {useState, useEffect, useRef} from 'react';
import ReacDOM from 'react-dom';

const useConfirm = (message = "", onConfirm, onCancle ) => {
    
    if (!onConfirm && typeof onConfirm !== "function") {
        return;
    }
    
    if (!onCancle && typeof onCancle !== "function") {
        return;
    }



    const confirmAction = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(message)){
            onConfirm();
        } else {
            onCancle();
        }
    };

    return confirmAction;
}

export default useConfirm;