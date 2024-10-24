const TitleBar = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="pt-28 px-4">
      <div className="bg-gradient-to-r from-green-950 to-teal-950 max-w-[83rem] mx-auto px-4 sm:px-0 lg:px-0 py-24 space-y-8 rounded-3xl">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-semibold text-gray-50 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
            {title}
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-200">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
