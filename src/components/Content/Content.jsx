import { useEffect } from "react";
import Header from "./Header"
import Main from "./Main";

const Content = () => {
  useEffect(() => {
    // Ensure page scrolls to top when component mounts
    window.scrollTo(0, 0);
    // Reset any body styles that might interfere
    document.body.style.overflow = 'auto';
  }, []);
  
  return (
    <div className=' flex bg-[#0a192f] px-80'>
        <Header />
        <Main />
      </div>
  )
}

export default Content