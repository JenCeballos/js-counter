export const increase = () => {
    const counter = document.getElementById("number");
    if (counter) {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
};

export const decrease = () => {
    const counter = document.getElementById("number");
    if (counter) {
        let currentValue = parseInt(counter.innerHTML);
        if (currentValue > 0) {
            counter.innerHTML = currentValue - 1;
        }
    }
};

export const reset = () => {
    const counter = document.getElementById("number");
    if (counter) {
        counter.innerHTML = "0";
    }
};