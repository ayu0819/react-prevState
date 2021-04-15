import React, {useState} from 'react';
import styled from 'styled-components';

const CountText = styled.p`
margin: 0 auto;
text-align: center;
font-weight: bold;
 span{
     font-size: 5em;
     color: #FF385C;
     margin: 0 0.5em;
 }
`;

const Contents = styled.div`
 padding: 5em 0 3em 0;
 margin: 0 auto;
 text-align: center;
 button {
     margin: 1em;
     font-size: 1.5em;
     padding: 0.5em;
     border-radius: 0.5em;
 }
`;

const Count = () =>  {
    // 安全なソース
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const plusFive = () => {
        for(let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }

     return(
         <Contents>
           <CountText>Count <span>{count}</span></CountText>
           <button onClick={() => setCount(initialCount)}>Reset</button>
           {/* <button onClick={() => setCount(count + 1)}>＋</button> */}
           <button onClick={() => setCount(prevCount => prevCount + 1)}>＋</button>
           {/* <button onClick={() => setCount(count - 1)}>−</button> */}
           <button onClick={() => setCount(prevCount => prevCount - 1)}>−</button>
           <button onClick={plusFive}>＋5</button>
         </Contents>
     )

      // 安全でないソース
    // const initialCount = 0
    // const [count, setCount] = useState(initialCount)

    // const plusFive = () => {
    //     for(let i = 0; i < 5; i++) {
    //         // setCount(count + 1)
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }

    //  return(
    //      <Contents>
    //        <CountText>Count <span>{count}</span></CountText>
    //        <button onClick={() => setCount(initialCount)}>Reset</button>
    //        {/* <button onClick={() => setCount(count + 1)}>＋</button> */}
    //        <button onClick={() => setCount(prevCount => prevCount + 1)}>＋</button>
    //        {/* <button onClick={() => setCount(count - 1)}>−</button> */}
    //        <button onClick={() => setCount(prevCount => prevCount - 1)}>−</button>
    //        <button onClick={plusFive}>＋5</button>
    //      </Contents>
    //  )
}

export default Count