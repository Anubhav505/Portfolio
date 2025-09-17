import { useEffect } from "react";
import Header from "./Header"
import Main from "./Main";

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);
  
  return (
    <div className='flex mx-auto max-w-screen-xl px-6 md:px-12'>
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-12 lg:py-0">
          <Header />
          <Main />
        </div>
      </div>
  )
}

export default Content