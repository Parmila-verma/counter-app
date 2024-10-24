let curValue = 0;
const mainTitle = document.querySelector('.zero');

const btnIncrement = document.querySelector('.btn-increment')

btnIncrement.addEventListener('click', () => {
    curValue++;
    mainTitle.textContent = curValue;
});
 
// advance counter
let initialValue = 0;
let allValueArray = [];
const title = document.querySelector('.initial');
const addBtn = document.querySelector('.add-btn');
const saveBtn = document.querySelector('.save-btn');
const para = document.querySelector('.para');


addBtn.addEventListener('click', () => {
    initialValue++;
    title.textContent = initialValue
}
);
saveBtn.addEventListener('click', () => {
    title.textContent = initialValue;
    // if (initialValue < 1) {
    //     return para.textContent = "null"
    // }
    initialValue > 0 && allValueArray.push(initialValue)
    para.innerText = "" + allValueArray.join(', ');
    initialValue = 0;
    title.textContent = initialValue 
});





