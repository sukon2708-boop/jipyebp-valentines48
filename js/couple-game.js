const questions = [
  {
    q: "ถ้ามีวันว่าง 1 วัน อยากทำอะไรด้วยกันมากที่สุด",
    c: ["ดูหนัง", "ขับรถเล่น", "อยู่เฉยๆ"],
    correct: 1,

  },
  {
    q: "รู้จักกันครั้งแรกวันที่เท่าไร",
    c: ["16 มค", "15 กพ", "15 มค"],
    correct: 2, // แก้เป็น index ที่ถูกต้อง (ในที่นี้คือ 15 มค)

  },
  {
    q: "เวลาที่คิดถึงกันมากที่สุดเมื่อไหร่",
    c: ["ตอนจะนอน", "ตอนเหนื่อยๆ", "ทุกเวลา"],
    correct: 2,

  },
  {
    q: "อะไรที่ทำให้ยิ้มง่ายมากที่สุด",
    c: ["ข้อความ", "หน้าหนูตลกๆ 😂", "กริ้งๆ 📞☎️"],
    correct: 1,

  },
  {
    q: "ถ้าวันนี้ไม่สมบูรณ์ อยากได้อะไรมากที่สุด",
    c: ["กอด", "กำลังใจ", "หนู"],
    correct: 2,

  }
];

// ส่วนของ Logic การทำงานคงเดิมตามที่คุณมีได้เลยครับ

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
