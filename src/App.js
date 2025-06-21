import logo from "./logo.svg";
import "./App.css";
import Section3 from "./Components/Aboutus";
import Testimonial from "./Components/Testimonial";
import Ourservice from "./Components/Ourservice";
import Aboutus from "./Components/Aboutus";
import Capablities from "./Components/Capablities";
import Blog from "./Components/Blog";
import Fotter from "./Components/Fotter";
import { Webtemplate } from "./Components/Webtemplate";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";

function App() {
  return (
    <>
      <Navbar />  
      <Ourservice/>
      <Aboutus />
      <Webtemplate/> 
      <Testimonial />
      <Capablities />
      <Blog />
      {/* `n<Subscribe/>  */}
      {/* <Fotter /> */}
    </>
  );
}

export default App;
