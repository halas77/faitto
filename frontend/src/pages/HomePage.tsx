// import About from "../components/About";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Service from "../components/Service";
// import Tag from "../components/Tag";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Product />
      <Service />
      <Feature />
      <Contact />
      {/* <About /> */}
      {/* <Tag /> */}
    </div>
  );
};

export default HomePage;
