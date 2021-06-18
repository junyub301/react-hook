import  {useState, useEffect} from 'react';


const useNetwork = (onChange) => {
    const [status, setStatue] = useState(navigator.onLine);
    const handleChange = () =>{
        if (typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatue(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online",handleChange);
        window.addEventListener("offline",handleChange);
        
        return () => {
            window.removeEventListener("offline",handleChange);
            window.removeEventListener("online",handleChange);
        };
    }, []);
    return status;
}

export default useNetwork; 