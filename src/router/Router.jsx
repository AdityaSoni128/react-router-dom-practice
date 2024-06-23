import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import App from "../App";




export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />      
    </Route>
  )
);
