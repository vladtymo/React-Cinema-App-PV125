import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/user-context";

export default function Login() {

    const { setUsername, clearUsername } = useContext(UserContext);

    // --------------------- How to get handle form ---------------------
    // ------- 1. using useRef
    // let passRef = useRef(); // for binding to password input

    // const user = {
    //     login: "",
    //     password: ""
    // };

    // ------- 2. using onChange event
    // const emailChange = (e) => {
    //     user.login = e.target.value;
    // }

    const onSubmit = (user) => {
        //e.preventDefault();

        // read ref data
        // user.password = passRef.current.value;
        // console.log(`Login data:`, user);

        console.log("Login data:", user);

        setUsername(user.email);
    }

    // ------- 3. using useForm React Hook
    const {
        register,       // to attrack changes of form inputs
        handleSubmit,   // onSubmit event handler
        formState: { errors },
        // add validators
    } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    {/* <input onChange={emailChange} type="text" name="email" /> */}
                    <input {...register("email")} type="text" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    {/* <input ref={passRef} type="password" name="password" /> */}
                    <input {...register("password")} type="password" name="password" />
                </div>
                <div >
                    <label>Bonus</label>
                    <input {...register("bonus")} type="number" name="bonus" />
                </div>
                <div>
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
