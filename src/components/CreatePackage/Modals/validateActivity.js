const regexImage = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
const regexAnyLetter = /[a-z]/i;

export function validateActivity(inputs) {
    const errors = {}
    const {name, img, duration, description} = inputs;
    if (!name) errors.name = "hace falta un nombre"
    if (!img || !regexImage.test(img)) errors.img = "imagen no valida";
    if (!duration || duration <= 1 || duration > 12) errors.duration = "duracion no valida";
    if (!description || !regexAnyLetter.test(description)) errors.description = "tiene que haber una descripcion";
    
    return errors;
}