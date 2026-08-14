# مرکز آموزش — Frontend Release Checklist

## وضعیت فعلی
- [x] RTL و زبان فارسی
- [x] تم روشن و تفکیک واضح سطوح محتوا
- [x] Design System مشترک در `apps/website/style.css`
- [x] فونت‌های فارسی با `@font-face`
- [x] Responsive foundation برای Desktop / Tablet / Mobile
- [x] منوی موبایل و وضعیت `aria-expanded`
- [x] Shared shell برای صفحات متصل به `app.js`
- [x] Header/Footer خودکار برای صفحات بدون shell ثابت
- [x] Navigation فعال بر اساس مسیر جاری
- [x] صفحات Public / Learner / Instructor / Organization / Admin / System

## قبل از انتشار روی هاست
- [ ] تمام صفحات HTML به `app.js` متصل شوند
- [ ] تمام لینک‌های داخلی با یک Link Audit بررسی شوند
- [ ] فونت‌های واقعی در `fonts/` بررسی شوند
- [ ] تصاویر و Assetهای بلااستفاده حذف یا سامان‌دهی شوند
- [ ] Mobile QA روی صفحات کلیدی انجام شود
- [ ] Desktop QA روی صفحات کلیدی انجام شود
- [ ] عنوان، description و metadata صفحات عمومی نهایی شود
- [ ] فرم‌ها به Backend/API واقعی متصل شوند
- [ ] Authentication و Authorization واقعی پیاده‌سازی شود
- [ ] CSP، امنیت و Cache headers برای هاست تنظیم شود
- [ ] نسخه Release Candidate ساخته و تست نهایی شود

## قانون انتشار
این شاخه در وضعیت Demo / Release Candidate قرار دارد و تا تکمیل موارد بخش «قبل از انتشار روی هاست»، به‌عنوان نسخه نهایی Production اعلام نمی‌شود.
