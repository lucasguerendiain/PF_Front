const regexImage = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
const regexAnyLetter = /[a-z]/i;

export function validateActivity(inputs) {
  const errors = {};
  const { name, img1, img2, img3, img4, duration, description, price } = inputs;
  if (!name) errors.name = 'hace falta un nombre';
  if (!img1 || !regexImage.test(img1)) errors.img1 = 'imagen no valida';
  if (img2 && !regexImage.test(img2)) errors.img2 = 'imagen no valida';
  if (img3 && !regexImage.test(img3)) errors.img3 = 'imagen no valida';
  if (img4 && !regexImage.test(img4)) errors.img4 = 'imagen no valida';
  if (!duration || duration <= 1 || duration > 12)
    errors.duration = 'duracion no valida';
  if (!description || !regexAnyLetter.test(description))
    errors.description = 'tiene que haber una descripcion';
  if (!price || price < 1) errors.price = 'precio invalido';

  return errors;
}
