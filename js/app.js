class App {
    init() {
        this.cacheDom();
        this.initEvents();
    }

    cacheDom() {
        this.icon = document.querySelector('.chevron-down');
        this.menu = document.querySelector('.dropdown-menu');

        this.button = document.querySelector('.md-secondary');
        this.body = document.querySelector('body');
    }

    initEvents() {
        this.button.addEventListener('click', () => {
            this.toggleDropDownMenu();
            this.rotateIcon();
        });
    }

    rotateIcon() {
        let icon = document.querySelector('.chevron-down');
        var angle = icon.getAttribute('data-angle');

        angle = angle ? parseInt(angle) : 0;
        angle += 180;

        icon.style.trasform = 'rotate(' + angle + 'deg)';
        icon.setAttribute('data-angle', angle);
    }

    toggleDropDownMenu() {
        if (!(this.body.classList.contains('show'))) {
            this.body.classList.add('show');
            this.body.classList.remove('hide');
        } else {
            this.body.classList.add('hide');
            this.body.classList.remove('show');
        }
    }
}

let a = new App();
a.init();

// q: browser says that uncaught type error: cannot read property 'addEventListener' of null, how do i fix it
// a: you need to check if the element exists before you add an event listener to it.

// q; app.js:33 Uncaught TypeError: Cannot read properties of null (reading 'classList') how do i fix it
