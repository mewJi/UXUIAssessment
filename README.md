# UX/UI Assessment Practice 2026

เว็บฝึกข้อสอบภาษาไทย 5 competencies สำหรับ desktop และ mobile ใช้ HTML/CSS/JavaScript แบบ static ไม่มี dependencies

## ฟีเจอร์
- ข้อสอบจำลอง 70 ข้อพร้อมเฉลยและเหตุผล: UX 10, UI & Visual Systems 10, Mobile 10, Interaction & Prototype 10, Research 30
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

ตรวจ 70 คำถามและ 200 ชุด ครอบคลุมการไม่ซ้ำในชุด การทำซ้ำเวอร์ชันเดิม การจับคู่ตัวเลือก และการตรวจคะแนน

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
- เวอร์ชันนี้ยังเป็นคลังเดิม 70 ข้อ ยังไม่ได้เพิ่มคำถามจากไฟล์ Figma ที่อ่านเพิ่มเติม
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
