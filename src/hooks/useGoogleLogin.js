import authService from "../services/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError, setStatus, setUser, clearError } from "../feature/authSlice";
import dbService from "../services/dynamodb";

function useGoogleLogin(setIsPopupOpen) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSingIn = async () => {
    dispatch(clearError());

    try {
      const response = await authService.googleSignin();
      if (response.providerId) {
        const awsResponse = await dbService.getUser(response.uid);
        dispatch(setStatus(true));
        dispatch(setUser(response));
        if(response.uid === awsResponse.uid){ //it means existing user so log him in
          navigate(`/${awsResponse.username}`);
        }else{ // not existing user to redirect him to NewUser.jsx
          navigate("/auth/newuser", { state: { uid: response.uid } });
        }
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
