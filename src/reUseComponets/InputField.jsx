function InputField(props) {
    const {
        placeLabel
    } = props
  return (
    <>
      <input
        type="text"
        placeholder={placeLabel}
        className="mb-2 w-full placeholder-base-3 bg-transparent border text-base-1 border-base-1 hover:border-base-3 px-4 py-2 rounded-xl focus:outline-none focus:border-mid-1"
      />
    </>
  );
}

export default InputField;
