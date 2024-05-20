
import Form from "./template"

function Login({setloggedIn,setuser}){

    return(
        <Form
        title="Welcome Back"
        desc1="Find today’s essentials and tomorrow’s trends."
        desc2="Shop the latest in clothing and daily necessities."
        formtype="login"
        setloggedIn={setloggedIn}
        setuser={setuser}
        ></Form>

    )
}

export default Login;
