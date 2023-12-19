function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var validUsername = 'ahmad2017';
    var validPassword = 'integrity';
  
    if (username === validUsername && password === validPassword) {
      alert('Login Sukses');
      window.location.href = 'halaman_baru.html'; // Ganti dengan halaman baru yang diinginkan
    } else {
      alert('Login Gagal');
    }
  }
  