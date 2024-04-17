import authService from "../services/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError, setStatus, setUser, clearError } from "../feature/authSlice";

function useGoogleLogin(setIsPopupOpen) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSingIn = async () => {
    dispatch(clearError());

    try {
      const response = await authService.googleSignin();
      if (response.providerId) {
        dispatch(setStatus(true));
        dispatch(setUser(response));
        navigate("/auth/newuser");
        // Redirect to the next page or perform any other necessary actions
      } else {
        dispatch(setError(response));
        setIsPopupOpen(true);
      }
    } catch (error) {
      dispatch(setError(error));
      setIsPopupOpen(true);
    }
  };
  return handleGoogleSingIn;
}

export default useGoogleLogin;
