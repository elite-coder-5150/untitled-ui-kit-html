const accountBtn = document.querySelector('.md-secondary')
const dropDown = document.querySelector('.drop-down');
const profileCard = document.querySelector('.profile-card')
const toggleClass = () => {
    if (profileCard.classList.contains('show')) {
        profileCard.classList.remove("show")
    } else {
        profileCard.classList.add("show");
    }
}

toggleClass();

const addClass = (cls) => {
    if (cls) {
        this.classList.add(cls)
    } else {
        this.classList.remove(cls);
    }
}
profileCard.addClass('show');
accountBtn.addEventListener('click', () => {
    dropDown.addClass('show');
    
});

