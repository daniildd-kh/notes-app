const addButton = document.querySelector('.add-note');
const notesList = document.querySelector('.notes__list');

addButton.addEventListener('click', () => {
  addNewNote();
});


function addNewNote(){
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `  <div class="notes">
  <div class="notes__tools">
    <button class="tool edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="tool delete "><i class="fa-solid fa-trash"></i></button>
  </div>
  <div class="notes__content hidden-element">
  </div>
  <textarea></textarea>
</div>`

notesList.appendChild(note);


const notesElement = document.querySelector('.notes');
const editButton  = notesElement.querySelector('.edit');
const deleteButton = notesElement.querySelector('.delete');
const notesContent = notesElement.querySelector('.notes__content');
const textArea = notesElement.querySelector('textarea');


editButton.addEventListener('click', () => {
  notesContent.classList.toggle('hidden-element');
  textArea.classList.toggle('hidden-element');
})

textArea.addEventListener('input', (e) =>{
  const { value } = e.target;
  notesContent.innerHTML = marked.parse(value);
})

};