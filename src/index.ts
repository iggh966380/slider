const previous = document.querySelector('.front') as HTMLDivElement;
const next = document.querySelector('.back') as HTMLDivElement;
const box = document.querySelector('.box') as HTMLDivElement;
const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

const elementArray = getAllSliderElement();
previousSlider(previous);
nextSlider(next);

for (let i = 0; i < elementArray.length; i++) {
  elementArray[i].style.left = `${i * 100}px`;
}

function addLastElement(array: HTMLElement[]) {
  const clonedElement = array[0].cloneNode(true) as HTMLElement;
  clonedElement.style.left = '300px';
  wrapper.appendChild(clonedElement);
}

function addFirstElement(array: HTMLElement[]) {
  const clonedElement = array[2].cloneNode(true) as HTMLElement;
  clonedElement.style.left = '-100px';
  wrapper.insertBefore(clonedElement, getAllSliderElement()[0]);
}

function getAllSliderElement(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>('[data-target="slider"]')
  );
}

function nextSlider(element: HTMLDivElement) {
  element.addEventListener('click', () => {
    addLastElement(getAllSliderElement());

    setTimeout(() => {
      for (let i = 0; i < getAllSliderElement().length; i++) {
        getAllSliderElement()[i].style.left = `${i * 100 - 100}px`;
      }
    });

    setTimeout(() => {
      wrapper.removeChild(getAllSliderElement()[0]);
    }, 300);
  });
}

function previousSlider(element: HTMLDivElement) {
  element.addEventListener('click', () => {
    addFirstElement(getAllSliderElement());

    setTimeout(() => {
      for (let i = 0; i < getAllSliderElement().length; i++) {
        getAllSliderElement()[i].style.left = `${
          parseInt(getAllSliderElement()[i].style.left.split('px')[0]) + 100
        }px`;
      }
    });

    setTimeout(() => {
      wrapper.removeChild(getAllSliderElement()[3]);
    }, 300);
  });
}
