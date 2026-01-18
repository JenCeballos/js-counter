import { increase, decrease, reset } from './counter.js';

export const setupEvents = () => {
    const btnAdd = document.getElementById("add");
    const btnLower = document.getElementById("lower");
    const btnReset = document.getElementById("reset-btn");

    if (btnAdd) btnAdd.addEventListener("click", increase);
    if (btnLower) btnLower.addEventListener("click", decrease);
    if (btnReset) btnReset.addEventListener("click", reset);
};

setupEvents();
