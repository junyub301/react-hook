import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

import useInput from './useInput';
import useTabs from './useTabs';
import useTitle from './useTitle';
import useClick from './useClick';
import useConfirm from './useConfirm';
import usePreventLeave from './usePreventLeave';
import useBeforeLeave from './useBeforeLeave';
import useFadeIn from './useFadIn';
import useNetwork from './useNetwork';
import useScroll from './useScroll';
import useFullscreen from './useFullscreen';
import useNotification from './useNotification'
import useAxios from './useAxios';


// useState
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <h6>useState</h6>
//       <h1>{count}</h1>
//       <button onClick ={() => setCount(count + 1)} >+</button>
//       <button onClick ={() => setCount(count - 1)} >-</button>
//     </div>  
//   );
// }

// useInput
// function App() {
//   const maxLen = (value) => !value.includes("@") ;
//   const name = useInput("Mr.",maxLen);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name} />
//     </div>  
//   );
// }

// useTabs

// const content = [
//   {
//       tab:"Section 1",
//       content: "I'm the Content of the Section 1"
//   },
//   {
//       tab:"Section 2",
//       content: "I'm the Content of the Section 2"
//   }
// ];

// function App() {
  
//   const {currentItem, changeItem} = useTabs(0,content);

//   return (
//     <div className="App">
//       {content.map((section,index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>
//       {currentItem.content}
//       </div>
      
//     </div>  
//   );
// }



// useEffect
// function App() {
//     const sayHello = () => console.log("hello");
//     const [number, setNumber] = useState(0);
//     const [aNumber, setAnumber] = useState(0);
//     useEffect(sayHello,[number])
//     return (
//       <div className="App">
//         <h1>Hi</h1>
//         <button onClick ={() => setNumber(number + 1)} >{number}</button>
//         <button onClick ={() => setAnumber(aNumber + 1)} >{aNumber}</button>
//       </div>  
//     );
//   }

// useTitle
// function App() {
//   const titleUpdate = useTitle("Loading...");
//   setTimeout(() => titleUpdate("Home"),5000);
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>  
//   );
// }

//useClick
// function App() {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//   <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>  
//   );
// }

// useConfirm
// function App() {
//   const deleteWorld = () => console.log("Deleteing the word");
//   const abort = () => console.log("abort");
//   const confrimDelete = useConfirm("Are you sure", deleteWorld, abort);  
//   return (
//   <div className="App">
//     <button onClick = {confrimDelete}>Delete the world</button>
//     </div>  
//   );
// }

// usePreventLeave
// function App() {
//   const { enablePrevent, disablePrevent} = usePreventLeave();
//   return (
//   <div className="App">
//     <button onClick={enablePrevent}>Protect</button>
//     <button onClick={disablePrevent}>unProtect</button>
//   </div>  
//   );
// }

// usePageLeave
// function App() {
//   const begForLife = () => console.log("Pls dons leave");
//   useBeforeLeave(begForLife);
//   return (
//   <div className="App">
//     <h1>Hello</h1>
//    </div>  
//   );
// }

// useFadeIn
// function App() {
//   const fadeInH1 = useFadeIn(1,2);
//   const fadeInP = useFadeIn(5,10);
//   return (
//   <div className="App">
//     <h1 {...fadeInH1}>Hello</h1>
//     <p {...fadeInP}>p tag</p>
//    </div>      
//   );
// }

// useNetwork
// function App() {
//   const handleNteworkChhange = (online) => {
//     console.log(online? "We just went online" : "we are offline");
//   }
//   const onLine = useNetwork(handleNteworkChhange);
//   return (
//   <div className="App">
//     <h1>{onLine ? "Online" : "Offline"}</h1>
//   </div>  
//   );
// }

// useScroll
// function App() {
//   const { y } = useScroll();
//   return (
//   <div className="App" style={{height:"1000vh"}}>
//      <h1 style={{position:"fixed" , color: y > 100 ? "red" : "blue"}}>hello</h1>
//   </div>  
//   );
// }

// useFullscreen
// function App() {
//   const onFullS = (isFull) => {
//     console.log(isFull ? "We are full" : "We are small");
//   }
//   const {element, triggerFull, exitFull} = useFullscreen(onFullS);
//   return (
//   <div className="App" style={{height:"1000vh"}}>
//     <div ref= {element}>
//       <img  src="https://img6.yna.co.kr/etc/inner/KR/2016/05/19/AKR20160519112200077_01_i_P2.jpg" />
//       <button onClick = {exitFull}>exit</button>
//     </div>
//     <button onClick = {triggerFull}>Make fullscreen</button>
//   </div>  
//   );
// }


// use Notification
// function App() {
//   const triggerNotif = useNotification("Can I steal your kimchi?", {body: "I love kimchi don't you?"});

//   return (
//   <div className="App" style={{height:"1000vh"}}>
//     <button onClick = {triggerNotif}>Hi</button >
//   </div>  
//   );
// }


// useAxios
function App() {
 
  const {loading, data, error, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
  return (
  <div className="App" style={{height:"1000vh"}}>
    <h1>{data && data.status}</h1>
    <h2>{loading && "Loading"}</h2>
    <button onClick={refetch}>Refecth</button>
  </div>  
  );
}

export default App;
  