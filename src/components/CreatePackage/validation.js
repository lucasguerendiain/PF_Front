const regexAllLetter = /^[A-Za-z]+$/;
const regexImage = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
const regexAnyLetter = /[a-z]/i;
const regexAllNumbers = /^[0-9]+$/;

export function validation(inputs) {
    let errors = {};
    const { name, location, price, duration, img, description, quotas, date, hotel, restaurant, activities } = inputs;

    if (!name || name.length > 60 || !regexAnyLetter.test(name)) errors.name = "nombre debe contener letras y ser menor a 60 caracteres";
    if (!location || location.length > 70) errors.location = "ubicacion invalida";
    if (!price || price < 0) errors.price = "precio invalido";
    if (!duration || duration <= 1) errors.duration = "duracion del viaje debe ser mayor a 1 dia";
    if (!img || !regexImage.test(img)) errors.img = "la imagen no es valida o esta sin llenar";
    if (!description || !regexAnyLetter.test(description)) errors.description = "descripcion vacia o no contiene letras";
    if (!quotas || quotas < 20 || !regexAllNumbers.test(quotas)) errors.quotas = "no se puede menos de 20 cupos / solo  ingresar numeros";
    if (!date) errors.date = "no puede estar vacia la fecha";
    if (!hotel) errors.hotel = "no puede estra vacio el hotel";
    if (!activities) errors.activities = "no puede estar vacia la lista de actividades "

    return errors;
}