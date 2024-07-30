
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from './component/Community';
import Login from './component/Login';
import Navbar from './component/Navbar';
import EmotionGraph from './component/EmotionGraph';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import Home from './component/Home';
import Map from './component/Map';
import Quizz from './component/Quizz';
import Health from './component/Health';
import NestedComments from "./pages/CommentsPage";
import Tabs from "./pages/TabsPage";
import Modal from "./pages/ModalPage";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Health />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/map" element={<Map />} />
        <Route path="/comment" element={<Community />} />
        <Route path="/emotion" element={<EmotionGraph />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        {/* <Route path="/nested-comments" element={<NestedComments />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/nested" element={<Modal />} /> */}
      </Routes>
      {/* <Community/> */}
      <Footer />
    </div>
  )
}

export default App;
