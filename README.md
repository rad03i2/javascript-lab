# JavaScript Lab

A dependency-free JavaScript learning and reference repository containing reusable ES modules and small browser applications that work end-to-end.

## English

### Overview
JavaScript Lab turns focused language concepts into code you can run, test, inspect, and reuse. It includes a local-first expense tracker, a reusable quiz engine, and validated array utilities.

### Why it exists
Small examples are most useful when they behave like real software: explicit validation, persistence where appropriate, tests, accessibility-minded markup, and CI. This repository keeps that scope intentionally small and understandable.

### Features
- **Expense Tracker:** add, delete, categorize and filter expenses; totals update automatically; data persists in browser `localStorage`.
- **Quiz Engine:** reusable stateful engine with question validation, scoring, progress, answer history and reset.
- **Array utilities:** `unique`, `groupBy`, `chunk`, `sortBy`, `sumBy`, and `partition` with non-mutating behavior where relevant.
- Unicode/Arabic-safe browser text, responsive UI, no runtime dependencies, no accounts, APIs, telemetry, or network calls.
- Automated Node tests plus syntax checks on Linux, Windows, and macOS.

### Preview
Open `projects/expense-tracker/index.html` in a modern browser. For the most consistent module behavior, serve the repository locally:

```bash
python -m http.server 8000
# then open http://localhost:8000/projects/expense-tracker/
```

### Requirements & installation
- A modern browser for the expense tracker.
- Node.js 20+ for tests and module development.

```bash
git clone https://github.com/rad03i2/javascript-lab.git
cd javascript-lab
npm test
npm run check
```

There are no npm runtime dependencies and no environment variables.

### Usage
```js
import { chunk, groupBy, sumBy } from './algorithms/array-utils.js';
import { QuizEngine } from './projects/quiz-engine/quiz.js';

console.log(chunk([1, 2, 3, 4, 5], 2));
const quiz = new QuizEngine([
  { question: '2 + 2?', options: ['3', '4'], answer: '4' }
]);
quiz.answer('4');
console.log(quiz.progress);
```

### Project structure
```text
algorithms/array-utils.js          Reusable ES-module helpers
projects/expense-tracker/          Complete local-first browser app
projects/quiz-engine/quiz.js       Reusable quiz state engine
tests/                             Node built-in test suite
.github/workflows/ci.yml           Cross-platform CI
```

### Testing
`npm test` uses Node's built-in test runner and exercises array semantics, invalid inputs, quiz validation, scoring, progress and reset. `npm run check` performs JavaScript syntax checks. CI runs both on Node 20/22 across Ubuntu, Windows and macOS.

### Configuration
None. Expense data is stored under `javascript-lab.expenses.v1` in the current browser's localStorage.

### Security & privacy
The expense tracker is local-only: it sends no data anywhere. Do not treat localStorage as encrypted storage; anyone with access to the browser profile may be able to inspect it. Do not store passwords, payment-card data, secrets, or highly sensitive records in the example app.

### Limitations
The expense tracker is single-browser and single-device, uses USD display formatting, and has no import/export or synchronization. The quiz engine intentionally handles single-answer questions only. The utilities are educational/general-purpose helpers, not a replacement for a full utility library.

### Optional roadmap
Potential future work: configurable expense currency, safe JSON export/import, and a browser UI around the quiz engine. These are optional and are not claimed as current features.

### Contributing
See `CONTRIBUTING.md`. Keep additions focused, dependency-light, tested, and understandable.

### License
MIT — see `LICENSE`.

### Author
**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **@rad03i2**

---

## العربية

### نظرة عامة
مختبر JavaScript هو مستودع عملي وخفيف يجمع وحدات JavaScript قابلة لإعادة الاستخدام ومشاريع متصفح صغيرة تعمل فعليًا من البداية إلى النهاية. يضم متتبع مصروفات محليًا، ومحرك اختبارات قابلًا لإعادة الاستخدام، وأدوات لمعالجة المصفوفات.

### لماذا يوجد المشروع؟
الأمثلة الصغيرة تصبح أكثر فائدة عندما تتبع ممارسات البرامج الحقيقية: التحقق من المدخلات، وحفظ البيانات عند الحاجة، والاختبارات، وواجهة واضحة، وتكامل مستمر. يحافظ المشروع على نطاق صغير حتى يبقى سهل القراءة والتعلم والتطوير.

### الميزات
- **متتبع المصروفات:** إضافة وحذف وتصنيف وتصفية المصروفات مع حساب الإجمالي وحفظ البيانات في `localStorage`.
- **محرك الاختبارات:** التحقق من بنية الأسئلة، حساب النتيجة، متابعة التقدم، سجل الإجابات وإعادة الضبط.
- **أدوات المصفوفات:** `unique` و`groupBy` و`chunk` و`sortBy` و`sumBy` و`partition`.
- دعم النص العربي وUnicode، واجهة متجاوبة، ولا توجد تبعيات تشغيل أو حسابات أو مفاتيح API أو تتبع أو اتصالات شبكة.
- اختبارات آلية وفحص للصياغة على Linux وWindows وmacOS.

### المعاينة والتشغيل
يمكن فتح `projects/expense-tracker/index.html` مباشرة، أو تشغيل خادم محلي:

```bash
python -m http.server 8000
```
ثم افتح `http://localhost:8000/projects/expense-tracker/`.

للاختبارات يلزم Node.js 20 أو أحدث:

```bash
git clone https://github.com/rad03i2/javascript-lab.git
cd javascript-lab
npm test
npm run check
```

### مثال استخدام
```js
import { chunk } from './algorithms/array-utils.js';
import { QuizEngine } from './projects/quiz-engine/quiz.js';
console.log(chunk([1, 2, 3, 4], 2));
```

### بنية المشروع
`algorithms/` للأدوات القابلة لإعادة الاستخدام، و`projects/expense-tracker/` لتطبيق المصروفات، و`projects/quiz-engine/` لمحرك الاختبارات، و`tests/` للاختبارات، و`.github/workflows/` للتكامل المستمر.

### الاختبارات
يشغل `npm test` اختبارات Node المدمجة للتحقق من أدوات المصفوفات والمدخلات غير الصالحة ومنطق الاختبار والنتيجة والتقدم وإعادة الضبط. ويشغل `npm run check` فحص صياغة ملفات JavaScript.

### الإعداد
لا توجد متغيرات بيئة أو إعدادات سرية. يحفظ تطبيق المصروفات بياناته في المفتاح `javascript-lab.expenses.v1` داخل `localStorage` للمتصفح الحالي.

### الأمان والخصوصية
لا يرسل التطبيق بيانات المصروفات إلى أي جهة. لكن `localStorage` ليس مخزنًا مشفرًا؛ لذلك لا تستخدم المثال لحفظ كلمات المرور أو بيانات البطاقات أو الأسرار أو المعلومات شديدة الحساسية.

### القيود
متتبع المصروفات يعمل على متصفح وجهاز واحد ويعرض العملة بالدولار حاليًا ولا يوفر مزامنة أو استيراد/تصدير. محرك الاختبارات يدعم سؤالًا بإجابة صحيحة واحدة. أدوات المصفوفات ليست بديلًا عن مكتبة أدوات متكاملة.

### تطوير اختياري
يمكن مستقبلًا إضافة اختيار العملة، واستيراد/تصدير JSON بصورة آمنة، وواجهة متصفح لمحرك الاختبارات. هذه أفكار مستقبلية وليست ميزات حالية.

### المساهمة
راجع `CONTRIBUTING.md`. يفضل أن تكون الإضافات محددة وخفيفة التبعيات ومختبرة وسهلة الفهم.

### الترخيص
MIT — راجع ملف `LICENSE`.

### المؤلف
**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: **@rad03i2**
