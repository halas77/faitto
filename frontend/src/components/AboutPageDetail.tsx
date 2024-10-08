const AboutPageDetail = () => {
  return (
    <div className="max-w-[85rem] px-4sm:px-6 lg:px-8  mx-auto">
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
            We tackle the challenges start-ups face
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500">
            Besides working with start-up enterprises as a partner for
            digitalization, we have built enterprise products for common pain
            points that we have encountered in various products and projects.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex gap-x-5">
                <svg
                  className="shrink-0 mt-1 size-6 text-green-600"
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
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Creative minds
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We choose our teams carefully. Our people are the secret to
                    great work.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDetail;
