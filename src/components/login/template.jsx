import { SignupForm } from "./SignupForm";
import { LoginForm } from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Form({ title, desc1, desc2, formtype, setloggedIn ,setuser}) {
  return (
    <div className="flex justify-center items-center mx-auto my-14 max-w-4xl py-8 px-4 md:px-8 " >
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <p className="mb-4">
          <span className="mr-2">{desc1}</span>
          <span>{desc2}</span>
        </p>

        <div>
          {formtype === "signup" ? (
            <SignupForm setloggedIn={setloggedIn}></SignupForm>
          ) : (
            <LoginForm setloggedIn={setloggedIn} setuser={setuser}></LoginForm>
          )}
        </div>

        <div className="my-4 flex items-center px-[6.5rem]">
          <div className="flex-1 border-b border-gray-400"></div>
          <p className="mx-1 text-gray-600">OR</p>
          <div className="flex-1 border-b border-gray-400"></div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-1 px-4 w-80 rounded focus:outline-none focus:shadow-outline">
            <div className="flex justify-center items-center gap-1">
            <FcGoogle fontSize="1.4rem" ></FcGoogle>
            <p>Sign Up with Google</p>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Form;
