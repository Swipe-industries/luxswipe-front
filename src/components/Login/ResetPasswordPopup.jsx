import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input, Button } from "@nextui-org/react";
import authService from "../../services/firebase";
import { useDispatch } from "react-redux";
import { clearError, setError } from "../../feature/authSlice";

const ResetPasswordPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError(""))
    // Handle form submission with the entered email
    try{
      const message = authService.resetPassword(email);
      dispatch(setError(message))
      onClose()
    } catch(error){
      dispatch(setError(error))
    }
  };
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-[1px] bg-opacity-75 z-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-black border border-base-2 shadow-lg rounded-lg p-6"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6 flex items-center justify-center">
                  <Input
                    name="email"
                    color="primary"
                    type="email"
                    placeholder="Email"
                    size="lg"
                    variant="bordered"
                    radius="md"
                    className="text-white font-poppins font-medium placeholder:font-poppins"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    size="sm"
                    color="primary"
                    variant="light"
                    className="font-poppins font-medium"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    color="primary"
                    variant="flat"
                    className="font-poppins font-medium"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResetPasswordPopup;
