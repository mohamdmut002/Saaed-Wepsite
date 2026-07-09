const dict = {
  ar: {
    dir:'rtl',
    brand:'ساعد للأنظمة المرورية',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'ساعد للأنظمة المرورية | ساحات الحجز',
    hero_sub:'كل ما تحتاجه لاستلام مركبتك في مكان واحد، من القوانين والوثائق المطلوبة إلى مواقع جميع الساحات التابعة لنا.',
    hero_addr:'أبوظبي – مصفح، الإمارات العربية المتحدة',
    footer_addr:'ساعد – الإمارات العربية المتحدة',
    laws_title:'المتطلبات والوثائق',
    laws_desc:'اقرأ الشروط التالية جيدًا قبل الحضور لاستلام مركبتك.',
    yards_title:'مواقع ساحات حجز ساعد ودائرة النقل',
    yards_desc:'اختر الساحة على الخريطة قبل الحضور.',
    modal_title:'نموذج تفويض',
    modal_note:'هذا مثال توضيحي فقط لشكل خطاب التفويض/رسالة عدم ممانعة المطلوب. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.',
    modal_close:'إغلاق',
    back_btn:'رجوع',
    footer_text:'© ساعد للأنظمة . جميع الحقوق محفوظة.',
    samples:{
      authorization:{ title:'نموذج تفويض', note:'هذا مثال توضيحي فقط لشكل خطاب التفويض/رسالة عدم ممانعة المطلوب. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.', src:'images/authorization-sample.png' },
      traffic_code:{ title:'نموذج براءة ذمة - الرمز المروري', note:'هذا مثال توضيحي فقط لشكل شهادة براءة الذمة الخاصة بالرمز المروري. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.', src:'images/clearance-traffic-code.png' },
      violations:{ title:'نموذج براءة ذمة - مخالفات المركبة', note:'هذا مثال توضيحي فقط لشكل شهادة براءة الذمة الخاصة بمخالفات المركبة. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.', src:'images/clearance-violations.png' },
      release_order:{ title:'نموذج أمر فك حجز من مركز الشرطة', note:'هذا مثال توضيحي فقط لشكل أمر فك الحجز الصادر من مركز الشرطة. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.', src:'images/police-release-order.jpeg' },
      taqa:{ title:'نموذج براءة ذمة - شركة طاقة للتوزيع', note:'هذا مثال توضيحي فقط لشكل خطاب براءة الذمة الصادر من شركة طاقة للتوزيع. استبدل البيانات ببياناتك وبيانات مركبتك الفعلية.', src:'images/clearance-taqa.jpeg' }
    },
    laws: [
      {t:'الأوراق والمستندات المطلوبة لاستلام المركبات:',
        sub:[
          'حضور مالك المركبة',
          'إذا كانت المركبة مسجلة باسم شخص (المالك فرد)، صورة من بطاقة الهوية أو رخصة القيادة لمالك المركبة المحجوزة',
          'إذا كان المراجع ليس المالك، يجب إحضار توكيل رسمي معتمد أو تفويض إذا كانت المركبة باسم شركة لاستلام المركبة',
          'ملكية المركبة أو شطب الحيازة'
        ]},
      {t:'يجب أن يكون التفويض رسميًا من صاحب المركبة، وأن يتضمن البيانات التالية:', key:true,
        sub:['الاسم','رقم الهوية','رقم المركبة','رقم الشاصي (VIN) للمركبة'],
        sample:'اضغط هنا لرؤية مثال'},
      {t:'إذا لم يكن لديك تفويض أو رسالة عدم ممانعة، يجب على صاحب المركبة الحضور بنفسه لاستلامها.'},
      {t:'سيتم إرسال رابط دفع للعميل من قبل موظف ساعد لسداد رسوم الحجز ورسوم القطر المحتسبة.', key:true},
      {t:'يجب دفع جميع مخالفات المواقف المسجلة على المركبة، ويتم تسديدها عبر تطبيق تم أو تطبيق درب.', key:true},
      {t:'بعض الوثائق المطلوبة لاستلام المركبات المملوكة باسم شركة أو مؤسسة:', sub:['رخصة تجارية لأصحاب الشركات','رسالة حيازة (في حال كانت السيارة بدون رقم أو غير مسجّلة)']},
      {t:'في حال تجاوزت مدة حجز المركبة ستة أشهر، تُحال إلى المزاد العلني وفقًا للإجراءات المعتمدة من مركز النقل المتكامل.'},
      {t:'يتم تسليم المركبة للمالك او من يمثله قانونا, ولا يمكن استلام المركبة دون استيفاء أحد الشروط السابقة.', key:true},
      {t:'أوراق ومستندات إضافية مطلوبة لاستلام المركبات التي توجد عليها قيود:', key:true,
        groups:[
          { label:'1. مخالفة تهريب ركاب (قرار لجنة تهريب الركاب)', sub:[
            {t:'براءة ذمة على الرمز المروري (إذا كانت المركبة مملوكة لفرد)', sample:'traffic_code'},
            {t:'براءة ذمة على المخالفات المركبة (إذا كانت المركبة مملوكة لشركة أو مؤسسة)', sample:'violations'},
            {t:'أمر فك حجز من مركز الشرطة', sample:'release_order'}
          ]},
          { label:'2. صهاريج الديزل', sub:[
            {t:'مراجعة مركز شرطة مصفح (الرائد علي الشامسي)'},
            {t:'براءة ذمة على الرمز المروري (إذا كانت المركبة مملوكة لفرد)', sample:'traffic_code'},
            {t:'براءة ذمة على المخالفات المركبة (إذا كانت المركبة مملوكة لشركة أو مؤسسة)', sample:'violations'}
          ]},
          { label:'3. صهاريج الماء', sub:[
            {t:'براءة ذمة من شركة طاقة للتوزيع', sample:'taqa'},
            {t:'براءة ذمة على الرمز المروري (إذا كانت المركبة مملوكة لفرد)', sample:'traffic_code'},
            {t:'براءة ذمة على المخالفات المركبة (إذا كانت المركبة مملوكة لشركة أو مؤسسة)', sample:'violations'}
          ]}
        ]}
    ],
    yard_groups: [
      { title:'ساحات حجز مصفح', yards:[
        {name:'ساحة مصفح 1', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'ساحة مصفح 2', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'ساحة مصفح 3', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
        {name:'ساحة مصفح 4', note:'مصفح، أبوظبي', url:'https://maps.app.goo.gl/7BwiJdea3NnFX1jW7?g_st=iw'}
      ]},
      { title:'ساحات أخرى', yards:[
        {name:'ساحة حجز المركبات - دائرة النقل', note:'مصفح الكورنيش', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'الامارات للمزادات - المفرق', note:'المفرق', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'ساحة مواقف أبوظبي', note:'شارع المطار، أبوظبي', url:'https://maps.app.goo.gl/odQS4AC9yVrACRwZ7'},
        {name:'ساحة العين', note:'العين', url:'https://maps.app.goo.gl/uceHfSMozPJHaQeP7?g_st=ic'}
      ]}
    ],
    map_btn:'فتح في خرائط جوجل'
  },
  en: {
    dir:'ltr',
    brand:'SAAED Traffic Systems',
    tagline_small:'ساعد للأنظمة المرورية',
    hero_title:'SAAED Traffic Systems | Impound Yards',
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
    samples:{
      authorization:{ title:'Sample Authorization Letter', note:'This is only an illustrative example of the required authorization / no-objection letter format. Replace the details with your own vehicle\u2019s information.', src:'images/authorization-sample.png' },
      traffic_code:{ title:'Sample Traffic Code Clearance', note:'This is only an illustrative example of the traffic code clearance certificate. Replace the details with your own vehicle\u2019s information.', src:'images/clearance-traffic-code.png' },
      violations:{ title:'Sample Vehicle Violations Clearance', note:'This is only an illustrative example of the vehicle violations clearance certificate. Replace the details with your own vehicle\u2019s information.', src:'images/clearance-violations.png' },
      release_order:{ title:'Sample Police Station Release Order', note:'This is only an illustrative example of a release order issued by a police station. Replace the details with your own vehicle\u2019s information.', src:'images/police-release-order.jpeg' },
      taqa:{ title:'Sample TAQA Distribution Clearance', note:'This is only an illustrative example of a clearance letter issued by TAQA Distribution. Replace the details with your own vehicle\u2019s information.', src:'images/clearance-taqa.jpeg' }
    },
    laws: [
      {t:'Documents required to collect a vehicle:',
        sub:[
          'The vehicle owner must be present',
          'If the vehicle is registered under an individual (the owner is a person), a copy of the Emirates ID or driving license of the impounded vehicle\u2019s registered owner',
          'If the person collecting the vehicle is not the owner, an official certified power of attorney or authorization must be brought to collect the vehicle, if the vehicle is registered under a company',
          'The vehicle\u2019s registration card (Mulkiya), or a possession write-off document'
        ]},
      {t:'The authorization letter must be official and issued by the vehicle owner, and must include the following details:', key:true,
        sub:['Name','Emirates ID number','Vehicle plate number','Vehicle chassis number (VIN)'],
        sample:'Click here to see an example'},
      {t:'If you do not have an authorization letter or NOC, the vehicle owner must come in person to collect the vehicle.'},
      {t:'A payment link for the calculated impound and towing fees will be sent to the customer by a SAAED staff member.', key:true},
      {t:'All parking fines registered against the vehicle must be paid, and are settled through the Tam app or the Darb app.', key:true},
      {t:'Some documents required to collect vehicles registered under a company or organization:', sub:['Trade license for company owners','Possession letter (if the vehicle is unregistered or has no plate)']},
      {t:'If the vehicle\u2019s impound period exceeds six months, it will be referred to public auction in accordance with the procedures approved by the Integrated Transport Centre.'},
      {t:'The vehicle will be released to the owner or their legally authorized representative. The vehicle cannot be released unless one of the above requirements has been met.', key:true},
      {t:'Additional documents required to collect vehicles with restrictions on them:', key:true,
        groups:[
          { label:'1. Passenger smuggling violation (Passenger Smuggling Committee decision)', sub:[
            {t:'Clearance on the traffic code (if the vehicle is owned by an individual)', sample:'traffic_code'},
            {t:'Clearance on the vehicle\u2019s violations (if the vehicle is owned by a company or organization)', sample:'violations'},
            {t:'A release order from the police station', sample:'release_order'}
          ]},
          { label:'2. Diesel tankers', sub:[
            {t:'Follow up with Musaffah Police Station (Major Ali Al Shamsi)'},
            {t:'Clearance on the traffic code (if the vehicle is owned by an individual)', sample:'traffic_code'},
            {t:'Clearance on the vehicle\u2019s violations (if the vehicle is owned by a company or organization)', sample:'violations'}
          ]},
          { label:'3. Water tankers', sub:[
            {t:'Clearance from Ta\u2019qa Distribution Company', sample:'taqa'},
            {t:'Clearance on the traffic code (if the vehicle is owned by an individual)', sample:'traffic_code'},
            {t:'Clearance on the vehicle\u2019s violations (if the vehicle is owned by a company or organization)', sample:'violations'}
          ]}
        ]}
    ],
    yard_groups: [
      { title:'Musaffah Impound Yards', yards:[
        {name:'Musaffah Yard 1', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'Musaffah Yard 2', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'Musaffah Yard 3', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
        {name:'Musaffah Yard 4', note:'Musaffah, Abu Dhabi', url:'https://maps.app.goo.gl/7BwiJdea3NnFX1jW7?g_st=iw'}
      ]},
      { title:'Other Yards', yards:[
        {name:'Q-Mobility Yard', note:'Abu Dhabi', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'Auctions Yard – Al Mafraq', note:'Al Mafraq', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'Abu Dhabi Parking Yard', note:'Airport Road, Abu Dhabi', url:'https://share.google/NwoClNuG0s1ctQLwH'},
        {name:'Al Ain Yard', note:'Al Ain', url:'https://maps.app.goo.gl/uceHfSMozPJHaQeP7?g_st=ic'}
      ]}
    ],
    map_btn:'Open in Google Maps'
  },
ur: {
    dir:'rtl',
    brand:'ساعد ٹریفک سسٹمز',
    tagline_small:'SAAED Traffic Systems',
    hero_title:'سائد ٹریفک سسٹمز | ٹریفک امپاؤنڈ یارڈز',
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
    samples:{
      authorization:{ title:'تفویض نامے کا نمونہ', note:'یہ صرف مطلوبہ تفویض نامے / عدم اعتراض خط کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔', src:'images/authorization-sample.png' },
      traffic_code:{ title:'ٹریفک کوڈ کلیئرنس کا نمونہ', note:'یہ صرف ٹریفک کوڈ کلیئرنس سرٹیفکیٹ کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔', src:'images/clearance-traffic-code.png' },
      violations:{ title:'گاڑی کی خلاف ورزیوں کے کلیئرنس کا نمونہ', note:'یہ صرف گاڑی کی خلاف ورزیوں کے کلیئرنس سرٹیفکیٹ کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔', src:'images/clearance-violations.png' },
      release_order:{ title:'پولیس اسٹیشن رہائی حکم نامے کا نمونہ', note:'یہ صرف پولیس اسٹیشن کی طرف سے جاری رہائی کے حکم نامے کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔', src:'images/police-release-order.jpeg' },
      taqa:{ title:'طاقہ ڈسٹری بیوشن کلیئرنس کا نمونہ', note:'یہ صرف طاقہ ڈسٹری بیوشن کی طرف سے جاری کلیئرنس لیٹر کی شکل کی مثال ہے۔ تفصیلات کو اپنی گاڑی کی اصل معلومات سے تبدیل کریں۔', src:'images/clearance-taqa.jpeg' }
    },
    laws: [
      {t:'گاڑی وصول کرنے کے لیے درکار دستاویزات:',
        sub:[
          'گاڑی کے مالک کی موجودگی',
          'اگر گاڑی کسی فرد کے نام پر رجسٹرڈ ہے (مالک فرد ہے) تو گاڑی کے رجسٹرڈ مالک کے شناختی کارڈ یا ڈرائیونگ لائسنس کی کاپی',
          'اگر گاڑی وصول کرنے والا شخص مالک نہیں ہے تو باقاعدہ تصدیق شدہ وکالت نامہ یا تفویض نامہ لانا لازمی ہے، اگر گاڑی کسی کمپنی کے نام پر ہے',
          'گاڑی کی ملکیت (ملکیہ) یا قبضہ ختم کرنے کی دستاویز'
        ]},
      {t:'تفویض نامہ گاڑی کے مالک کی طرف سے رسمی طور پر جاری کیا گیا ہونا چاہیے، اور اس میں درج ذیل تفصیلات شامل ہونی چاہئیں:', key:true,
        sub:['نام','شناختی کارڈ نمبر','گاڑی نمبر','گاڑی کا چیسس نمبر (VIN)'],
        sample:'مثال دیکھنے کے لیے یہاں دبائیں'},
      {t:'اگر آپ کے پاس تفویض نامہ یا عدم اعتراض کا خط نہیں ہے تو گاڑی کے مالک کو خود آ کر گاڑی وصول کرنی ہوگی۔'},
      {t:'احتساب شدہ یارڈ فیس اور ٹوئنگ فیس کی ادائیگی کے لیے ساعد کا عملہ گاہک کو پیمنٹ لنک بھیجے گا۔', key:true},
      {t:'گاڑی پر درج پارکنگ کی تمام خلاف ورزیاں ادا کرنا لازمی ہے، جو تم (Tam) ایپ یا درب (Darb) ایپ کے ذریعے ادا کی جاتی ہیں۔', key:true},
      {t:'کمپنی یا ادارے کے نام پر رجسٹرڈ گاڑیاں وصول کرنے کے لیے درکار کچھ دستاویزات:', sub:['کمپنی مالکان کے لیے تجارتی لائسنس','قبضہ نامہ (اگر گاڑی غیر رجسٹرڈ ہے یا نمبر پلیٹ نہیں ہے)']},
      {t:'اگر گاڑی کے یارڈ میں رہنے کی مدت چھ مہینے سے تجاوز کر جائے تو اسے مرکز انٹیگریٹڈ ٹرانسپورٹ کے منظور شدہ طریقہ کار کے مطابق عوامی نیلامی کے لیے بھیج دیا جائے گا۔'},
      {t:'گاڑی صرف مالک یا اس کے قانونی نمائندے کے حوالے کی جائے گی۔ مذکورہ بالا شرائط میں سے کم از کم ایک شرط پوری کیے بغیر گاڑی وصول نہیں کی جا سکتی۔', key:true},
      {t:'ایسی گاڑیاں جن پر پابندیاں عائد ہوں، انہیں وصول کرنے کے لیے درکار اضافی دستاویزات:', key:true,
        groups:[
          { label:'1. مسافر اسمگلنگ کی خلاف ورزی (مسافر اسمگلنگ کمیٹی کا فیصلہ)', sub:[
            {t:'ٹریفک کوڈ پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی فرد کی ملکیت ہے)', sample:'traffic_code'},
            {t:'گاڑی کی خلاف ورزیوں پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی کمپنی یا ادارے کی ملکیت ہے)', sample:'violations'},
            {t:'پولیس اسٹیشن سے رہائی کا حکم نامہ', sample:'release_order'}
          ]},
          { label:'2. ڈیزل ٹینکرز', sub:[
            {t:'مصفح پولیس اسٹیشن سے رجوع کریں (میجر علی الشامسی)'},
            {t:'ٹریفک کوڈ پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی فرد کی ملکیت ہے)', sample:'traffic_code'},
            {t:'گاڑی کی خلاف ورزیوں پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی کمپنی یا ادارے کی ملکیت ہے)', sample:'violations'}
          ]},
          { label:'3. پانی کے ٹینکرز', sub:[
            {t:'طاقہ ڈسٹری بیوشن کمپنی سے عدم واجبات کا سرٹیفکیٹ', sample:'taqa'},
            {t:'ٹریفک کوڈ پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی فرد کی ملکیت ہے)', sample:'traffic_code'},
            {t:'گاڑی کی خلاف ورزیوں پر عدم واجبات کا سرٹیفکیٹ (اگر گاڑی کسی کمپنی یا ادارے کی ملکیت ہے)', sample:'violations'}
          ]}
        ]}
    ],
    yard_groups: [
      { title:'مصفح یارڈز', yards:[
        {name:'مصفح یارڈ 1', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/jaLw2bjQwqJUJdaYA'},
        {name:'مصفح یارڈ 2', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/xLbBKhEmSJYooJV1A'},
        {name:'مصفح یارڈ 3', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/dA1u3KTV2PUAcQNHA'},
        {name:'مصفح یارڈ 4', note:'مصفح، ابوظبی', url:'https://maps.app.goo.gl/7BwiJdea3NnFX1jW7?g_st=iw'}
      ]},
      { title:'دیگر یارڈز', yards:[
        {name:'Q-Mobility یارڈ', note:'ابوظبی', url:'https://maps.app.goo.gl/NEh2mXFF8irEhmTy5'},
        {name:'نیلامی یارڈ - المفرق', note:'المفرق', url:'https://maps.app.goo.gl/YEy8NGRUSzhuXJ1P8'},
        {name:'ابوظبی پارکنگ یارڈ', note:'ایئرپورٹ روڈ، ابوظبی', url:'https://share.google/NwoClNuG0s1ctQLwH'},
        {name:'العین یارڈ', note:'العین', url:'https://maps.app.goo.gl/uceHfSMozPJHaQeP7?g_st=ic'}
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
    const sample = law.sample ? '<button class="sample-link" onclick="openModal(\'authorization\')">' + cameraIcon + '<span>' + law.sample + '</span></button>' : '';
    const groups = law.groups ? '<div class="law-groups">' + law.groups.map(g=>
      '<div class="law-subgroup">' +
        '<p class="law-subgroup-label">' + g.label + '</p>' +
        '<ul class="law-sub">' + g.sub.map(item=>{
          if (typeof item === 'string') return '<li>' + item + '</li>';
          const btn = item.sample ? '<button class="li-sample-btn" onclick="openModal(\'' + item.sample + '\')" aria-label="view example">' + cameraIcon + '</button>' : '';
          return '<li' + (item.sample ? ' class="has-sample"' : '') + '><span>' + item.t + '</span>' + btn + '</li>';
        }).join('') + '</ul>' +
      '</div>'
    ).join('') + '</div>' : '';
    return '<div class="law-item' + (law.key ? ' key' : '') + '">' +
      '<div class="law-num">' + (i+1) + '</div>' +
      '<div class="law-body"><p>' + law.t + '</p>' + sub + sample + groups + '</div>' +
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

let currentLang = 'ar';

function applyLang(lang){
  currentLang = lang;
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

function openModal(key){
  const s = dict[currentLang].samples[key];
  if (!s) return;
  document.getElementById('modal-img').src = s.src;
  document.getElementById('modal-title').textContent = s.title;
  document.getElementById('modal-note').textContent = s.note;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); }
