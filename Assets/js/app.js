const mainTitle = document.querySelector('.zero');
let curValue = 0;
const btnIncrement = document.querySelector('.btn-increment')

btnIncrement.addEventListener('click', () => {
    curValue++;
    mainTitle.textContent = curValue;
});

// advance counter
let initialValue = 0;

const title = document.querySelector('.initial');
const addBtn = document.querySelector('.add-btn');
const saveBtn = document.querySelector('.save-btn');
const para = document.querySelector('.para');

let previousvalues = [];
addBtn.addEventListener('click', () => {
    initialValue++;
    title.textContent = initialValue
}
);
    saveBtn.addEventListener('click', () => {
   para.innerHTML = title.innerHTML;
   initialValue = 0;
   title.textContent = initialValue;
});

saveBtn.addEventListener("click", () => {
    previousvalues.push(initialValue);
}
)



