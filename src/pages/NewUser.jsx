import React from "react";
import { Input } from "@nextui-org/react";

function NewUser() {
  return (
    <>
      <div
        className={`h-auto relative border border-mystic w-auto rounded-2xl p-10 md:mx-36 mx-5 mt-20 mb-5 bg-black`}
      >
        <h1 className="text-white font-kalnia font-light md:text-4xl text-2xl mb-10">
          Almost Done! <br />
          Just a Few More Details
        </h1>

        <form onSubmit="">
          <div className="mb-4">
            <p className="text-mystic font-poppins mb-1 ml-1">
              Choose a username
            </p>
            <Input
              required
              name="username"
              color="primary"
              type="text"
              placeholder="username"
              size="lg"
              variant="bordered"
              radius="md"
              className="text-white font-poppins font-medium placeholder:font-poppins"
              onChange=""
            />
          </div>
          <div className="mb-4">
            <p className="text-mystic font-poppins mb-1 ml-1">Display name</p>
            <Input
              required
              name="name"
              color="primary"
              type="text"
              placeholder="Name"
              size="lg"
              variant="bordered"
              radius="md"
              className="text-white font-poppins font-medium placeholder:font-poppins"
              onChange=""
            />
          </div>
        </form>
        {/* <div className="flex md:flex-col flex-row justify-center gap-52 md:gap-8 md:mb-10 mb-12">

        </div> */}
      </div>
    </>
  );
}

export default NewUser;
