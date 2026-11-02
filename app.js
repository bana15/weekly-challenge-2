// ========================================
// Student Data Processor
// Nama   : (isi nama kamu)
// Kelas  : XI (isi rombel kamu)
// ========================================

// ===== RAW DATA =====
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// ===== FUNCTION: FORMAT TANGGAL (DD/MM/YYYY) =====
function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() mulai dari 0
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

// ===== PART 1: CLEAN THE NAME =====
const trimmedName = studentName.trim();               // hapus spasi berlebih
const lowerName = trimmedName.toLowerCase();          // semua huruf kecil
const words = lowerName.split(" ");                   // pecah jadi array kata

// Huruf pertama tiap kata dijadikan kapital
let cleanWords = [];
for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].slice(0, 1).toUpperCase();
    const restLetters = words[i].slice(1);
    cleanWords[i] = firstLetter + restLetters;
}
const cleanName = cleanWords.join(" ");               // gabung lagi jadi string

// Username: ahmad.fauzan
const username = lowerName.split(" ").join(".");

// ===== PART 2: ANALYZE THE NAME =====
const containsAhmad = cleanName.includes("Ahmad");
const firstFive = cleanName.slice(0, 5);
const replacement = cleanName.replace("Ahmad", "Budi");

// ===== PART 3: PROCESS THE AGE =====
const age = parseInt(ageText);                        // "17 tahun" -> 17
const currentYear = new Date().getFullYear();         // tidak di-hardcode
const birthYear = currentYear - age;

// ===== PART 4: PROCESS THE SCORE =====
const score = parseFloat(scoreText);                  // "85.678" -> 85.678
const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);

// ===== PART 5: DETERMINE THE GRADE =====
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "E";
}

// ===== PART 6: REGISTRATION DATE =====
const regParts = registrationText.split("-");         // ["21", "08", "2026"]
const registration = {                                // Object
    day: Number(regParts[0]),
    month: Number(regParts[1]),
    year: Number(regParts[2])
};
// Buat Date dari data registrasi (bulan dikurangi 1 karena mulai dari 0)
const registrationDate = new Date(registration.year, registration.month - 1, registration.day);

// ===== PART 7: CURRENT DATE & TIME =====
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDate = now.getDate();
const nowDay = now.getDay();
const nowHours = now.getHours();
const nowMinutes = now.getMinutes();
const timeText = `${String(nowHours).padStart(2, "0")}:${String(nowMinutes).padStart(2, "0")}`;

// ===== PART 9: LUCKY DICE =====
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult;
if (dice === 6) {
    diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
    diceResult = "💀 BAD LUCK!";
} else {
    diceResult = "😎 GOOD LUCK!";
}

// ===== BONUS KREATIVITAS =====
// 1. Email otomatis
const email = `${username}@hsi.sch.id`;

// 2. Jumlah karakter nama (tanpa spasi)
const nameLength = cleanName.split(" ").join("").length;

// 3. Nama hari (Array)
const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayName = dayNames[nowDay];

// 4. Greeting berdasarkan jam
let greeting;
if (nowHours < 11) {
    greeting = "Selamat pagi ☀️";
} else if (nowHours < 15) {
    greeting = "Selamat siang 🌤️";
} else if (nowHours < 18) {
    greeting = "Selamat sore 🌇";
} else {
    greeting = "Selamat malam 🌙";
}

// 5. Status kelulusan
let status;
if (score >= 75) {
    status = "✅ LULUS";
} else {
    status = "❌ BELUM LULUS";
}

// ===== PART 10: FINAL REPORT =====
const line = "────────────────────────────────────";

console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");
console.log("");
console.log(`${greeting}, ${cleanName}!`);
console.log("");

console.log("👤 STUDENT");
console.log(line);
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log(`Email         : ${email}`);
console.log(`Name Length   : ${nameLength} huruf`);
console.log("");

console.log("🔎 NAME ANALYSIS");
console.log(line);
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${firstFive}`);
console.log(`Replacement    : ${replacement}`);
console.log("");

console.log("🎂 AGE");
console.log(line);
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Current Year   : ${currentYear}`);
console.log(`Birth Year     : ${birthYear}`);
console.log("");

console.log("📊 SCORE");
console.log(line);
console.log(`Original Score : ${scoreText}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundScore}`);
console.log(`Floor          : ${floorScore}`);
console.log(`Ceil           : ${ceilScore}`);
console.log(`Grade          : ${grade}`);
console.log(`Status         : ${status}`);
console.log("");

console.log("📅 REGISTRATION");
console.log(line);
console.log(`Day            : ${registration.day}`);
console.log(`Month          : ${registration.month}`);
console.log(`Year           : ${registration.year}`);
console.log(`Date           : ${formatDate(registrationDate)}`);
console.log("");

console.log("🕐 REPORT GENERATED");
console.log(line);
console.log(`Year           : ${nowYear}`);
console.log(`Month          : ${nowMonth}`);
console.log(`Date           : ${nowDate}`);
console.log(`Day            : ${nowDay} (${dayName})`);
console.log(`Report Date    : ${formatDate(now)}`);
console.log(`Time           : ${timeText}`);
console.log("");

console.log("🎲 LUCKY DICE");
console.log(line);
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);
console.log("");

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");