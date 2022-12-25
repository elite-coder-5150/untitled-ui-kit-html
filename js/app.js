// import {DropDown} from './drop-down';
class App {
    intit() {
        this.cacheDom();
        this.initEvents();

        
    }

    cacheDom() {
        this.btn = document.querySelector('button.md-secondary');
        this.body = document.querySelector('body');
       
        this.dropDown =  document.querySelector('.drop-down-menu');
        this.modal = document.querySelector('.modal');
        this.overlay = document.querySelector('.overlay');
        this.username = document.querySelector('.username');
        this.form = document.querySelector('.update-payment-form')
    }

    initEvents() {
        this.btn.addEventListener('click', () => {
            this.toggleDropDown()
        })

        

    }

    //? this function will work with modals as well

    toggleDropDown() {
        if (!(this.dropDown.classList.contains('show'))) {
            this.dropDown.classList.add('show')
            this.dropDown.classList.remove('hidden')
        } else if (this.dropDown.classList.contains('show')) {
            this.dropDown.classList.remove('show');
            this.dropDown.classList.add('hidden');
        }
    }

    //? this is expermintial
    toggleModal() {
        this.overlay.addEventListener('click', () => {
            this.overlay.classList.add('closed');
        });

        this.modal.addEventListener('click', () => {
            window.console.log('testing')
        });

        this.form.addEventListener('submit',() => {
            const formData = this.validateForm();

            if (formData === true) {
                this.sendtoDatabase();
            }
        })

        this.dropDown.addEventListener('click', () => {
            this.dropDown.toggle()
        })
    }

    sendtoDatabase() {
        /** use axios to send the data to the datase */
    }

    validateForm() {
        if (this.username.length === 0) {
            this.error = 'this field is reqiored';
            return false;
        } else if (this.username.length < 4 && this.username.length > 30) {
            this.error = 'username should be more than 4 characters or less than 30 characters';
            this.username.classList.add('error');
        }
    }
}

let app = new App();
app.intit();
