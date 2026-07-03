const dict = {
  ar: {
    dir:'rtl',
    brand:'ساعد للأنظمة المرورية',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'ساعد للأنظمة المرورية | ساحات الحجز المرورية',
    hero_sub:'كل ما تحتاجه لاستلام مركبتك في مكان واحد، من القوانين والوثائق المطلوبة إلى مواقع جميع الساحات التابعة لنا.',
    hero_addr:'أبوظبي – مصفح، الإمارات العربية المتحدة',
    footer_addr:'ساعد – الإمارات العربية المتحدة',
    laws_title:'المتطلبات والوثائق',
    laws_desc:'اقرأ الشروط التالية جيدًا قبل الحضور لاستلام مركبتك.',
    yards_title:'مواقع ساحات الحجز',
    yards_desc:'اختر الساحة على الخريطة قبل الحضور.',
    modal_title:'نموذج تفويض',
    modal_note:'هذا مثال توضيحي فقط لشكل خطاب التفويض/عدم الممانعة المطلوب. استبدل البيانات ببيانات مركبتك الفعلية.',
    modal_close:'إغلاق',
    back_btn:'رجوع',
    footer_text:'© ساعد للأنظمة المرورية. جميع الحقوق محفوظة.',
    laws: [
      {t:'إذا كانت المركبة شخصية، يجب الحضور لساحات الحجز وتقديم المستندات التالية:',
        sub:['صورة من بطاقة الهوية أو رخصة القيادة لمالك المركبة المحجوزة','ملكية المركبة (المُلكية)']},
      {t:'إذا كانت السيارة باسم شخص آخر أو جهة، يجب إحضار تفويض قانوني لاستلام المركبة.'},
      {t:'يجب أن يكون التفويض رسميًا من صاحب المركبة، وأن يتضمن البيانات التالية:', key:true,
        sub:['الاسم','رقم الهوية','رقم السيارة','رقم الشاصي (VIN) للمركبة'],
        sample:'اضغط هنا لرؤية مثال'},
      {t:'إذا لم يكن لديك تفويض أو عدم ممانعة، يجب على صاحب المركبة الحضور بنفسه لاستلامها.'},
      {t:'يجب دفع رسوم الحجز المالية المحتسبة من ساعد، بالإضافة إلى جميع غرامات المواقف.'},
      {t:'يتم احتساب 100 درهم يوميًا خلال الشهر الأول من تاريخ حجز المركبة، ثم 500 درهم عن كل شهر لاحق حتى فك الحجز أو بيع المركبة في المزاد العلني.', key:true},
      {t:'إذا كان لديك بطاقة مندوب، يمكنك استلام السيارة إذا كنت مندوبًا لدى الشركة نفسها المسجلة باسمها المركبة.'},
      {t:'سيتم إرسال رابط دفع للعميل من قبل موظف ساعد لسداد رسوم الحجز المحتسبة، بينما تُسدد مخالفات المواقف عبر تطبيق تم أو تطبيق درب عبر الرمز المروري.', key:true},
      {t:'بعض الوثائق المقبولة:', sub:['بطاقة مندوب','رخصة تجارية لأصحاب الشركات','رسالة حيازة (في حال كانت السيارة بدون رقم أو غير مسجّلة)']},
      {t:'في حال تجاوزت مدة حجز المركبة ستة أشهر، تُحال إلى المزاد العلني وفقًا للإجراءات المعتمدة من دائرة النقل.'},
      {t:'مثال توضيحي: إذا كان مبلغ المخالفات 8,000 درهم، وبيعت السيارة في المزاد بمبلغ 4,000 درهم، فإن المبلغ المتبقي من المخالفات (4,000 درهم) يبقى مسجّلًا باسمك.', key:true},
      {t:'لا يمكن استلام المركبة دون استيفاء أحد الشروط السابقة.', key:true}
    ],
    yard_groups: [
      { title:'ساحات حجز مصفح', yards:[
        {name:'ساحة مصفح 1', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'ساحة مصفح 2', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'ساحة مصفح 3', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'}
      ]},
      { title:'ساحات أخرى', yards:[
        {name:'ساحة Q-Mobility', note:'أبوظبي', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'ساحة المفرق المزادات', note:'المفرق، أبوظبي', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'ساحة حجز المركبات المرور المفرق', note:'المفرق، أبوظبي', url:'https://maps.app.goo.gl/w9hhe1DnJRqNco9T7'},
        {name:'ساحة حجز المركبات بني ياس', note:'بني ياس، أبوظبي', url:'https://maps.app.goo.gl/UNrDciQ9cK5HDsNo8'}
      ]}
    ],
    map_btn:'فتح في خرائط جوجل'
  },
  en: {
    dir:'ltr',
    brand:'SAAED Traffic Systems',
    tagline_small:'ساعد للأنظمة المرورية',
    hero_title:'Smart Services for Traffic Systems Management',
    hero_sub:'Everything you need in one place — the laws and documents required to collect your vehicle, along with the locations of all our yards.',
    hero_addr:'Abu Dhabi – Musaffah, United Arab Emirates',
    footer_addr:'SAAED – United Arab Emirates',
    laws_title:'Requirements & Documents',
    laws_desc:'Please read the following terms carefully before coming to collect your vehicle.',
    yards_title:'Impound Yard Locations',
    yards_desc:'Pick the yard on the map before you head over.',
    modal_title:'Sample Authorization Letter',
    modal_note:'This is only an illustrative example of the required authorization / no-objection letter format. Replace the details with your own vehicle\u2019s information.',
    modal_close:'Close',
    back_btn:'Back',
    footer_text:'© SAAED Traffic Systems. All rights reserved.',
    laws: [
      {t:'If the vehicle is personal (registered under an individual), you must come to the impound yard and submit the following documents:',
        sub:['A copy of the Emirates ID or driving license of the impounded vehicle\u2019s registered owner','The vehicle\u2019s registration card (Mulkiya)']},
      {t:'If the vehicle is registered under someone else\u2019s name or an entity, you must bring a legal authorization to collect the vehicle.'},
      {t:'The authorization letter must be official and issued by the vehicle owner, and must include the following details:', key:true,
        sub:['Name','Emirates ID number','Vehicle plate number','Vehicle chassis number (VIN)'],
        sample:'Click here to see an example'},
      {t:'If you do not have an authorization letter or NOC, the vehicle owner must come in person to collect the vehicle.'},
      {t:'You must pay the impound fees calculated by SAAED, in addition to any parking fines.'},
      {t:'A fee of AED 100 per day is calculated during the first month from the vehicle\u2019s impound date, then AED 500 for each subsequent month, until the vehicle is released or sold at public auction.', key:true},
      {t:'If you hold a company representative card, you may collect the vehicle if you are a representative of the same company the vehicle is registered under.'},
      {t:'A payment link for the calculated impound fees will be sent to the customer by a SAAED staff member, while parking fines are paid through the Tam app or the Darb app using the traffic code.', key:true},
      {t:'Some accepted documents:', sub:['Representative card','Trade license for company owners','Possession letter (if the vehicle is unregistered or has no plate)']},
      {t:'If the vehicle\u2019s impound period exceeds six months, it will be referred to public auction in accordance with the procedures approved by the Department of Transport.'},
      {t:'Example: if your fines total AED 8,000 and the vehicle sells at auction for AED 4,000, the remaining AED 4,000 stays registered against your name.', key:true},
      {t:'The vehicle cannot be released without meeting one of the conditions above.', key:true}
    ],
    yard_groups: [
      { title:'Musaffah Impound Yards', yards:[
        {name:'Musaffah Yard 1', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'Musaffah Yard 2', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'Musaffah Yard 3', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'}
      ]},
      { title:'Other Yards', yards:[
        {name:'Q-Mobility Yard', note:'Abu Dhabi', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'Al Mafraq Auctions Yard', note:'Al Mafraq, Abu Dhabi', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'Al Mafraq Traffic Vehicle Impound Yard', note:'Al Mafraq, Abu Dhabi', url:'https://maps.app.goo.gl/w9hhe1DnJRqNco9T7'},
        {name:'Bani Yas Vehicle Impound Yard', note:'Bani Yas, Abu Dhabi', url:'https://maps.app.goo.gl/UNrDciQ9cK5HDsNo8'}
      ]}
    ],
    map_btn:'Open in Google Maps'
  },
  ur: {
    dir:'rtl',
    brand:'ساعد ٹریفک سسٹمز',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'ٹریفک نظام کے انتظام کے لیے ذہین خدمات',
    hero_sub:'اپنی گاڑی وصول کرنے کے لیے درکار ہر چیز ایک ہی جگہ — قوانین اور مطلوبہ دستاویزات سے لے کر ہمارے تمام یارڈز کے مقامات تک۔',
    hero_addr:'ابوظبی – مصفح، متحدہ عرب امارات',
    footer_addr:'ساعد – متحدہ عرب امارات',
    laws_title:'تقاضے اور دستاویزات',
    laws_desc:'گاڑی وصول کرنے کے لیے آنے سے پہلے درج ذیل شرائط بغور پڑھ لیں۔',
    yards_title:'یارڈز کے مقامات',
    yards_desc:'آنے سے پہلے نقشے پر یارڈ منتخب کریں۔',
    modal_title:'تفویض نامے کا نمونہ',
    modal_note:'یہ صرف مطلوبہ تفویض نامے / عدم اعتراض خط کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔',
    modal_close:'بند کریں',
    back_btn:'واپس',
    footer_text:'© ساعد ٹریفک سسٹمز۔ جملہ حقوق محفوظ ہیں۔',
    laws: [
      {t:'اگر گاڑی ذاتی ملکیت میں ہے تو آپ کو یارڈ آ کر درج ذیل دستاویزات جمع کروانی ہوں گی:',
        sub:['گاڑی کے مالک کے شناختی کارڈ یا ڈرائیونگ لائسنس کی کاپی','گاڑی کی ملکیت (ملکیہ)']},
      {t:'اگر گاڑی کسی اور شخص یا ادارے کے نام پر رجسٹرڈ ہے تو گاڑی وصول کرنے کے لیے قانونی تفویض نامہ لانا لازمی ہے۔'},
      {t:'تفویض نامہ گاڑی کے مالک کی طرف سے رسمی طور پر جاری کیا گیا ہونا چاہیے، اور اس میں درج ذیل تفصیلات شامل ہونی چاہئیں:', key:true,
        sub:['نام','شناختی کارڈ نمبر','گاڑی نمبر','گاڑی کا چیسس نمبر (VIN)'],
        sample:'مثال دیکھنے کے لیے یہاں دبائیں'},
      {t:'اگر آپ کے پاس تفویض نامہ یا عدم اعتراض کا خط نہیں ہے تو گاڑی کے مالک کو خود آ کر گاڑی وصول کرنی ہوگی۔'},
      {t:'ساعد کی طرف سے احتساب کی گئی یارڈ فیس ادا کرنا لازمی ہے، اس کے علاوہ پارکنگ کے تمام جرمانے بھی۔'},
      {t:'گاڑی کے یارڈ میں آنے کی تاریخ سے پہلے مہینے کے دوران روزانہ 100 درہم فیس شمار کی جاتی ہے، اس کے بعد ہر اگلے مہینے 500 درہم — جب تک گاڑی چھڑائی نہ جائے یا نیلامی میں فروخت نہ ہو جائے۔', key:true},
      {t:'اگر آپ کے پاس نمائندہ کارڈ ہے تو آپ گاڑی وصول کر سکتے ہیں بشرطیکہ آپ اسی کمپنی کے نمائندے ہوں جس کے نام پر گاڑی رجسٹرڈ ہے۔'},
      {t:'احتساب شدہ یارڈ فیس کی ادائیگی کے لیے ساعد کا عملہ گاہک کو پیمنٹ لنک بھیجے گا، جبکہ پارکنگ کی خلاف ورزیاں ٹریفک کوڈ کے ذریعے تم (Tam) ایپ یا درب (Darb) ایپ سے ادا کی جائیں گی۔', key:true},
      {t:'کچھ قابلِ قبول دستاویزات:', sub:['نمائندہ کارڈ','کمپنی مالکان کے لیے تجارتی لائسنس','قبضہ نامہ (اگر گاڑی غیر رجسٹرڈ ہے یا نمبر پلیٹ نہیں ہے)']},
      {t:'اگر گاڑی کے یارڈ میں رہنے کی مدت چھ مہینے سے تجاوز کر جائے تو اسے ڈیپارٹمنٹ آف ٹرانسپورٹ کے منظور شدہ طریقہ کار کے مطابق عوامی نیلامی کے لیے بھیج دیا جائے گا۔'},
      {t:'مثال: اگر جرمانوں کی رقم 8,000 درہم ہو اور گاڑی نیلامی میں 4,000 درہم میں فروخت ہو جائے تو باقی ماندہ 4,000 درہم اب بھی آپ کے نام درج رہیں گے۔', key:true},
      {t:'مذکورہ بالا شرائط میں سے کسی ایک کو پورا کیے بغیر گاڑی حاصل نہیں کی جا سکتی۔', key:true}
    ],
    yard_groups: [
      { title:'مصفح یارڈز', yards:[
        {name:'مصفح یارڈ 1', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'مصفح یارڈ 2', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'مصفح یارڈ 3', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'}
      ]},
      { title:'دیگر یارڈز', yards:[
        {name:'Q-Mobility یارڈ', note:'ابوظبی', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'المفرق نیلامی یارڈ', note:'المفرق، ابوظبی', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'المفرق ٹریفک وہیکل امپاؤنڈ یارڈ', note:'المفرق، ابوظبی', url:'https://maps.app.goo.gl/w9hhe1DnJRqNco9T7'},
        {name:'بنی یاس وہیکل امپاؤنڈ یارڈ', note:'بنی یاس، ابوظبی', url:'https://maps.app.goo.gl/UNrDciQ9cK5HDsNo8'}
      ]}
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
  grid.innerHTML = d.yard_groups.map(group=>{
    const cards = group.yards.map(y=>{
      return '<div class="yard-card">' +
        '<div class="pin">' + pinIcon + '</div>' +
        '<h3>' + y.name + '</h3>' +
        '<p>' + y.note + '</p>' +
        '<a class="yard-link" href="' + y.url + '" target="_blank" rel="noopener">' + mapIcon + '<span>' + d.map_btn + '</span></a>' +
      '</div>';
    }).join('');
    return '<div class="yard-group">' +
      '<h3 class="yard-group-title">' + group.title + '</h3>' +
      '<div class="yard-grid-inner">' + cards + '</div>' +
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

function showGate(){
  document.getElementById('gate').style.display = 'flex';
  document.getElementById('site').style.display = 'none';
  window.scrollTo(0,0);
}

function showSite(){
  document.getElementById('gate').style.display = 'none';
  document.getElementById('site').style.display = 'block';
  window.scrollTo(0,0);
}

function selectLang(lang){
  applyLang(lang);
  const onSite = document.getElementById('site').style.display === 'block';
  showSite();
  if(!onSite){
    history.pushState({ view:'site' }, '', '#site');
  }
}

function goBack(){
  history.back();
}

window.addEventListener('popstate', (e)=>{
  if(e.state && e.state.view === 'site'){
    showSite();
  } else {
    showGate();
  }
});

// ensure initial state is the gate
history.replaceState({ view:'gate' }, '', '#');

function openModal(){ document.getElementById('modal-overlay').classList.add('open'); }
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); }
