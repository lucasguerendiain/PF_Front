const regexAllLetter = /^[A-Za-z]+$/;
const regexImage = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
const regexAnyLetter = /[a-z]/i;
const regexAllNumbers = /^[0-9]+$/;

function fechaValida(fecha) {
  let falsedad = false;
  const arreglo = fecha.split('/');
  if (arreglo.length < 3) return true;
  const mes = Number(arreglo[0]);
  const dia = Number(arreglo[1]);
  const año = Number(arreglo[2]);
  if (!dia || !mes || !año) falsedad = true;
  if (dia < 0 || dia > 31) falsedad = true;
  if (mes > 12 || mes < 1) falsedad = true;
  if (año < 23 || año > 30) falsedad = true;

  return falsedad;
}

export function validation(inputs, activities) {
  let errors = {};
  const {
    name,
    location,
    price,
    duration,
    img,
    img2,
    img3,
    img4,
    description,
    quotas,
    dateInit,
    dateEnd,
  } = inputs;
  const calculoDias = Math.floor(activities.length / 2);

  if (!name || name.length > 60 || !regexAnyLetter.test(name))
    errors.name = 'nombre debe contener letras y ser menor a 60 caracteres';
  if (!location || location.length > 70) errors.location = 'ubicacion invalida';
  if (!price || price < 0) errors.price = 'precio invalido';
  if (!duration || duration <= 1 || duration < calculoDias)
    errors.duration = 'duracion del viaje muy corta';
  if (!img || !regexImage.test(img))
    errors.img = 'la imagen no es valida o esta sin llenar';
  if (img2 && !regexImage.test(img2)) errors.img2 = 'imagen no valida';
  if (img3 && !regexImage.test(img3)) errors.img3 = 'imagen no valida';
  if (img4 && !regexImage.test(img4)) errors.img4 = 'imagen no valida';
  if (!description || !regexAnyLetter.test(description))
    errors.description = 'descripcion vacia o no contiene letras';
  if (!quotas || quotas < 20 || !regexAllNumbers.test(quotas))
    errors.quotas = 'no se puede menos de 20 cupos / solo  ingresar numeros';
  // if (!dateInit || dateInit === dateEnd) errors.dateInit = "fecha invalida";
  // if (!dateEnd || dateInit === dateEnd) errors.dateEnd = "fecha invalida";

  return errors;
}
