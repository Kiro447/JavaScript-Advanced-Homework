


function textWrapper(element, maxLength) {
    if (element.length > maxLength) {
        element = element.substring(0, maxLength) + "..."
        return element;
    }
}


export default textWrapper
