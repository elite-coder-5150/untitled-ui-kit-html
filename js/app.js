class App {
    intit() {
        this.cacheDom();
        this.initEvents();
    }

    cacheDom() {
        this.btn = document.querySelector('button.md-secondary');
        this.body = document.querySelector('body');
        this.profile = document.querySelector('.dd-profile-card');
        this.dd =  document.querySelector('.drop-down');
        this.modal = document.querySelector('.modal');
        this.overlay = document.querySelector('.overlay');
        this.username = document.querySelector('.username');
        this.form = document.querySelector('.update-payment-form')
    }

    initEvents() {
        this.btn.addEventListener('click', () => {
            this.toggleDropDown()
        });

    }

    //? this function will work with modals as well

    toggleDropDown() {
        if (!(this.profile.classList.contains('show'))) {
            this.profile.classList.add('show')
            this.profile.classList.remove('hidden')
        } else if (this.profile.classList.contains('show')) {
            this.profile.classList.remove('show');
            this.profile.classList.add('hidden');
        }
    }

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
app.intit()