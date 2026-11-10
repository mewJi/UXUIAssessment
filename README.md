# UX/UI Assessment Practice 2026

เว็บฝึกข้อสอบภาษาไทย 5 competencies สำหรับ desktop และ mobile ใช้ HTML/CSS/JavaScript แบบ static ไม่มี dependencies

## ฟีเจอร์
- ข้อสอบจำลอง 100 ข้อพร้อมเฉลยและเหตุผล: UX 10, UI & Visual Systems 30, Mobile 15, Interaction & Prototype 15, Research 30
- เลือกหมวด จำนวนข้อ และ V01–V10 สลับลำดับคำถามและตัวเลือก ไม่มีข้อซ้ำภายในชุด แต่มีข้อร่วมกันข้ามเวอร์ชัน
- โหมดสอบซ่อนเฉลยจนส่ง โหมดฝึกตรวจทีละข้อ คะแนนและรีวิว
- ประวัติแยกตามชื่อใน localStorage และส่งออกผล JSON
- Responsive dark theme สีเขียวไฟฟ้า/ไซแอน

## เปิดในเครื่อง
เปิด dist/index.html ได้โดยตรง หรือใช้ Python 3:

```sh
python3 -m http.server 8765 --directory dist
```

แล้วเปิด http://localhost:8765

## ตรวจสอบ
ใช้ Node.js:

```sh
npm test
```

ตรวจ 70 คำถามและ 220 ชุด ครอบคลุมการไม่ซ้ำในชุด การทำซ้ำเวอร์ชันเดิม การจับคู่ตัวเลือก และการตรวจคะแนน

## Deploy บน Vercel
1. Import repository นี้ใน Vercel
2. Framework Preset: Other
3. Root Directory: root ของ repository
4. ไม่ต้องมี Build Command; Output Directory: dist
5. Deploy — มี vercel.json เตรียมค่าไว้แล้ว

Vercel Hobby จำกัดการใช้ส่วนตัวและไม่ใช่เชิงพาณิชย์ ตรวจแพ็กเกจให้เหมาะกับองค์กร: https://vercel.com/docs/plans/hobby

## Cloudflare Pages
อัปโหลดเนื้อหาในโฟลเดอร์ dist ด้วย Direct Upload หรือเชื่อม Git repository และกำหนด output เป็น dist โดยไม่ต้อง build

https://developers.cloudflare.com/pages/get-started/direct-upload/

## ขอบเขต
- เป็นข้อสอบจำลอง ไม่ใช่ข้อสอบจริงหรือข้อสอบที่บริษัทรับรอง
- คลัง 2026.11.10 เพิ่ม 30 ข้อจาก Project Tracking, Writing System และ Website Components พร้อมลิงก์ต้นทางและป้ายแยกเกณฑ์ตรงกับโจทย์ประยุกต์
- ไม่รวมไฟล์อ้างอิงภายในจาก Figma ข้อมูลผู้ใช้ หรือประวัติคะแนน
- ชื่อที่กรอกไม่ใช่บัญชีสมาชิก ผู้ใช้เบราว์เซอร์เดียวกันดูประวัติชื่ออื่นได้
- ยังไม่มี backend, sign-in หรือคะแนนกลาง ประวัติไม่ตามไปเมื่อเปลี่ยนโดเมน/เครื่อง
- คำตอบอยู่ใน client สำหรับการฝึก จึงไม่เหมาะกับการสอบจริงที่ต้องซ่อน answer key
- สิทธิ์ private และหน้าล็อกอินจากโฮสต์เดิมไม่ย้ายตามไปเมื่อ deploy ที่อื่น ต้องตั้งการเข้าถึงให้เหมาะสม

## โครงสร้าง
- dist/index.html — หน้าเว็บหลัก
- dist/style.css — responsive dark theme
- dist/bank.js — คำถาม เฉลย และเหตุผล
- dist/engine.js — สร้างชุดสอบและตรวจคะแนน
- dist/app.js — การทำข้อสอบ รีวิว และประวัติ
- test.cjs — ตรวจชุดสอบและคะแนน

## แนวสอบล่าสุดและรุ่นคลัง
- UX เริ่มต้น 10 ข้อ เน้นประสบการณ์ทำงานจริง
- Research เริ่มต้น 15 ข้อ ระดับพื้นฐานและวิเคราะห์เงื่อนไข กระจาย Persona 2, Journey 2, Testing 3, Feedback 2, Evidence 2, Methods 4
- จำนวนข้อสอบจริงหมวด 2–4 ยังไม่ยืนยัน จำนวนในคลัง/ตัวเลือกฝึกไม่ใช่จำนวนข้อสอบจริง
- ข้อใหม่ UI 20, Mobile 5, Interaction 5; หมวด 3–4 เป็นโจทย์ประยุกต์ ไม่อ้างว่าเอกสารมีเกณฑ์ Advanced Prototyping โดยตรง
- ไม่ใช้ตัวอย่างที่คลุมเครือ/ขัดกันในต้นฉบับเป็นเฉลย
- V01–V10 ทำซ้ำได้ภายในรุ่นคลังเดียวกัน ประวัติและผลส่งออกเก็บ bankVersion ไว้ด้วย
