const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart) //события, когда начали перетаскивать
item.addEventListener('dragend', dragend) //события, когда закончили перетаскивать

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //когда элемент над pleceholder
    placeholder.addEventListener('dragenter', dragenter) //когда элемент на территории pleceholder
    placeholder.addEventListener('dragleave', dragleave) //когда элемент вышел из pleceholder
    placeholder.addEventListener('drop', dragdrop) //когда элемент отпустили в pleceholder
}

function dragstart(event) {
    event.target.classList.add('hold') //добавление класса, для перемещаемого элемента
    setTimeout(() => event.target.classList.add('hide'), 0) //задержка
}

function dragend(event) {
    event.target.className = 'item' //удаление классов, когда перемещение закончилось

}

function dragover (event) {
    event.preventDefault()
}

function dragenter (event) {
    event.target.classList.add('hovered')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}