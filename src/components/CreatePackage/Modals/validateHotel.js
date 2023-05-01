const regexImage = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
const regexAnyLetter = /[a-z]/i;
const regexAllNumbers = /^[0-9]+$/;

export function validateHotel(inputs) {
    const errors = {}
    const {name, img, location, description, stars, priceDay} = inputs;
    if (!name) errors.name = "hace falta un nombre"
    if (!img || !regexImage.test(img)) errors.img = "imagen no valida";
    if (!description || !regexAnyLetter.test(description)) errors.description = "tiene que haber una descripcion";
    if (!stars || stars < 1 || stars > 5 || !regexAllNumbers.test(stars)) errors.stars = "tan mal las'trellas";
    if (!location) errors.location = "falta la locacion";
    
    return errors;
}