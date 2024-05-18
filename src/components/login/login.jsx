
import Form from "./template"

function Login({setloggedIn,setuser}){

    return(
        <Form
        title="Welcome Back"
        desc1="Build skills fro today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="login"
        setloggedIn={setloggedIn}
        setuser={setuser}
        ></Form>

    )
}

export default Login;