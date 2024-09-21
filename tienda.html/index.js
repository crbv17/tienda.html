const inputquantity = document.querySelector('.input-quantity')
const btnincrement = document.querySelector('#increment')
const btndecrement = document.querySelector('#decrement')

let valueBydefault = parseInt(inputquantity.value)

// funciones click 

btnincrement.addEventListener('click', () => {
    valueBydefault +=1
    inputquantity.value = valueBydefault
})

btndecrement.addEventListener('click', () => {
if(valueBydefault === 1){
    return
}

    valueBydefault -=1
    inputquantity.value = valueBydefault
})


// Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleAditionalInformation = document.querySelector('.title-additional-information')
const toggleResviews = document.querySelector('.title-reviews')



// constantes contenido Texto
const contentDescription = document.querySelector('.text-description')
const contenAdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')  

// Funciones Toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});

toggAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
});


