# Premium Todo List & NestJS Mastery Roadmap

Roadmap ini dirancang ganda: untuk meningkatkan Todo List menjadi aplikasi kelas "Premium", sekaligus menjadi panduan komprehensif bagi kamu untuk **menguasai seluruh konsep inti dan lanjutan dari NestJS** (merujuk langsung pada dokumentasi resmi NestJS).

Setiap fitur yang akan kita bangun dipetakan langsung dengan bab-bab krusial di dokumentasi NestJS.

---

## 1. NestJS Fundamentals (Konsep Dasar)
Membangun fondasi aplikasi yang solid dan memahami siklus request-response (Request Lifecycle) di NestJS.

- [ ] **Custom Providers & Dynamic Modules**: Memperdalam cara kerja `DatabaseModule` menggunakan injeksi dependensi tingkat lanjut.
- [ ] **Middleware**: Membuat `LoggerMiddleware` untuk mencatat setiap *request* (URL, IP, dan durasi eksekusi) sebelum masuk ke Controller.
- [ ] **Exception Filters**: Mengimplementasikan *Global Exception Filter* untuk menyeragamkan format *error* di seluruh aplikasi.
- [ ] **Pipes**: Memperdalam validasi dan transformasi data. (Sudah kita mulai dengan `ValidationPipe` & `ParseIntPipe`).
- [ ] **Guards**: Membuat `AuthGuard` untuk membatasi akses API hanya untuk user yang sudah login.
- [ ] **Custom Decorators**: Membuat dekorator seperti `@CurrentUser()` untuk mempermudah pengambilan data user dari object *request*.

## 2. NestJS Security (Keamanan)
Mengamankan Todo List agar siap untuk *Production*.

- [ ] **Authentication (JWT & Passport)**: Membangun sistem Registrasi & Login. Setiap *todo* akan memiliki relasi kepemilikan (*user isolation*).
- [ ] **Authorization (RBAC / CASL)**: Fitur "Admin" dan "Member" jika kamu ingin Todo List berbasis organisasi.
- [ ] **Helmet & Rate Limiting**: Melindungi API dari serangan *Brute-Force* dan kerentanan web standar.

## 3. NestJS Techniques (Teknik Lanjutan)
Menambahkan fitur-fitur "Super" yang kompleks ke dalam Todo List.

- [ ] **Configuration Validation**: Memvalidasi file `.env` secara ketat menggunakan *Class-validator* (sebelum aplikasi berjalan) agar *environment* tidak pernah salah.
- [ ] **Task Scheduling (Cron Jobs)**: Menggunakan `@nestjs/schedule` untuk membuat fitur **Reminder** otomatis (misal: "Batas waktu Todo kamu sisa 1 jam!").
- [ ] **File Upload**: Menggunakan *Multer* agar pengguna bisa melampirkan file/gambar (Attachments) pada sebuah *todo*.
- [ ] **Queues (BullMQ / Redis)**: Mendelegasikan tugas berat (seperti memproses pengiriman Email Notifikasi) ke proses *background* agar *response* API tetap kilat.
- [ ] **Caching**: Menggunakan `@nestjs/cache-manager` (dengan Redis) untuk *caching* hasil pencarian *todo* yang sering diakses.
- [ ] **Server-Sent Events (SSE)**: Cara alternatif untuk mengirimkan notifikasi *real-time* ringan ke *client*.

## 4. OpenAPI / Swagger (Dokumentasi Otomatis)
- [ ] **Swagger UI (`@nestjs/swagger`)**: Membuat antarmuka dokumentasi API interaktif. Kamu akan belajar menggunakan dekorator seperti `@ApiTags()`, `@ApiResponse()`, dan `@ApiProperty()` langsung di *Controller* dan DTO.

## 5. WebSockets (Gateways)
- [ ] **Socket.io / WS**: Mengembangkan fitur kolaborasi secara *Real-Time*. Jika satu pengguna memperbarui sebuah Todo List bersama, pengguna lain akan langsung melihat perubahannya di layar tanpa *refresh*.

## 6. Testing (Pengujian Terotomatisasi)
- [ ] **Unit Testing**: Menggunakan `Jest` untuk menguji murni logika bisnis di dalam `TodoService` tanpa harus menyentuh database sungguhan (Mocking).
- [ ] **End-to-End (E2E) Testing**: Menggunakan `Supertest` untuk menyimulasikan *request* HTTP langsung dari Controller hingga ke Database secara keseluruhan.

## 7. Database (ORM Migration)
- [ ] Memahami siklus pengembangan data: Dari **SQLite** untuk lokal, menuju setup dan migrasi skema menggunakan Drizzle ORM ke **PostgreSQL** di _Production_.

---
Dengan menyelesaikan rute di atas satu per satu, kamu tidak hanya akan memiliki aplikasi SaaS Todo List Premium, tetapi juga pemahaman komprehensif (A-Z) tentang cara kerja framework **NestJS** di industri nyata.
