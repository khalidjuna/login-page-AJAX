document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('email-error');
    var loginContainer = document.getElementById('login-container');

    // Basic email validation
    if(!validateEmail(email)) {
        emailError.textContent = "Invalid email address";
        loginContainer.style.border = "2px solid red"; // Ganti style jika email tidak valid
        return;
    } else {
        emailError.textContent = "";
        loginContainer.style.border = "1px solid #ddd"; // Kembalikan style jika email valid
    }

    // Mengganti styling setelah menekan tombol login
    loginContainer.style.backgroundColor = '#c8e6c9'; // Contoh mengganti warna latar
    loginContainer.style.color = 'black'; // Mengganti warna teks
    loginContainer.innerHTML = '<h2>Login Berhasil!</h2>'; // Mengganti konten

    // AJAX request (simulasi karena tidak ada server)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'login', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // Proses respons dan perbarui styling (perlu diperbarui dengan pemrosesan respons yang sesungguhnya)
    };
    xhr.send('email=' + email + '&password=' + password);
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
