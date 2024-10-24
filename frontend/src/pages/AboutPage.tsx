import About from "../components/About";
import AboutCards from "../components/AboutCards";
import Contact from "../components/Contact";
import TitleBar from "../components/TitleBar";
import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import { GoRocket } from "react-icons/go";

const AboutPage = () => {
  const aboutData = [
    {
      Icon: GrPlan,
      label: "Vision",
      desc: "Our vision is to build a blockchain-powered marketplace for medical products that ensures transparency, authenticity, and safety.",
    },
    {
      Icon: GoRocket,
      label: "Mission",
      desc: "Our mission is to deliver a trusted marketplace that ensures the authenticity, safety, and accessibility of medical products through blockchain technology.",
    },
    {
      Icon: GoGoal,
      label: "Goal",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae mollitia autem quae aliquid. Nulla voluptatum deserunt saepe. Accusamus, deserunt.",
    },
  ];
  return (
    <>
      <TitleBar
        title="About us"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore."
      />
      <About />
      <div className="max-w-[85rem] px-4 sm:px-6 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.map((item, index) => (
            <AboutCards
              key={index}
              label={item.label}
              desc={item.desc}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default AboutPage;
