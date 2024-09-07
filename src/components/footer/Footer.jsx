import './Footer.css'
import { useState } from 'react';

// Hooks

const Footer = () => {

  const [names, setNames] = useState(["Eshban", "Zara", "Fraz", "Fizza"]);
  const [nameIndex, setNameIndex] = useState(0); // Track current index

  const nextName = () => {
    setNameIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevName = () => {
    setNameIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h1>Current Name: {names[nameIndex]}</h1>

      <button onClick={prevName}>Previous Name</button>
      <button onClick={nextName}>Next Name</button>
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

