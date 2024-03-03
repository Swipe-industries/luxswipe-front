import React, {useState} from "react";
import BrevoForm from "../BrevoForm";

function StartBtn({ label }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <button 
      onClick={() => setShowSignUp(true)}
      className="text-contrast-3 bg-patriarch hover:bg-patriarch-dim hover:scale-[1.01] font-poppins md:px-5 px-4 md:py-3 py-2 md:text-lg text-xs rounded-3xl border border-mystic/50">
        {label}
      </button>
      {showSignUp && <BrevoForm onClose={() => setShowSignUp(false)} />}
    </div>
  );
}

export default StartBtn;
