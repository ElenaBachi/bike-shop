import IMask from 'imask';

const PhoneInput = document.querySelector('input[type=tel]');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(PhoneInput, maskOptions);

mask.value = '+7(999)999-99-99';
console.log(mask.value);
