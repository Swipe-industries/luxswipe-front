function OutlineBtn({label, onClick}) {
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
