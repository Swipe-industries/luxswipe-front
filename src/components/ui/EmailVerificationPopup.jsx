import React from "react";
import { CircularProgress, Button, Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";

function EmailVerificationPopup({ isOpen, onClose,}) {
  const user = useSelector((state) => state.auth);
  return (
    <>
      <div
        className={`${
          isOpen
            ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            : "hidden"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md border border-mystic p-8 rounded-2xl shadow-lg max-w-md w-full ">
          <h2 className="text-white font-kalnia font-light text-3xl mb-6 flex justify-center">
            Verify Your Account
          </h2>
          <div className="flex flex-col items-center">
              <p className="text-white font-poppins font-normal text-center">
                An email verification link has been sent to your email address.
                Please check your inbox and click on the link to verify your
                account.
              </p>
          </div>
          <div className="flex justify-center">
            {user.emailVarified ? (
              onClose()
            ) : (
              <Spinner className="mt-6 text-white font-poppins font-medium py-2 px-4"></Spinner>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerificationPopup;
