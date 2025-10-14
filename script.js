<script>
        // Fungsi JavaScript untuk memvalidasi password
        function validasiLogin(event) {
            event.preventDefault(); 
            
            const passwordInput = document.getElementById('password').value;
            const passwordBenar = "12345678"; // <--- Password yang Benar
            
            if (passwordInput === passwordBenar) {
                alert("Login berhasil! Mengalihkan ke halaman...");
                window.location.href = "html2.txt"; 
            } else {
                alert("Password salah! Silakan coba lagi.");
                return false;
            }
        }

        // FUNGSI UNTUK mengubah tipe input password dengan ikon
        function togglePasswordVisibility() {
            const passwordField = document.getElementById('password');
            const toggleButton = document.getElementById('togglePass');
            
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleButton.innerHTML = '&#x1F441;&#xFE0F;'; // Mata Terbuka (👁️)
            } else {
                passwordField.type = "password";
                toggleButton.innerHTML = '&#x1F576;'; // Mata Tertutup (atau ikon lain yang menyimbolkan tersembunyi)
            }
        }
    </script>
