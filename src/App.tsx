declare const Chart: any;
import { useState, useEffect, useRef, useMemo } from "react";

// (ที่นี่คือส่วน CSS, Constants, Mock Data, และฟังก์ชันย่อยที่คุณมีอยู่แล้วเหมือนเดิมทุกอย่าง)
// [คำเตือน: โปรดรักษา CSS, Constants และฟังก์ชันย่อยที่คุณมีไว้ให้ครบ]

// ─────────────────────────────────────────────
// ใส่โค้ดส่วน CSS, CHAPTERS, XP_RANKS, ฯลฯ ของคุณไว้ที่นี่
// ... (ก๊อปปี้ส่วนต้นไฟล์ของคุณมาวางตรงนี้) ...
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// ฟังก์ชัน GAS API (เพิ่ม gasRemoveAssignment เข้าไป)
// ─────────────────────────────────────────────
const GAS_URL = "https://script.google.com/macros/s/AKfycbwoaVGfEoN7CTS4hcIhdZ09JW7DH3e87gT9De-xkhOZOv-4lLKebsxVgm7iasVElKCr/exec";

async function gasRemoveAssignment(assignmentId) {
  try {
    await fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ action: "removeAssignment", assignmentId })
    });
  } catch (e) { console.error("gasRemoveAssignment error:", e); }
}

async function gasSubmitAssignment(payload){ /* ...ของเดิม... */ }
async function gasRemoveSubmission(payload){ /* ...ของเดิม... */ }
async function gasGradeSubmission(payload){ /* ...ของเดิม... */ }
async function gasSave(action,data){ /* ...ของเดิม... */ }
async function gasGet(){ /* ...ของเดิม... */ }

// ─────────────────────────────────────────────
// MAIN APP (ตรวจสอบให้แน่ใจว่าบรรทัดถัดไปคือ export default function App)
// ─────────────────────────────────────────────

export default function App() {
  const [students,setStudents]=useState(INIT_STUDENTS);
  const [assignments,setAssignments]=useState(INIT_ASSIGNMENTS);
  const [resources,setResources]=useState(INIT_RESOURCES);
  // ... (ส่วน state อื่นๆ ของคุณ) ...

  // [ใส่ส่วน useEffect และฟังก์ชันภายใน App ทั้งหมดของคุณที่นี่]
  // [อย่าลืมคงฟังก์ชัน TeacherAssignments และ TeacherScores ที่เราแก้ใหม่ไว้ด้วย]

  return (
    <>
      <style>{G}</style>
      {/* ... โครงสร้าง JSX ของคุณ ... */}
    </>
  );
}
