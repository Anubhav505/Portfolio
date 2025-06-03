// import { useState, useEffect, useRef } from 'react';
// import HomePage from './components/HomePage';


// function App() {
  //   const [pageInstances, setPageInstances] = useState([0]);
  //   const instanceCount = useRef(1);
  //   const MAX_PAGES = 2;
  
  //   useEffect(() => {
    //   window.onbeforeunload = () => {
      //     window.scrollTo(0, 0);
      //   };
      // }, []);
      
//   useEffect(() => {
  //     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;

//       if (scrollTop + windowHeight >= scrollHeight - 300) {
//         setPageInstances((prev) => {
  //           const newInstances = [...prev, instanceCount.current++];
  //           if (newInstances.length > MAX_PAGES) {
    //             newInstances.shift();
    //           }
    //           return newInstances;
    //         });
    //       }
    
//       if (scrollTop <= 300) {
//         setPageInstances((prev) => {
//           const newInstances = [instanceCount.current++, ...prev];
//           if (newInstances.length > MAX_PAGES) {
//             newInstances.pop();
//           }
//           return newInstances;
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
  //     <>
  //       {pageInstances.map((key) => (
    //         <div key={key}>
//           <HomePage />
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Scramble } from "./hooks/scramble";

function App() {
  Scramble();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
