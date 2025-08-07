import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero key="/" />} />
          <Route path="/portfolio" element={<Content key="/portfolio" />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
