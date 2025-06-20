function loginSubmit() {
    // Determine the role and gather data
    let email, password, username;

    if (document.getElementById('userEmail')) {
        email = document.getElementById('userEmail').value;
        password = document.getElementById('userPassword').value;
        username = document.getElementById('userName') ? document.getElementById('userName').value : '';

        if (userStatus === 'new' && !username) {
            alert('Please enter a username.');
            return;
        }
    }

    if (email && password) {
        alert(`Welcome ${userStatus === 'new' ? username : email}!`);
        
        // Redirect to the homepage (e.g., index.html)
        window.location.href = 'file:///D:/hackathon/hackathon.html'; // Modify this URL as needed
    } else {
        alert('Please enter all fields.');
    }
}
