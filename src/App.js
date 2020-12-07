import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './header/navigation';
import About from './about/Home';
import Skills from './about/Skills';
import Footer from './footer/Footer';
import Projects from './Projects/projects';
import Education from './more/education';
import Experience from './more/experience';
import Extracurriculars from './more/extracurriculars';
import Responsibilities from './more/responsibilities';
import Achievements from './more/achievements';
import {Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <MyNavBar/>
        <div className="views">
          <Route path="/portfolio">
              <About />
              <Skills />
            </Route>
            <Route path="/home">
              <About />
              <Skills />
            </Route>
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/extracurriculars" component={Extracurriculars} />
            <Route path="/achievements"  component={Achievements} />
            <Route path="/responsibilities"  component={Responsibilities} />
        </div>
          <Footer/>
      </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <MyNavBar/>
      <Router history={useRouterHistory(createHashHistory)({ queryKey: false })
} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/"  component = {MyNavBar}>
                <Route path="portfolio" component = {About} />
                <Route path="home" component = {About} />
                <Route path="projects" component = {Projects }/>
                <Route path="experience" component = {Experience} />
                <Route path="education" component = {Education} />
                <Route path="extracurriculars" component = {Extracurriculars} />
                <Route path="achievements" component = {Extracurriculars} />
                <Route path="responsibilities" component = {Responsibilities} />
            </Route>
      </Router>
      <Footer/> */}