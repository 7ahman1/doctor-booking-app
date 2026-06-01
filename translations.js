
// ✅ ONLY PLACE currentLang (IMPORTANT)
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    title: "Clinic System",
    doctors: "Doctors",
    book: "Book Now",
    admin: "Admin",
    reports: "Reports",
    tagline: "Easy doctor booking & care",
    heroEyebrow: "Trusted Clinic",
    heroHeading: "Smart Healthcare Platform",
    heroText: "Book doctors, manage appointments, and get care easily from anywhere with a modern and secure experience.",
    tip1Title: "Drink water",
    tip1Desc: "Stay hydrated for better energy.",
    tip2Title: "Healthy sleep",
    tip2Desc: "7-8 hours helps recovery and immunity.",
    tip3Title: "Daily movement",
    tip3Desc: "Keep active with gentle walks and stretches.",
    doctorSectionText: "Find the right specialist and schedule a visit in minutes.",
    modalTitle: "Book Appointment",
    modalSubtitle: "Your chosen doctor",
    bookingWithPrefix: "Booking with Dr.",
    confirm: "Confirm",
    cancel: "Cancel"
  },

  fa: {
    title: "سیستم کلینیک",
    doctors: "دکترها",
    book: "رزرو",
    admin: "مدیریت",
    reports: "گزارش‌ها",
    tagline: "رزرو آسان دکتر و مراقبت",
    heroEyebrow: "کلینیک مطمئن",
    heroHeading: "پلتفرم هوشمند سلامت",
    heroText: "از هرجا پزشک رزرو کنید، نوبت‌ها را مدیریت کنید و با تجربه‌ای مدرن و امن مراقبت دریافت کنید.",
    tip1Title: "آب بنوشید",
    tip1Desc: "برای انرژی بهتر هیدراته بمانید.",
    tip2Title: "خواب سالم",
    tip2Desc: "۷-۸ ساعت به بازیابی و ایمنی کمک می‌کند.",
    tip3Title: "تحرک روزانه",
    tip3Desc: "با پیاده‌روی و کشش ملایم فعال بمانید.",
    doctorSectionText: "متخصص مناسب را پیدا کنید و در چند دقیقه وقت بگیرید.",
    modalTitle: "رزرو ملاقات",
    modalSubtitle: "پزشک انتخابی شما",
    bookingWithPrefix: "رزرو با دکتر",
    confirm: "تأیید",
    cancel: "انصراف"
  },

  ps: {
    title: "کلینیک سیستم",
    doctors: "ډاکټران",
    book: "بک کړئ",
    admin: "ادمن",
    reports: "راپورونه",
    tagline: "د ډاکټر وټاکئ او اسانه پاملرنه",
    heroEyebrow: "باوري کلینیک",
    heroHeading: "هوښیار روغتیا پلاتفورم",
    heroText: "له هر ځای څخه ډاکټران وټاکئ، ملاقاتونه مدیریت کړئ، او د یوې خوندي او معاصر تجربې سره پاملرنه ترلاسه کړئ.",
    tip1Title: "اوبه وڅښئ",
    tip1Desc: "د ښه انرژۍ لپاره اوبه وڅښئ.",
    tip2Title: "روغ خوب",
    tip2Desc: "۷-۸ ساعته د رغیدو او معافیت لپاره مرسته کوي.",
    tip3Title: "ورځنۍ خوځښت",
    tip3Desc: "په نرمې مزل او پلوټو سره فعال پاتې شئ.",
    doctorSectionText: "سم متخصص پیدا کړئ او په څو دقیقو کې وخت ونیسئ.",
    modalTitle: "د ملاقات بک کول",
    modalSubtitle: "ستاسو غوره شوی ډاکټر",
    bookingWithPrefix: "د ډاکټر سره ملاقات",
    confirm: "تایید",
    cancel: "لغوه"
  },

  ar: {
    title: "نظام العيادة",
    doctors: "الأطباء",
    book: "احجز",
    admin: "الإدارة",
    reports: "التقارير",
    tagline: "حجز طبي سهل ورعاية",
    heroEyebrow: "عيادة موثوقة",
    heroHeading: "منصة رعاية صحية ذكية",
    heroText: "احجز أطباء، أدِر المواعيد، واحصل على الرعاية بسهولة من أي مكان بتجربة حديثة وآمنة.",
    tip1Title: "اشرب الماء",
    tip1Desc: "ابق رطبًا للحصول على طاقة أفضل.",
    tip2Title: "نوم صحي",
    tip2Desc: "7-8 ساعات تساعد على التعافي والمناعة.",
    tip3Title: "الحركة اليومية",
    tip3Desc: "حافظ على نشاطك بالمشي الخفيف والتمدد.",
    doctorSectionText: "اعثر على الاختصاصي المناسب وجدول زيارة في دقائق.",
    modalTitle: "حجز موعد",
    modalSubtitle: "الطبيب المختار",
    bookingWithPrefix: "الحجز مع دكتور",
    confirm: "تأكيد",
    cancel: "إلغاء"
  }
};

function t(key) {
  return translations[currentLang]?.[key] || key;
}

function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  applyLanguage();
}