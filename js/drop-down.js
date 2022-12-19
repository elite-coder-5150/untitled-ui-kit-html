


const button = /*html*/`
    <button onclick='toggleDropdown()'>testign</button>
    <div id="my-div">
        this is a div element
    </div>
`;

const body = document.getElementByTagName('body');
body.append(button);
// TODO: I may have to refacter the user inordef to work properly

const toggleDropdown = () => {
    let elem = document.querySelector('.drop-down');
    elem.classList.toggle('show');
}

toggleDropdown();