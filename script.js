const dict = {
  ar: {
    dir:'rtl',
    brand:'ساعد للأنظمة المرورية',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'خدمات ذكية لإدارة الأنظمة المرورية',
    hero_sub:'كل ما تحتاجه بخطوة واحدة: القوانين والأوراق المطلوبة، ومواقع الساحات في مختلف المناطق.',
    hero_addr:'📍 أبوظبي – مصفح، الإمارات العربية المتحدة',
    laws_title:'القوانين والأوراق المطلوبة',
    laws_desc:'اقرأ الشروط التالية جيدًا قبل الحضور لاستلام مركبتك.',
    yards_title:'مواقع باقي الساحات',
    yards_desc:'اختر الساحة على الخريطة قبل الحضور.',
    modal_title:'نموذج تفويض',
    modal_note:'هذا مثال توضيحي فقط لشكل خطاب التفويض/عدم الممانعة المطلوب. استبدل البيانات ببيانات مركبتك الفعلية.',
    modal_close:'إغلاق',
    footer_text:'© ساعد للأنظمة المرورية — جميع الحقوق محفوظة',
    laws: [
      {t:'إذا كانت السيارة باسمك، يجب عليك إحضار الهوية الإماراتية وملكية السيارة فقط.'},
      {t:'إذا كانت السيارة باسم صديقك أو أخيك أو زوجتك أو الوالدة أو باسم الشركة، يجب عليك إحضار تفويض منهم أو خطاب عدم ممانعة لاستلام المركبة.'},
      {t:'يجب أن يكون التفويض مختومًا وموقّعًا من الشركة، وأن يتضمن البيانات التالية:', key:true,
        sub:['الاسم','رقم الهوية','رقم السيارة','رقم الشاصي (VIN) للمركبة'],
        sample:'اضغط هنا لرؤية مثال'},
      {t:'إذا لم يكن لديك ورقة تفويض أو عدم ممانعة، يجب على صاحب المركبة الحضور بنفسه لاستلامها.'},
      {t:'يجب دفع الغرامات المالية الخاصة بساعد، بالإضافة إلى جميع غرامات المواقف.'},
      {t:'خلال أول شهر: تُضاف غرامة يومية قدرها 100 درهم، بالإضافة إلى رسوم ريكفري لمرة واحدة قدرها 500 درهم (رسوم الساحة). وبعد مرور 30 يومًا، تتحول الغرامة إلى 500 درهم شهريًا.', key:true},
      {t:'إذا كان لديك بطاقة مندوب، يمكنك استلام السيارة إذا كنت مندوبًا لدى الشركة نفسها المسجلة باسمها المركبة.'},
      {t:'لا يمكن استلام المركبة دون استيفاء أحد الشروط السابقة.'},
      {t:'الدفع ببطاقة فقط، ولا يتم قبول الدفع نقدًا.', key:true},
      {t:'بعض الأوراق المقبولة:', sub:['بطاقة مندوب','رخصة تجارية لأصحاب الشركات','ورقة حيازة (في حال كانت السيارة بدون رقم أو غير مسجّلة)']},
      {t:'بعد مرور فترة تقارب 6 أشهر، تسقط ملكية السيارة عن صاحبها وتُنقل إلى المزاد.'},
      {t:'مثال توضيحي: إذا كان مبلغ المخالفات 8,000 درهم، وبيعت السيارة في المزاد بمبلغ 4,000 درهم، فإن المبلغ المتبقي من المخالفات (4,000 درهم) يبقى مسجّلًا باسمك.', key:true}
    ],
    yards: [
      {name:'ساحة مصفح 1', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
      {name:'ساحة مصفح 2', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
      {name:'ساحة مصفح 3', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
      {name:'ساحة مواقف', note:'أبوظبي', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'}
    ],
    map_btn:'فتح في خرائط جوجل'
  },
  en: {
    dir:'ltr',
    brand:'SAAED Traffic Systems',
    tagline_small:'ساعد للأنظمة المرورية',
    hero_title:'Smart Services for Traffic Systems Management',
    hero_sub:'Everything you need in one place: laws & required documents, and yard locations across the region.',
    hero_addr:'📍 Abu Dhabi – Musaffah, United Arab Emirates',
    laws_title:'Laws & Required Documents',
    laws_desc:'Please read the following terms carefully before coming to collect your vehicle.',
    yards_title:'Other Yard Locations',
    yards_desc:'Pick the yard on the map before you head over.',
    modal_title:'Sample Authorization Letter',
    modal_note:'This is only an illustrative example of the required authorization / no-objection letter format. Replace the details with your own vehicle\u2019s information.',
    modal_close:'Close',
    footer_text:'© SAAED Traffic Systems — All rights reserved',
    laws: [
      {t:'If the vehicle is registered in your name, you only need to bring your Emirates ID and the vehicle registration card (Mulkiya).'},
      {t:'If the vehicle is registered under a friend, brother, wife, parent, or a company, you must bring an authorization letter or a No Objection Certificate (NOC) from them to receive the vehicle.'},
      {t:'The authorization letter must be stamped and signed by the company, and must include the following details:', key:true,
        sub:['Name','Emirates ID number','Vehicle plate number','Vehicle chassis number (VIN)'],
        sample:'Click here to see an example'},
      {t:'If you do not have an authorization letter or NOC, the vehicle owner must come in person to collect the vehicle.'},
      {t:'You must settle the fines issued by SAAED, in addition to any parking fines.'},
      {t:'During the first month: a daily fee of AED 100 applies, plus a one-time recovery fee of AED 500 (yard fee). After 30 days, the fee switches to AED 500 per month.', key:true},
      {t:'If you hold a company representative card, you may collect the vehicle if you are a representative of the same company the vehicle is registered under.'},
      {t:'The vehicle cannot be released without meeting one of the conditions above.'},
      {t:'Payment by card only — cash is not accepted.', key:true},
      {t:'Some accepted documents:', sub:['Representative card','Trade license for company owners','Possession certificate (if the vehicle is unregistered or has no plate)']},
      {t:'After approximately 6 months, ownership of the vehicle is forfeited by the owner and the vehicle is moved to auction.'},
      {t:'Example: if your fines total AED 8,000 and the vehicle sells at auction for AED 4,000, the remaining AED 4,000 stays registered against your name.', key:true}
    ],
    yards: [
      {name:'Musaffah Yard 1', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
      {name:'Musaffah Yard 2', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
      {name:'Musaffah Yard 3', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
      {name:'Parking Yard', note:'Abu Dhabi', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'}
    ],
    map_btn:'Open in Google Maps'
  },
  ur: {
    dir:'rtl',
    brand:'ساعد ٹریفک سسٹمز',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'ٹریفک نظام کے انتظام کے لیے ذہین خدمات',
    hero_sub:'ایک ہی جگہ پر وہ سب کچھ جو آپ کو چاہیے: قوانین اور مطلوبہ دستاویزات، اور مختلف علاقوں میں یارڈز کے مقامات۔',
    hero_addr:'📍 ابوظبی – مصفح، متحدہ عرب امارات',
    laws_title:'قوانین اور مطلوبہ دستاویزات',
    laws_desc:'گاڑی وصول کرنے کے لیے آنے سے پہلے درج ذیل شرائط بغور پڑھ لیں۔',
    yards_title:'دیگر یارڈز کے مقامات',
    yards_desc:'آنے سے پہلے نقشے پر یارڈ منتخب کریں۔',
    modal_title:'تفویض نامے کا نمونہ',
    modal_note:'یہ صرف مطلوبہ تفویض نامے / عدم اعتراض خط کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔',
    modal_close:'بند کریں',
    footer_text:'© ساعد ٹریفک سسٹمز — جملہ حقوق محفوظ ہیں',
    laws: [
      {t:'اگر گاڑی آپ کے نام پر ہے تو آپ کو صرف اماراتی شناختی کارڈ اور گاڑی کی ملکیت (ملکیہ) لانی ہوگی۔'},
      {t:'اگر گاڑی آپ کے دوست، بھائی، بیوی، والدہ یا کسی کمپنی کے نام پر ہے تو گاڑی وصول کرنے کے لیے آپ کو ان کی طرف سے تفویض نامہ یا عدم اعتراض کا خط (NOC) لانا ہوگا۔'},
      {t:'تفویض نامہ کمپنی کی مہر اور دستخط کے ساتھ ہونا چاہیے، اور اس میں درج ذیل تفصیلات شامل ہونی چاہئیں:', key:true,
        sub:['نام','شناختی کارڈ نمبر','گاڑی نمبر','گاڑی کا چیسس نمبر (VIN)'],
        sample:'مثال دیکھنے کے لیے یہاں دبائیں'},
      {t:'اگر آپ کے پاس تفویض نامہ یا عدم اعتراض کا خط نہیں ہے تو گاڑی کے مالک کو خود آ کر گاڑی وصول کرنی ہوگی۔'},
      {t:'ساعد کی طرف سے عائد جرمانے، اور پارکنگ کے تمام جرمانے بھی ادا کرنا لازمی ہے۔'},
      {t:'پہلے مہینے کے دوران: روزانہ 100 درہم جرمانہ لاگو ہوتا ہے، اور ایک بار 500 درہم ریکوری فیس (یارڈ فیس) بھی۔ 30 دن کے بعد جرمانہ ماہانہ 500 درہم ہو جاتا ہے۔', key:true},
      {t:'اگر آپ کے پاس نمائندہ کارڈ ہے تو آپ گاڑی وصول کر سکتے ہیں بشرطیکہ آپ اسی کمپنی کے نمائندے ہوں جس کے نام پر گاڑی رجسٹرڈ ہے۔'},
      {t:'مذکورہ بالا شرائط میں سے کسی ایک کو پورا کیے بغیر گاڑی حاصل نہیں کی جا سکتی۔'},
      {t:'صرف کارڈ کے ذریعے ادائیگی قبول کی جاتی ہے، نقد قبول نہیں کی جاتی۔', key:true},
      {t:'کچھ قابلِ قبول دستاویزات:', sub:['نمائندہ کارڈ','کمپنی مالکان کے لیے تجارتی لائسنس','قبضہ نامہ (اگر گاڑی غیر رجسٹرڈ ہے یا نمبر پلیٹ نہیں ہے)']},
      {t:'تقریباً 6 مہینے گزرنے کے بعد گاڑی کی ملکیت مالک سے ختم ہو جاتی ہے اور گاڑی نیلامی کے لیے بھیج دی جاتی ہے۔'},
      {t:'مثال: اگر جرمانوں کی رقم 8,000 درہم ہو اور گاڑی نیلامی میں 4,000 درہم میں فروخت ہو جائے تو باقی ماندہ 4,000 درہم اب بھی آپ کے نام درج رہیں گے۔', key:true}
    ],
    yards: [
      {name:'مصفح یارڈ 1', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
      {name:'مصفح یارڈ 2', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
      {name:'مصفح یارڈ 3', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
      {name:'پارکنگ یارڈ', note:'ابوظبی', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'}
    ],
    map_btn:'گوگل میپس میں کھولیں'
  }
};

const pinIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="#25876a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const mapIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
const cameraIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7 9.5 4h5L16 7"/><circle cx="12" cy="13.5" r="3.2"/></svg>';

function renderLaws(lang){
  const d = dict[lang];
  const list = document.getElementById('law-list');
  list.innerHTML = d.laws.map((law, i)=>{
    const sub = law.sub ? '<ul class="law-sub">' + law.sub.map(s=>'<li>'+s+'</li>').join('') + '</ul>' : '';
    const sample = law.sample ? '<button class="sample-link" onclick="openModal()">' + cameraIcon + '<span>' + law.sample + '</span></button>' : '';
    return '<div class="law-item' + (law.key ? ' key' : '') + '">' +
      '<div class="law-num">' + (i+1) + '</div>' +
      '<div class="law-body"><p>' + law.t + '</p>' + sub + sample + '</div>' +
    '</div>';
  }).join('');
}

function renderYards(lang){
  const d = dict[lang];
  const grid = document.getElementById('yard-grid');
  grid.innerHTML = d.yards.map(y=>{
    return '<div class="yard-card">' +
      '<div class="pin">' + pinIcon + '</div>' +
      '<h3>' + y.name + '</h3>' +
      '<p>' + y.note + '</p>' +
      '<a class="yard-link" href="' + y.url + '" target="_blank" rel="noopener">' + mapIcon + '<span>' + d.map_btn + '</span></a>' +
    '</div>';
  }).join('');
}

function applyLang(lang){
  const d = dict[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = d.dir;
  document.body.className = 'lang-' + lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(d[key] !== undefined) el.textContent = d[key];
  });
  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  renderLaws(lang);
  renderYards(lang);
}

function selectLang(lang){
  applyLang(lang);
  document.getElementById('gate').style.display = 'none';
  document.getElementById('site').style.display = 'block';
  window.scrollTo(0,0);
}

function openModal(){ document.getElementById('modal-overlay').classList.add('open'); }
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); }
