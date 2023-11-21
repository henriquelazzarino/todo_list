type CheckboxProps = {
  id: string;
  label?: string;
};

const Checkbox = (props: CheckboxProps) => (
  <div className="flex gap-2">
    <input
      className="
          peer relative appearance-none shrink-0 w-4 h-4 rounded-sm mt-1 bg-white
          checked:bg-dark-green checked:border-0
          focus:outline-none
          duration-200 cursor-pointer
        "
      type="checkbox"
      {...props}
    />
    <svg
      className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export default Checkbox;
