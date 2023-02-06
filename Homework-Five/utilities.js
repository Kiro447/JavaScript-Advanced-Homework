
let menBtn = document.getElementById('menBtn')
let jewelBtn = document.getElementById('jewelBtn')
let elecBtn = document.getElementById('elecBtn')
let womenBtn = document.getElementById('womenBtn')


function textWrapper(element, maxLength) {
    if (element.length > maxLength) {
        element = element.substring(0, maxLength) + "..."
        return element;
    }
}


export default textWrapper
