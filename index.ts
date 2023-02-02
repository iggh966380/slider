const previous = document.querySelector('.front') as HTMLDivElement;
const next = document.querySelector('.back') as HTMLDivElement;
const box = document.querySelector('.box') as HTMLDivElement;
const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

let count = 0;
const elementArray = getAllSliderElement();

for (let i = 0; i < elementArray.length; i++) {
  elementArray[i].style.left = `${i * 100}px`;
}

addLastElement(elementArray);

function addLastElement(array: HTMLElement[]) {
  const clonedElement = array[0].cloneNode(true) as HTMLElement;
  clonedElement.style.left = '300px';
  wrapper.appendChild(clonedElement);
}

function getAllSliderElement(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>('[data-target="slider"]')
  );
}

function addSlider(element: HTMLDivElement) {
  element.addEventListener('click', () => {
    count += 1;
    let htmlElementArray = getAllSliderElement();

    for (let i = 0; i < htmlElementArray.length; i++) {
      htmlElementArray[i].style.left = `${i * 100 - 100}px`;
    }

    setTimeout(() => {
      wrapper.removeChild(htmlElementArray[0]);
      htmlElementArray = getAllSliderElement();
      addLastElement(htmlElementArray);
    }, 300);
  });
}

addSlider(previous);
addSlider(next);
