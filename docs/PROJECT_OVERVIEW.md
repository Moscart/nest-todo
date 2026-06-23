# Nest Todo API - Project Overview

## Arsitektur & Teknologi Utama
Project ini adalah backend API berbasis REST yang dibangun menggunakan framework **NestJS**. Sistem ini dirancang secara modular dan mudah dikembangkan. 

Teknologi yang digunakan meliputi:
- **Framework**: NestJS (TypeScript)
- **Database**: SQLite (via `better-sqlite3`)
- **ORM**: Drizzle ORM
- **Validasi**: `class-validator` & `class-transformer`
- **Konfigurasi**: `@nestjs/config` untuk manajemen *environment variables* (.env)
- **Quality Assurance**: 
  - **ESLint & Prettier** untuk standarisasi kode.
  - **Husky & Lint-Staged** untuk otomatisasi *pre-commit* (linting) dan *pre-push* (build verification).

## Struktur Folder Utama
```text
src/
 ├─ common/
 │   ├─ interceptors/
 │   │   └─ transform.interceptor.ts   # Format standard JSON Response { data: ... }
 │   └─ common.module.ts               # Registrasi utility global & ConfigModule
 ├─ database/
 │   └─ database.module.ts             # Provider koneksi Database dengan Drizzle
 ├─ module/
 │   └─ todo/
 │       ├─ dto/                       # Data Transfer Objects untuk validasi
 │       ├─ schema/                    # Skema tabel database (Drizzle)
 │       ├─ todo.controller.ts         # Definisi route & HTTP methods
 │       ├─ todo.service.ts            # Business logic CRUD
 │       └─ todo.module.ts
 ├─ app.module.ts                      # Entry point module (Root Module)
 └─ main.ts                            # Bootstraping aplikasi & Global Pipes setup
```

## Fitur Saat Ini
- **CRUD Todo**: Create, Read (All & By ID), Update, Delete task.
- **Standarisasi Response**: Seluruh response API otomatis dibungkus di dalam objek `{ data: ... }`.
- **Global Validation**: Endpoint otomatis menolak request payload yang tidak sesuai spesifikasi DTO.
