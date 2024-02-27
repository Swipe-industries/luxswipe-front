function OutlineBtn(props) {
  const {label, onClick} = props //This is called destructuring. We can also directly pass the variables in the function
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="text-base-1 hover:text-contrast-3 border border-base-1 focus: hover:bg-base-1 focus:outline-none font-medium rounded-lg text-xs px-3 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-contrast-3 dark:hover:bg-base-2"
      >
        {label}
      </button>
    </>
  );
}

export default OutlineBtn;
