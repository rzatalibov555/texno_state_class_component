import './Footer.css'
import { useState, useEffect } from 'react';

// Hooks

const Footer = () => {
    
    const [num, setNum] = useState(1)
    const [name, setName] = useState("Fizza")
    const [demo, setDemo] = useState("Good")

    useEffect(() => {
        console.log("start useEffect 1")
    },[name])


    useEffect(() => {
        console.log("start useEffect 2")
    },[num])
    // dependencies
    

  return (
    <div id='demo'>
        <h1>{num}</h1>
        <h1>{name}</h1>
        <h1>{demo}</h1>

        <button onClick={()=>{setNum(num+1)}}>+</button>
        <button onClick={()=>{setDemo("perfect")}}>from good to perfect</button>
        <button onClick={()=>{setName("Fraz")}}>Change Name</button>
    </div>
  );
};

export default Footer;



























// const Footer = () => {

//     const [pc, setPc] = useState("Hello")
//     const [comp, setComp] = useState("Fizza")
//     const [click, setClick] = useState(1)
//     const [names, seNames] = useState([
//         'Eshban',
//         'Zara',
//         'Fraz',
//         'Fizza'
//     ])

//     const chName_of_student = () => {
//         setPc("Zara")
//     }

//     const clickerMinus = () => {
//         setClick(click - 1)
//     }

//     // const clickerPlus = () => {
//     //     setClick(click + 1)
//     // }

//     return(
//         <div>
//             <h1>{pc}</h1>
//             <h1>{comp}</h1>
//             <h1>{click}</h1>
//             <button onClick={chName_of_student} >Ch Text</button>
//             <button onClick={() => setComp("Fraz")} >Ch Name</button>

//             <button onClick={clickerMinus}>-</button>
//             <button onClick={() => setClick(click + 1)}>+</button>

//         </div>
//     )
// }

// export default Footer;

