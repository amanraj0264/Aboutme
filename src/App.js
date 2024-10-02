import About from "./Page/About";
import Demo from "./Page/Demo";

import Footer from "./Page/Footer";
import Home from "./Page/Home";
import Main from "./Page/Main";
import Project from "./Page/Project";
import {Services} from "./Page/Services";
import Skills from "./Page/Skills";



function App() {
  return (
    <div>

      <Demo></Demo>
      {/* <Home></Home> */}
      
      <About></About>
      <Main></Main>
      <Services></Services>
      <Skills></Skills>
      <div>
      <h1 className='text-center font-sora text-3xl grandient'>Project</h1>
      <Project ></Project>
      <Footer></Footer>

      
      </div>
      
    </div>
  );
}

export default App;
