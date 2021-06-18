## 프로젝트 목적
React Hooks 공부


## React Hooks
functional coponent에서 state를 가질 수 있게 해준다.

### useState
사용법 : const [state변수 , state변수 갱신 ] = useState(초기값)

- 적용 전
```javascript
import React from "react";

class App extends React.component {
  state = {
    count:0
  }

  modify = n => {
      this.setSate({count:n});
  }

  render() {
      const {count} = this.state
      return {
          <h1>{count}</h1>
          <button onClick={this.modify(count + 1)}>add</button>
          <button onClick={this.modify(count - 1)}>Minus</button>
      }
  }
}
```

- 적용 후 
```javascript
import React, {useState} from "react";

const App = () => {
    const [count,setCount] = useState(0);
    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
        </>
    )
}

```


### useEffect
- componentDidMount , componentWillUnmount, componentDidUpdate의 기능과 동일한 function
- 두개의 인자를 받는데 첫번째는 function으로서의 effect, 두번째는 어떤 값이 존재하면 그 값을 변경할 때만 실행,
- 어떤 경우에도 실행시키고 싶지 않을 경우 []을 넣어준다.


```javascript
import React, {useState,useEffect} from "react";

const App = () => {
    const [aNumber, setANumber] = useState(0);
    const [bNumber, setBNumber] = useState(0);
    const aNumberAdd = () => setANumber(aNumber + 1);
    const bNumberAdd = () => setBNumber(bNumber + 1);

   // mount / 모든 update시 실행
    useEffect(() => console.log("mount/ all update"))

    // mount일때만 실행
    useEffect(() => console.log("only mount"),[])

    // mount / aNumber값이 바뀔때 만 실행
    useEffect(() => console.log("mount / update aNumber"),[aNumber])

    // componentWillUnMount를 호출 하려면 retrun 함수를 사용
    userEffect(() => {
        console.log("mount/ update");

        return () => {
            console.log("unMount");
        }
    })


    return ( 
        <>
        <h1>{aNumber}</h1>
        <h1>{bNumber}</h1>
        <button onClick={aNumberAdd}>aNumAdd</button>
        <button onClick={bNumberAdd}>bNumAdd</button>
        </>
    )
    
}
```
