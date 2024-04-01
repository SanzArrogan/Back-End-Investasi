// Import modul yang diperlukan
const express = require('express');
const app = express();
const port = 3000;

// Set view engine menggunakan EJS
app.set('view engine', 'ejs');

// Middleware untuk parsing body dari form
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Data pengguna yang disimulasikan (untuk keperluan contoh)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Route untuk halaman login
app.get('/', (req, res) => {
    res.render('login', { errorMessage: null });
});

// Route untuk menangani form login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Cek apakah pengguna ada dalam data simulasi
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Jika login berhasil, alihkan ke halaman main
        res.redirect('/main');
    } else {
        res.render('login', { errorMessage: 'Username atau password salah.' });
    }
});

// Route untuk halaman main
app.get('/main', (req, res) => {
    res.render('main'); // Render main.ejs
});

// Route untuk halaman pitcher
app.get('/pitcher', (req, res) => {
    res.render('pitcher'); // Render pitcher.ejs
});

// Route untuk halaman investor
app.get('/investor', (req, res) => {
    res.render('investor'); // Render investor.ejs
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
