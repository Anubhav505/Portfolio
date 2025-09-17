import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./components/Content";

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
