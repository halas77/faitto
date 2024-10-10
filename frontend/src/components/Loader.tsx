import { useState, useEffect } from "react";

const Loader = () => {
  const facts = [
    "Faitto leverages blockchain to bring transparency to the supply chain.",
    "Blockchain technology ensures the integrity of the data in Faitto.",
    "Faitto helps reduce fraud in the supply chain by recording every step on the blockchain.",
    "With Faitto, you can trace the origin of products with just a click.",
    "Supply chain management just got smarter with Faitto's blockchain integration.",
  ];

  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    setRandomFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-white text-black">
      <div className="relative flex items-center justify-center mb-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-2 justify-center items-center my-4">
            <img
              src="/logo.svg"
              alt="Logo Image"
              className="w-12 h-12 
              rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-900">Faitto.</h1>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="h-8 w-8 bg-gray-500 rounded-full animate-ping" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-xs font-normal text-center max-w-xs">
        {randomFact}
      </p>

      <p className="mt-4 text-xs text-gray-500 text-center">
        Make sure you have MetaMask installed in your browser.
      </p>
    </div>
  );
};

export default Loader;
