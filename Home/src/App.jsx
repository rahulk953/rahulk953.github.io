import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/website";
import { Suspense } from "react";
import About from "./components/AboutUs/About";
import Contact from "./components/ContactUs/Contact";
import Services from "./components/Services/Services";
import Rooms from "./components/Residencies/Rooms";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/about" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
