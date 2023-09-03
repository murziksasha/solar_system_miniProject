"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let range = document.querySelector('.range');
    let divider = document.querySelector('body');
    range.addEventListener('input', (e) => {
        const target = e.target;
        const absCountWithoutMinus = Math.abs(+target.value);
        divider.style.setProperty('--divider', '' + absCountWithoutMinus);
        console.log(divider.style.getPropertyValue('--divider'));
    });
});
//# sourceMappingURL=main.js.map