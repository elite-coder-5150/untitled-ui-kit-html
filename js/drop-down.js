const accountBtn = document.querySelector('.md-secondary')
const profileCard = document.querySelector('.profile-card');


const toggleClass = (cls) => {
    if (cls) {
        profileCard.classList.add("show")
    }
}

toggleClass();

accountBtn.addEventListener('click', () => {
    profileCard.style.display = 'flex'
    
});

