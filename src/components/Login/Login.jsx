import { Link } from "react-router-dom";
import { validation } from "./validation";
import { useEffect, useState } from "react";

export default function Login() {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });
    const [viewPassword, setViewPassword] = useState(false);

    const handleChange = (event) => {
        setInputs({
            ...setInputs,
            [event.target.name]: event.target.value
        });
    }

    const handleView = () => {
        setViewPassword(!viewPassword);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0) {
            //loguear
        } else alert("fallan los datos, mostro/a");
    }

    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs]);

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Username: 
                <input
                type="text"
                name="username"
                value={inputs.username}
                placeholder="Usuario..."
                onChange={handleChange}
                >
                </input>
                <br/>
                {errors.username && <p>{errors.username}</p>}
            </label>
            <br/>
            <label>Password: 
                <input
                    type={viewPassword ? "text" : "password"}
                    name="password"
                    value={inputs.password}
                    placeholder="Password..."
                    onChange={handleChange}
                >
                </input>
                <button type="button" onClick={handleView} name="toggle">{viewPassword ? "*hide*" : "*show*"}</button>
                <br/>
                {errors.password && <p>{errors.password}</p>}
            </label>
            <button type="submit" name="submit">confirmar</button>
        </form>
        <Link to={"/register"}>
            <h2>no tenes cuenta? Registrate</h2>
        </Link>
        </div>
    );
}