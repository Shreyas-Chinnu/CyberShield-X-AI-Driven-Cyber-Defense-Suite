import './App.css';
import SkillsPage from './Components/SkillsPageComponent/Skills';
import HomePage from './Components/HomePageComponent/HomePage';
import Navbar from './Components/NavbarComponent/Navbar';
import EducationPage from './Components/EducationPageComponent/Education';
import ProjectPage from './Components/ProjectPageComponent/Project';
import Contact from './Components/ContactPageComponent/Contact';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='dark:bg-black'>
      <Navbar />
      <div className='pt-10 h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/education' element={<EducationPage/>} />
          <Route path='/projects' element={<ProjectPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5396256363603238"
     crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
