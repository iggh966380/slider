var previous = document.querySelector('.front');
var next = document.querySelector('.back');
var box = document.querySelector('.box');
var wrapper = document.querySelector('.wrapper');
var count = 0;
var elementArray = getAllSliderElement();
for (var i = 0; i < elementArray.length; i++) {
    elementArray[i].style.left = "".concat(i * 100, "px");
}
addLastElement(elementArray);
function addLastElement(array) {
    var clonedElement = array[0].cloneNode(true);
    clonedElement.style.left = '300px';
    wrapper.appendChild(clonedElement);
}
function getAllSliderElement() {
    return Array.from(document.querySelectorAll('[data-target="slider"]'));
}
function addSlider(element) {
    element.addEventListener('click', function () {
        count += 1;
        var htmlElementArray = getAllSliderElement();
        for (var i = 0; i < htmlElementArray.length; i++) {
            htmlElementArray[i].style.left = "".concat(i * 100 - 100, "px");
        }
        setTimeout(function () {
            wrapper.removeChild(htmlElementArray[0]);
            htmlElementArray = getAllSliderElement();
            addLastElement(htmlElementArray);
        }, 300);
    });
}
addSlider(previous);
addSlider(next);
console.log(3);
