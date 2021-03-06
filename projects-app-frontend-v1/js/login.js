document.getElementById('submit').addEventListener('click', e => {

    fetch('http://localhost:8888/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password:  document.getElementById('password').value
        })
    }).
    then(res => {
        if(res.status == 200) {
            return res.json();
        }
        throw new Error('Invalid credentials');
    })
    .then(data => {
        // store jwt in local storage of a browser
        localStorage.setItem('token', data.token);
        window.location.href = './projects.html';
    }).
    catch(e => alert(e));

})