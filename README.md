# task-manager-nestjs
# 🗂 Sprint & Task Manager REST API

Bu proje, **Sprint** ve **Task** yönetimini sağlayan bir **REST API** uygulamasıdır.  
Tüm işlevsel uçlar **JWT** ile kimlik doğrulama gerektirir ve `AuthGuard('jwt')` ile korunur.

---

## 🚀 Özellikler

### 🔐 Kimlik Doğrulama (Auth/JWT)
- **Bearer Token** ile korumalı uçlar
- `@CurrentUser()` decorator’ı ile aktif kullanıcı bilgisi

---

### 👥 Users
- `GET /users/me` → Aktif kullanıcı bilgisi  
- `GET /users` → Atanabilir kullanıcıların (ebeveyn + çocuklar) düz listesi

---

### 👨‍👩‍👧 Children (Parent-only)
- Çocuk ekleme / listeleme / düzenleme / silme
- **18+ kısıtı** → 18 yaş ve üzeri kullanıcılar "child/teen" olarak eklenemez

---

### 📅 Sprints
- Sprint CRUD: `name`, `startDate`, `endDate`, `createdById`
- Silme kısıtı: altında task varsa → `400 Cannot delete sprint that has tasks`

---

### ✅ Tasks
- Task CRUD: `title`, `description?`, `priority (LOW | MEDIUM | HIGH)`, `status (TODO | IN_PROGRESS | DONE)`
- Çoklu **Assignee** desteği → ebeveyn ve çocuklardan seçim yapılabilir
- **Assignee güvenliği**: yalnızca aynı hanedeki (parent/children) kullanıcılara atanabilir
- Liste uçları için filtreler:
  - `?sprintId=`
  - `?status=`

---

## 🛡 Kalite & Güvenlik
- **Global ValidationPipe** → `whitelist` & `transform` aktif
- **CORS** → frontend origin’e açık
- **Prisma hata yönetimi** → FK ihlali vb. durumlarda anlamlı hata mesajları

---

## 🛠 Teknolojiler
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/) (PostgreSQL)
- [Passport-JWT](http://www.passportjs.org/packages/passport-jwt/)
- [class-validator](https://github.com/typestack/class-validator)
- (Opsiyonel) [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) ile `/docs`

---

## 📂 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# .env dosyası oluştur ve DATABASE_URL tanımla
DATABASE_URL="postgresql://user:password@localhost:5432/db_name?schema=public"

# Prisma migrate
npx prisma migrate dev

# Geliştirme modunda çalıştır
npm run start:dev
