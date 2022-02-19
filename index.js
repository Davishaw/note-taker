const headerInput = document.getElementById('header-input');
const bodyInput = document.getElementById('body-input');
const addBtn = document.getElementById('btn-add');
const notesWrapper = document.getElementById('notes-wrapper');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('modal-content');
const closeModal = document.querySelector('.close-modal');
const errorMessage = document.getElementById('error-message');




function addNote() {
    if(headerInput.value !== '' || bodyInput.value !== '') {
        resetErrorMessage();
        // Create Note
        const divNota = document.createElement('div');
        divNota.classList.add('nota');
        divNota.innerHTML = `
        <div class="note-header">${headerInput.value}</div>
        <div class="note-body">
            ${bodyInput.value}
        </div>
        <div class="note-footer">
            <button class="detail-btn btn">View Detail</button>
            <button class="delete-btn btn">Delete Note</button>
        </div>`
        notesWrapper.appendChild(divNota);
    }else {
        showErrorMessage('Please add both a title and a note');
    } 
    headerInput.value= '';
    bodyInput.value = '';
};




function showErrorMessage(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
};

function resetErrorMessage() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}


addBtn.addEventListener('click', addNote);







// Creo visualizzazione del Modal
function showModal(title, body) {
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    modalTitle.textContent = title;
    modalBody.textContent = body;
    modalContainer.style.display = 'block';
};    

// Chiudo il Modal
closeModal.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});    
window.addEventListener('click', (e) => {
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }    
});    


notesWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('detail-btn')) {
        const currentNote = e.target.closest('.nota');
        const currentTitle = currentNote.querySelector('.note-header').textContent;
        const currentBody = currentNote.querySelector('.note-body').textContent;
        showModal(currentTitle, currentBody);
    }
// Elimino la Nota
    if(e.target.classList.contains('delete-btn')) {
        const currentNote = e.target.closest('.nota');
        currentNote.remove();
    }   
});    





