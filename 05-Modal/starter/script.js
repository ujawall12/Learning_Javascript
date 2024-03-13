'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/**
 * This code defines a function called openModal that removes the 'hidden' class from the modal
 * and overLay elements, making them visible.
 */
const openModal = function(){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function() {

        modal.classList.add('hidden');
        overLay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})