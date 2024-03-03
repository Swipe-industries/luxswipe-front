import React from "react";
function InputField({
  fieldId, 
  fieldType, 
  isRequired = false, 
  placeholder, 
  onChange 
}) {
  return (
    <>
      <input
        id={fieldId}
        required = {isRequired}
        type={fieldType}
        placeholder={placeholder}
        className="mb-2 w-full placeholder-base-3 bg-transparent border text-base-1 border-base-1 hover:border-base-3 px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:border-base-3 tracking-tight overflow-hidden"
        onChange={onChange}
      />
    </>
  );
}

export default InputField;
