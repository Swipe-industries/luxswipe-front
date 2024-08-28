export const formatErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "The email address is already in use";
      case "auth/invalid-email":
        return "The email address is not valid";
      case "auth/operation-not-allowed":
        return "This operation is not allowed";
      case "auth/weak-password":
        return "The password is too weak";
      case "auth/user-disabled":
        return "The user account has been disabled by an administrator";
      case "auth/user-not-found":
        return "There is no user record corresponding to this email";
      case "auth/invalid-password":
        return "The password is invalid";
      case "auth/invalid-credential":
        return "Credentials are invalid";
      case "auth/missing-password":
        return "Please enter a password";
      case "auth/missing-email":
        return "Please enter an email";
      // Add more cases as needed
      default:
        return "An unknown error occurred.";
    }
  };