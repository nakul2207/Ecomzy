
import Form from "./template";
function Signup({setloggedIn}){
    return(
        <Form
        title="Welcome To Ecomzy"
        desc1="Discover today’s must-haves and future favorites."
        desc2="Explore a wide range of clothes and everyday essentials."
        formtype="signup"
        setloggedIn={setloggedIn}
        ></Form>
    )
}

export default Signup;

