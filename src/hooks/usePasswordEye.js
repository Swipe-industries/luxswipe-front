import { useState } from "react";

function usePasswordEye() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [fieldType, setFieldType] = useState("password");

  const showPassword = () => setFieldType("text");
  const hidePassword = () => setFieldType("password");

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
    if (isPasswordVisible) {
      showPassword();
    } else {
      hidePassword();
    }
  }
  return [fieldType, isPasswordVisible, togglePasswordVisibility];
}

export default usePasswordEye;
