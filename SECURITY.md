# Security and Privacy in Our Note-Taking App  

Aplikasi ini dirancang untuk memberikan privasi dan keamanan maksimal kepada pengguna. Berikut adalah detail fitur keamanan yang diterapkan, termasuk cara aplikasi menangani data dan enkripsi.  

## **1. Jenis Notes dan Keamanan**  

### **1.1. Standard Notes**  
- Notes standar dapat dibuat tanpa enkripsi tambahan.  
- Opsi sharing:  
  - **Public:** Dapat diakses oleh siapa saja.  
  - **Link-Only:** Hanya dapat diakses oleh orang yang memiliki link.  
  - **Selected Users:** Hanya dapat diakses oleh pengguna yang diundang.  
  - **Private:** Hanya dapat diakses oleh pembuat note.  
- **Password Protection (Opsional):**  
  - Notes yang dishare (public/link/selected users) dapat dilindungi dengan password.  
  - Password disimpan menggunakan hashing (tidak plaintext) untuk mencegah kebocoran jika server diretas.  

### **1.2. Encrypted Notes**  
- Notes terenkripsi menggunakan password yang **berbeda dari password akun**.  
- Password hanya disimpan di **sessionStorage**, tidak pernah disimpan di server.  
- Data terenkripsi di perangkat pengguna sebelum dikirim ke server.  
- Opsi sharing:  
  - **Public:** Notes encrypted bisa di-share, tapi password harus diberikan manual oleh pembuat kepada penerima.  
  - **Link-Only:** Sama seperti public, password harus diberikan manual.  
  - **Selected Users:** Password tetap diperlukan untuk akses.  
  - **Private:** Default untuk notes encrypted.  

---

## **2. Keamanan dalam Sharing Notes**  

### **2.1. Notes Standard**  
- Notes standard dapat:  
  - Dibaca oleh pengguna lain jika diberikan izin.  
  - Diedit oleh pengguna lain dengan izin eksplisit dari pembuat note.  
- Untuk mencegah penyalahgunaan, aplikasi menyediakan:  
  - **Version History:** Semua perubahan dicatat, sehingga pembuat dapat mengembalikan versi sebelumnya jika terjadi kesalahan.  
  - **Expiration Time:** Link share dapat memiliki waktu kedaluwarsa otomatis untuk meningkatkan keamanan.  

### **2.2. Notes Encrypted**  
- Notes terenkripsi hanya bisa diakses dengan password yang sama yang digunakan untuk enkripsi.  
- Notes ini bersifat **read-only** jika dishare. Pengeditan hanya dapat dilakukan oleh pembuat di perangkat mereka sendiri.  

---

## **3. Enkripsi dan Penyimpanan Data**  

### **3.1. Enkripsi Notes**  
- **Standard Notes:**  
  - Password untuk akses sharing dilindungi menggunakan algoritma hashing seperti **Argon2** atau **PBKDF2**.  
- **Encrypted Notes:**  
  - Notes dienkripsi menggunakan **AES-GCM 256-bit** dengan kunci yang dihasilkan dari password pengguna.  
  - Password hanya digunakan di sisi client untuk membuat kunci enkripsi dan tidak pernah dikirim ke server.  

### **3.2. Penyimpanan Password**  
- **Password akun:**  
  - Disimpan sebagai hash menggunakan algoritma yang aman di server (misalnya, Argon2).  
- **Password encrypted notes:**  
  - Tidak pernah disimpan di server.  
  - Disimpan sementara di **sessionStorage** selama sesi aktif untuk memudahkan akses pengguna.  

---

## **4. Kebijakan Privasi dan Zero-Knowledge**  

### **4.1. Zero-Knowledge Encryption**  
- Untuk notes terenkripsi, server hanya menyimpan data dalam bentuk terenkripsi.  
- Password pengguna tidak pernah diketahui atau disimpan oleh server.  

### **4.2. Privasi Pengguna**  
- Tidak ada pihak (termasuk developer) yang dapat membaca isi notes terenkripsi tanpa password pengguna.  
- Semua data dikirim melalui koneksi aman (TLS/HTTPS).  

---

## **5. Mekanisme Recovery dan Peringatan**  

### **5.1. Lupa Password Encrypted Notes**  
- Notes terenkripsi tidak dapat didekripsi tanpa password.  
- Sebelum membuat note terenkripsi, pengguna akan diberi peringatan:  
  > *"Jika Anda lupa password untuk note ini, data tidak dapat dipulihkan. Pastikan untuk mencatat password Anda."*  

### **5.2. Recovery untuk Notes Standard**  
- Notes standard yang dilindungi password tetap dapat diakses dengan fitur reset password akun, karena password hanya digunakan untuk autentikasi, bukan untuk enkripsi data.  

---

## **6. Teknologi yang Digunakan**  

- **Algoritma Hashing:**  
  - Password akun dan password notes standard disimpan menggunakan hashing yang aman (**Argon2**, **PBKDF2**, atau **bcrypt**).  
- **Enkripsi Notes:**  
  - Data dienkripsi menggunakan **AES-GCM 256-bit**, salah satu algoritma enkripsi paling aman dan efisien.  
- **Key Derivation:**  
  - Password encrypted notes diproses dengan algoritma derivasi seperti **PBKDF2** untuk menghasilkan kunci enkripsi yang kuat.  

---

## **7. Best Practices untuk Pengguna**  

- Gunakan password yang kuat untuk akun dan encrypted notes.  
- Simpan password untuk encrypted notes di tempat yang aman, karena tidak ada cara untuk recovery jika lupa.  
- Aktifkan fitur expiration time jika membagikan notes melalui link untuk meningkatkan keamanan.  

---

Aplikasi ini dibangun dengan pendekatan **zero-knowledge** dan teknologi modern untuk menjaga privasi dan keamanan data Anda. Jika ada pertanyaan terkait keamanan atau saran perbaikan, silakan hubungi tim kami melalui halaman [Support](#).  
