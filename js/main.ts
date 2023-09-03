

document.addEventListener('DOMContentLoaded', () => {
  let range = document.querySelector('.range') as HTMLInputElement;
  let divider = document.querySelector('body') as HTMLBodyElement;
  range.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const absCountWithoutMinus: number | string = Math.abs(+target.value);
    divider.style.setProperty('--divider', '' + absCountWithoutMinus);
    console.log(divider.style.getPropertyValue('--divider'));
  });
});