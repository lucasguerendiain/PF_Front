import { validation } from "./validation";
import { useEffect, useState } from "react";


export default function Register() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
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
            //dispatch del usuario  a registrar
            //luego mandar un mensaje que confirma si se hizo con exito
            //si no se guarda con exito, mandar un mensaje de error
        } else alert("fallan los datos, mostro/a");
    }

    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs]);

    return (
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
            <label>Email: 
                <input
                type="text"
                name="email"
                value={inputs.email}
                placeholder="Correo electronico..."
                onChange={handleChange}
                >
                </input>
                <br/>
                {errors.email && <p>{errors.email}</p>}
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
                <br/>
                {errors.password && <p>{errors.password}</p>}
            </label>
            <br/>
            <label>Confirm password: 
                <input
                    type={viewPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                    placeholder="confirmar contraseña"
                    onChange={handleChange}
                >
                </input>
                <button type="button" onClick={handleView} name="toggle">{viewPassword ? "*hide*" : "*show*"}</button>
                <br/>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </label>
            <button type="submit" name="submit">registrarse</button>
        </form>
    );
}