checkPassword();

function checkPassword() {

    let password = prompt('Enter password: ');
    if (password === 'pass123') {
        alert('You logged in');
    } else if (password === 'admin') {
        alert('You logged in as an admin');
    } else alert('incorrect password');
}