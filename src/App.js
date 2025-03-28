import Layout from "./components/Layout/Layout";
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      })
      AOS.refresh();
    }, [])
  return <Layout />;
}

export default App;
