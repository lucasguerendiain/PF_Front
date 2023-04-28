const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validation(inputs) {
    let errors = {};
    const {username, password, email, confirmPassword} = inputs;
    if (!username || username.length < 3 || username.length > 35) {
        //falta poner que el nombre de usuario ya existe
        errors.username = "el nombre de usuario debe tener mas de 3 letras y menos de 35";
    }
    if (!password || password.length < 6 || password.length > 16 || !(/\d/.test(password))) {
        errors.password = "La contraseña debe tener entre 6 y 16 caracteres y al menos un numero";
    }
    if (!email || !regexEmail.test(email)) {
        errors.email = "correo electronico invalido";
    }
    if (!confirmPassword || confirmPassword !== password) {
        errors.confirmPassword = "las contraseñas deben ser iguales";
    }
    
    return errors;
}