const activeUser = localStorage.getItem('activeUser')
if(activeUser) {
    window.location.href = './homepage.html';
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
})

async function login() {
    const emailPhone = document.querySelector('#email-phone').value;
    const password = document.querySelector('#password').value;

    let users = await fetch('../../users.json')
    .then(response => response.json())
    .then(data => data.users)

    const matchUser = users.find(user => 
        user.user === emailPhone && user.password === password
    )

    if(matchUser) {
        localStorage.setItem('activeUser', JSON.stringify([emailPhone, password]))
        window.location.href = './homepage.html';
    } else {
        alert('Ocorreu um problema ao realizar o login, tente novamente.')
    }
}