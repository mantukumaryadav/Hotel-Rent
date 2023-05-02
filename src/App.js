import About from "./components/about/About";
import BestDeals from "./components/bestdeals/BestDeals";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Testimonial from "./components/testimonials/Testimonial";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Search/>
      <Testimonial/>
      <BestDeals/>
      <Footer/>
    </div>
  );
}

export default App;