
import Form from "./template";
function Signup({setloggedIn}){
    return(
        <Form
        title="Welcome To Ecomzy"
        desc1="Join us and find everything you need for today, tomorrow, and beyond."
        desc2="Explore our wide range of clothing and daily necessities to future-proof your style and convenience."
        formtype="signup"
        setloggedIn={setloggedIn}
        ></Form>
    )
}

export default Signup;

