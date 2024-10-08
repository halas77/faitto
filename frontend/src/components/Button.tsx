const Button = () => {
  return (
    <div className="flex justify-center">
      <a
        className="group inline-flex items-center bg-green-700 hover:bg-green-700 border border-green-700 px-8 py-3  rounded-full"
        href="/products"
      >
        <p className=" text-white text-sm">See more products</p>
        <span className="group-hover:bg-green-700 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-green-700 font-semibold text-white text-sm">
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Button;
