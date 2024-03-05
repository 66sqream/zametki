const zametka = document.getElementById('zametka')
const creatBtn = document.getElementById('zapos')
const listELement = document.getElementById('list')

const notes = ['lol', 'kek'] //массив

function start() {
    for (let note of notes) {
        listELement.insertAdjacentHTML('beforeend', getNoteTempalate(notes[note])) //современный запись цикла for
    }
    // for (let i = 0; i < notes.length; i++) {
    //     listELement.insertAdjacentHTML('beforeend', getNoteTempalate(notes[i]))
    // } // цикл 
    // listELement.insertAdjacentHTML('beforeend', getNoteTempalate(notes[0])) // добавляет элемент из массива
    // listELement.insertAdjacentHTML('beforeend', getNoteTempalate(notes[1])) // добавляет элемент из массива
}
start() //вызывает функцию
creatBtn.onclick = function() {
        if (zametka.value.length === 0) {
            return
        }
        listELement.insertAdjacentHTML(
            'beforeend',
            getNoteTempalate(zametka.value)
        )
        zametka.value = ''
    }
    // создает заметку

function getNoteTempalate(title) { //добовляет элемент из html
    return `
    <li>
        <p>${title}</p> 
        <div class="buttons">
            <button id="red">red</button>
            <button id="del">del</button>
        </div>

    </li>
        `
}