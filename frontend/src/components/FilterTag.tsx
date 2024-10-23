const FilterTag = ({ label, active }: { label: string; active: string }) => {
  return (
    <button
      type="button"
      className={`py-1.5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-green-100    focus:outline-none whitespace-nowrap  disabled:opacity-50 disabled:pointer-events-none
        ${
          active === label
            ? "bg-green-900 hover:bg-green-900 text-green-50"
            : "bg-green-100 text-green-950 hover:bg-green-200 "
        }
        `}
    >
      {label}
    </button>
  );
};

export default FilterTag;
