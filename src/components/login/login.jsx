
import Form from "./template"

function Login({setloggedIn,setuser}){

    return(
        <Form
        title="Welcome Back"
        desc1="Discover essentials for today, tomorrow, and beyond."
        desc2="Shop the latest trends and daily necessities to enhance your lifestyle."
        formtype="login"
        setloggedIn={setloggedIn}
        setuser={setuser}
        ></Form>

    )
}

export default Login;
