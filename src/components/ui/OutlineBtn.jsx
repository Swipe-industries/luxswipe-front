function OutlineBtn(props) {
  const {label, onClick} = props //This is called destructuring. We can also directly pass the variables in the function
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="text-base-1 hover:text-contrast-3 border border-base-1 hover:bg-base-1 font-medium rounded-lg text-xs px-3 py-2 text-center"
      >
        {label}
      </button>
    </>
  );
}

export default OutlineBtn;
