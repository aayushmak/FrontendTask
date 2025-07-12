import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PurpleMotion from './pages/PurpleMotion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
        <Route path='/motion-page' element={<PurpleMotion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
