
import Form from "./template";
function Signup({setloggedIn}){
    return(
        <Form
        title="Welcome To Ecomzy"
        desc1="Build skills fro today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="signup"
        setloggedIn={setloggedIn}
        ></Form>
    )
}

export default Signup;

