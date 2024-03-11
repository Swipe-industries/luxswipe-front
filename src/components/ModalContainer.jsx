import React, {useState} from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

function ModalContainer({onClose}) {

    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogIn, setShowLogIn] = useState(false);

    return ( 
        <>
            {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} openLogin={() => setShowLogIn(true)} handleContainer={onClose} />}
            {showLogIn && <LoginModal onClose={() => setShowLogIn(false)} handleContainer={onClose} />}
        </>
     );
}

export default ModalContainer;