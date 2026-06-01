// ================= SUPABASE INIT (IMPORTANT FIX) =================
const supabaseUrl = "https://mdqewmyamsdxlsnddeuq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcWV3bXlhbXNkeGxzbmRkZXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMTkzNTksImV4cCI6MjA5NTc5NTM1OX0.WlhIywQtsMVDyqN-Kuvi65xHjcaGBCEP2Kh9vUNh7OU";



const client = window.supabase.createClient(supabaseUrl, supabaseKey);

// ================= LANGUAGE APPLY =================
function applyLanguage() {

  document.body.dir = (currentLang === "ar") ? "rtl" : "ltr";

  document.getElementById("title").innerText = t("title");
  document.getElementById("tagline").innerText = t("tagline");
  document.getElementById("heroEyebrow").innerText = t("heroEyebrow");
  document.getElementById("heroHeading").innerText = t("heroHeading");
  document.getElementById("heroText").innerText = t("heroText");
  document.getElementById("tip1Title").innerText = t("tip1Title");
  document.getElementById("tip1Desc").innerText = t("tip1Desc");
  document.getElementById("tip2Title").innerText = t("tip2Title");
  document.getElementById("tip2Desc").innerText = t("tip2Desc");
  document.getElementById("tip3Title").innerText = t("tip3Title");
  document.getElementById("tip3Desc").innerText = t("tip3Desc");
  document.getElementById("doctorTitle").innerText = t("doctors");
  document.getElementById("doctorSectionText").innerText = t("doctorSectionText");
  document.getElementById("modalTitle").innerText = t("modalTitle");
  document.getElementById("modalDoctorName").innerText = selectedDoctor
    ? `${t("bookingWithPrefix")} ${selectedDoctor}`
    : t("modalSubtitle");
  document.getElementById("confirmBooking").innerText = t("confirm");
  document.getElementById("cancelBooking").innerText = t("cancel");

  loadDoctors();
}

// ================= LOAD DOCTORS =================
async function loadDoctors() {

  const { data } = await client.from("doctors").select("*");

  const list = document.getElementById("doctorList");
  list.innerHTML = "";

  data.forEach(doc => {

    list.innerHTML += `
      <div class="doctor-card">

        <img src="${doc.image_url}" class="doctor-img"/>

        <h3>${doc.name}</h3>
        <p>${doc.specialization}</p>
        <p>💰 ${doc.fee}</p>

        <button onclick="bookDoctor('${doc.name}')">
          ${t("book")}
        </button>

      </div>
    `;
  });
}

// ================= BOOKING =================
let selectedDoctor = "";

function bookDoctor(name) {
  selectedDoctor = name;
  document.getElementById("modalDoctorName").innerText = `${t("bookingWithPrefix")} ${name}`;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// ================= SMART BOOKING =================
async function submitBooking() {

  const patient = document.getElementById("pname").value.trim();
  const phone = document.getElementById("pphone").value.trim();
  const symptoms = document.getElementById("psymptoms").value.trim();
  const date = document.getElementById("pdate").value;
  const time = document.getElementById("ptime").value;

  if (!patient || !phone || !symptoms || !date || !time) {
    alert("Please fill all fields");
    return;
  }

  // ❌ prevent double booking
  const { data: existing } = await client
    .from("appointments")
    .select("*")
    .eq("doctor_name", selectedDoctor)
    .eq("appointment_date", date)
    .eq("appointment_time", time);

  if (existing.length > 0) {
    alert("This slot is already booked");
    return;
  }

  const { error } = await client.from("appointments").insert([{
    patient_name: patient,
    phone,
    doctor_name: selectedDoctor,
    symptoms,
    appointment_date: date,
    appointment_time: time,
    status: "pending"
  }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Booked successfully!");

  closeModal();
}

// ================= START =================
applyLanguage();