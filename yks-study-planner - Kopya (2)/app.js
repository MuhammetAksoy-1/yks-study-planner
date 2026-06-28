/* ==========================================
   YKS Odak — app.js v2
   ========================================== */

// ── Constants ──────────────────────────────
const YKS_DATE = new Date('2027-06-19T10:15:00+03:00');

const QUOTES = [
  'Başarı, her gün tekrarlanan küçük çabaların toplamıdır.',
  'Zorluklar, başarının değerini artıran süslerdir.',
  'Bugün yapacağın fedakarlıklar, yarınki gülümsemelerinin temelidir.',
  'Yorulunca dinlenmeyi öğren, vazgeçmeyi değil.',
  'Ertelemek, zaman hırsızıdır. Şimdi başla!',
  'Limitler yalnızca zihnindedir. Kendine inan.',
  'Ders çalışırken döktüğün her ter, sınav günü başarı olarak döner.',
  'İstikrar her şeydir. Küçük adımlarla büyük işler başarılır.',
  'Her yanlış sorudan bir şey öğren; hatalar en iyi öğretmendir.',
  'YKS bir maraton. Tempoyu koruyun, kazanan o olur.',
  'Bugünün çalışması, yarının özgürlüğüdür.',
  'Başarı bir gün gelir, ama o gün bugün başlar.',
];

const SUBJECT_BADGE = {
  'Matematik':'badge-mat','Geometri':'badge-geo','Türkçe':'badge-tur',
  'Edebiyat':'badge-ede','Fizik':'badge-fiz','Kimya':'badge-kim',
  'Biyoloji':'badge-bio','Tarih':'badge-tar','Coğrafya':'badge-cog',
  'Felsefe':'badge-fel','Din Kültürü':'badge-din','İngilizce':'badge-ing',
};
const SUBJECT_COLOR = {
  'Matematik':'#A29BFE','Geometri':'#818cf8','Türkçe':'#FD79A8',
  'Edebiyat':'#e84393','Fizik':'#00D2FF','Kimya':'#FDCB6E',
  'Biyoloji':'#00E676','Tarih':'#A29BFE','Coğrafya':'#55efc4',
  'Felsefe':'#ff7675','Din Kültürü':'#fab1a0','İngilizce':'#74b9ff',
};

// ── MEB Müfredatı — TYT Tam Konu Listesi ─────────────────────────────────────
const TYT_TOPICS = {
  'Türkçe': [
    'Sözcükte Anlam — Gerçek, Mecaz, Yan Anlam',
    'Sözcükte Anlam — Eş Anlam ve Zıt Anlam',
    'Sözcükte Anlam — Deyimler ve Atasözleri',
    'Sözcükte Anlam — İkilemeler, Terim, Argo',
    'Sözcükte Anlam — Sesteş Sözcükler',
    'Cümlede Anlam — Öznel ve Nesnel Yargı',
    'Cümlede Anlam — Neden-Sonuç, Amaç-Sonuç',
    'Cümlede Anlam — Koşul, Karşılaştırma, Tanım',
    'Cümlede Anlam — Benzetme ve Mecaz',
    'Paragraf — Ana Düşünce ve Başlık Bulma',
    'Paragraf — Yardımcı Düşünce',
    'Paragraf — Boşluk ve Paragraf Tamamlama',
    'Paragraf — Anlatım Biçimleri',
    'Paragraf — Düşünceyi Geliştirme Yolları',
    'Dil Bilgisi — Sözcük Türleri (İsim, Sıfat, Zamir)',
    'Dil Bilgisi — Sözcük Türleri (Zarf, Edat, Bağlaç, Ünlem)',
    'Dil Bilgisi — Fiil Çekimi (Kip ve Kişi)',
    'Dil Bilgisi — Yapı Bakımından Sözcük',
    'Dil Bilgisi — Cümle Öğeleri (Özne, Yüklem)',
    'Dil Bilgisi — Cümle Öğeleri (Nesne, Tümleçler)',
    'Dil Bilgisi — Cümle Türleri',
    'Dil Bilgisi — Fiilimsi (İsim, Sıfat, Zarf Fiil)',
    'Dil Bilgisi — Ses Bilgisi ve Ses Olayları',
    'Dil Bilgisi — Yazım Kuralları',
    'Dil Bilgisi — Noktalama İşaretleri',
    'Dil Bilgisi — Sözcük Türetme ve Yapım Ekleri',
  ],
  'Temel Matematik': [
    'Sayılar ve Sayı Kümeleri',
    'Doğal Sayılarda Bölünebilme Kuralları',
    'EBOB ve EKOK',
    'Tam Sayılar',
    'Rasyonel Sayılar',
    'Üslü Sayılar',
    'Köklü Sayılar',
    'Oran ve Orantı',
    'Yüzde ve Faiz Hesabı',
    'Kâr — Zarar Problemleri',
    'Çarpanlara Ayırma',
    'Denklemler (1. Derece)',
    'Eşitsizlikler',
    'Mutlak Değer',
    'Karışım Problemleri',
    'Hız — Yol — Zaman Problemleri',
    'Çalışma Problemleri',
    'Yaş ve Sayı Problemleri',
    'Mantık — Önerme ve Bağlaçlar',
    'Mantık — Koşullu Önermeler ve Niceleyiciler',
    'Küme Kavramı ve Gösterim',
    'Küme İşlemleri (Birleşim, Kesişim, Fark)',
    'Kartezyen Çarpım',
    'Fonksiyon Kavramı',
    'Fonksiyon Türleri (Birebir, Örten)',
    'Bileşke ve Ters Fonksiyon',
    'Temel Geometri — Açı ve Doğru',
    'Üçgenler (Açı ve Kenar Özellikleri)',
    'Özel Üçgenler (Dik, İkizkenar, Eşkenar)',
    'Çokgenler ve Dörtgenler',
    'Çember ve Daire',
    'Alan ve Çevre Hesapları',
    'İstatistik (Ortalama, Ortanca, Tepe Değer)',
    'Permütasyon',
    'Kombinasyon',
    'Binom ve Pascal Üçgeni',
    'Olasılık',
  ],
  'Tarih (TYT)': [
    'Tarih Bilimine Giriş — Kavramlar ve Yöntemler',
    'İlk Çağ Uygarlıkları — Mezopotamya',
    'İlk Çağ Uygarlıkları — Mısır ve Ege',
    'İslam Öncesi Türk Devletleri (Asya Hunları)',
    'Göktürkler ve Uygurlar',
    'İslamiyetin Doğuşu ve Yayılışı',
    'Türklerin İslamiyeti Kabulü',
    'İlk Türk-İslam Devletleri (Karahanlı, Gazneli)',
    'Büyük Selçuklu Devleti',
    'Anadolu Selçukluları ve Beylikler',
    'Osmanlı Devletinin Kuruluşu',
    'Osmanlı Yükselme Dönemi (Fatih, Yavuz)',
    'Kanuni Sultan Süleyman Dönemi',
    'Osmanlı Duraklama ve Gerileme',
    'Osmanlı Islahat Hareketleri (Tanzimat)',
    '1. Dünya Savaşı ve Osmanlının Çöküşü',
    'Kurtuluş Savaşı',
    'Atatürk İlke ve İnkılapları',
    'Türkiye Cumhuriyetinin Kuruluşu',
    '2. Dünya Savaşı ve Türkiye',
    'Soğuk Savaş Dönemi',
  ],
  'Coğrafya (TYT)': [
    'Coğrafyanın Konusu ve Önemi',
    'Harita Bilgisi',
    'Koordinatlar — Enlem ve Boylam',
    'Dünyanın Şekli ve Hareketleri',
    'İklim Elemanları — Sıcaklık',
    'İklim Elemanları — Yağış ve Rüzgar',
    'İklim Tipleri',
    'Türkiyenin İklimi',
    'Türkiyenin Yüzey Şekilleri',
    'İç Kuvvetler — Volkanizma ve Deprem',
    'Dış Kuvvetler — Akarsu, Rüzgar, Buzul',
    'Türkiyenin Nüfusu',
    'Türkiyenin Ekonomisi — Tarım',
    'Türkiyenin Ekonomisi — Sanayi ve Ticaret',
    'Çevre Sorunları',
    'Doğal Afetler',
    'Beşeri Coğrafya Kavramları',
  ],
  'Felsefe (TYT)': [
    'Felsefenin Tanımı ve Temel Kavramları',
    'Bilgi Felsefesi — Epistemoloji',
    'Varlık Felsefesi — Ontoloji',
    'Ahlak Felsefesi — Etik',
    'Siyaset Felsefesi',
    'Sanat Felsefesi — Estetik',
    'Din Felsefesi',
    'Mantığa Giriş — Kavram ve Önermeler',
    'Akıl Yürütme — Tümdengelim ve Tümevarım',
    'Klasik Mantık — Kategorik Önermeler',
    'Modern Mantık — Sembolik Mantık',
  ],
  'Din Kültürü (TYT)': [
    'İslamın Temel Kaynakları — Kuran',
    'İslamın Temel Kaynakları — Sünnet ve Hadis',
    'İslamda İnanç Esasları',
    'İslamda İbadetler',
    'Hz. Muhammedin Hayatı ve Kişiliği',
    'Ahlak ve Değerler',
    'İslam ve Diğer Dinler',
    'Laiklik ve Din Özgürlüğü',
    'Türk-İslam Kültürü ve Medeniyeti',
  ],
  'Fizik (TYT)': [
    'Fizik Bilimine Giriş ve Ölçme',
    'Madde ve Özellikleri',
    'Kuvvet ve Denge',
    'Newtonun Hareket Yasaları',
    'Sürtünme Kuvveti',
    'Enerji ve Güç',
    'İş-Enerji Teoremi',
    'Basit Makineler',
    'Basınç — Katı, Sıvı, Gaz',
    'Isı ve Sıcaklık',
    'Maddenin Halleri',
    'Elektrik Yükü ve Elektriksel Kuvvet',
    'Basit Elektrik Devreleri',
    'Manyetizma (Temel)',
    'Dalgalar (Temel)',
    'Optik — Yansıma ve Kırılma (Temel)',
  ],
  'Kimya (TYT)': [
    'Kimya Bilimine Giriş',
    'Atom Modelleri',
    'Periyodik Sistem',
    'Kimyasal Türler Arası Etkileşimler',
    'Maddenin Halleri ve Özellikleri',
    'Doga ve Kimya — Su, Toprak, Hava',
    'Kimyasal Tepkimeler',
    'Asit, Baz ve Tuz',
    'Kimya Her Yerde — Günlük Hayat Kimyası',
  ],
  'Biyoloji (TYT)': [
    'Yaşam Bilimi — Biyolojiye Giriş',
    'Hücre — Prokaryot ve Ökaryot',
    'Hücre Organelleri',
    'Hücre Zarı ve Madde Geçişi',
    'Canlıların Ortak Özellikleri',
    'Canlıların Çeşitliliği ve Sınıflandırılması',
    'Bitkiler Alemi (Çiçekli — Çiçeksiz)',
    'Hayvanlar Alemi',
    'Ekosistem Ekolojisi',
    'Madde Döngüleri — Karbon, Azot, Su',
    'Güncel Çevre Sorunları',
    'Kalıtım — Mendel Kanunları',
  ],
};

// ── MEB Müfredatı — AYT Tam Konu Listesi ─────────────────────────────────────
const AYT_TOPICS = {
  'AYT Matematik': [
    'Trigonometri — Temel Kavramlar',
    'Trigonometri — Sinüs, Kosinüs, Tanjant',
    'Trigonometrik Denklemler',
    'Trigonometrik Eşitsizlikler',
    'Analitik Geometri — Nokta',
    'Analitik Geometri — Doğru Denklemleri',
    'Analitik Geometri — İki Doğrunun Durumu',
    'Analitik Geometri — Çember',
    'Fonksiyonlarda İşlemler (İleri)',
    'Bileşke Fonksiyon',
    'Ters Fonksiyon',
    'Fonksiyonların Grafikleri',
    'Limit — Tanım ve Hesaplama',
    'Süreklilik',
    'Türev — Tanım ve Kurallar',
    'Türevin Geometrik Yorumu',
    'Türev Uygulamaları — Ekstremum ve Monotonluk',
    'Türev Uygulamaları — Fizik ve Optimizasyon',
    'Belirsiz İntegral',
    'Belirli İntegral',
    'İntegral Uygulamaları — Alan Hesabı',
    'Karmaşık Sayılar',
    'Üstel Fonksiyonlar',
    'Logaritma ve Özellikleri',
    'Üstel ve Logaritmik Denklemler',
    'Diziler — Genel Terim',
    'Aritmetik Dizi',
    'Geometrik Dizi',
    'Özel Sayı Dizileri',
    'Polinomlar — Bölme ve Çarpanlara Ayırma',
    'Polinom Denklemleri',
    'Permütasyon ve Kombinasyon (İleri)',
    'Binom Açılımı',
    'Olasılık (İleri)',
    'Vektörler',
    'Matris ve Determinant',
    'Lineer Denklem Sistemleri',
  ],
  'AYT Fizik': [
    'Kuvvet ve Denge (İleri)',
    'Tek Boyutlu Hareket — Kinematik',
    'İki Boyutlu Hareket — Atış Hareketi',
    'Dairesel Hareket',
    'Newtonun Yasaları — Dinamik',
    'Sürtünme ve Uygulamaları',
    'Bağlı Cisimler',
    'İş — Güç — Enerji (İleri)',
    'Momentum ve İmpuls',
    'Çarpışmalar',
    'Tork ve Dönme Hareketi',
    'Katı Cisimlerin Dengesi',
    'Ağırlık Merkezi',
    'Basit Harmonik Hareket — Yay-Kütle',
    'Basit Harmonik Hareket — Sarkaç',
    'Mekanik Dalgalar',
    'Ses Dalgaları',
    'Doppler Etkisi',
    'Isı ve Sıcaklık (İleri)',
    'Gazlarda Isı ve Termodinamik',
    'Termodinamik Kanunları',
    'Isı Makineleri',
    'Elektrik Alanı',
    'Elektriksel Potansiyel ve Sığaç',
    'Kondansatörler',
    'Elektrik Akımı ve Direnç',
    'Kirchhoff Kanunları',
    'RC Devreleri',
    'Manyetik Alan ve Kuvvet',
    'Biot-Savart Kanunu',
    'Elektromanyetik İndüksiyon — Faraday',
    'Lenz Kanunu',
    'Alternatif Akım',
    'Transformatörler',
    'Yansıma ve Düzlem Ayna',
    'Küresel Aynalar',
    'Kırılma — Snell Yasası',
    'İnce Mercekler',
    'Özel Görelilik',
    'Fotoelektrik Olay',
    'Bohr Atom Modeli',
    'Radyoaktivite',
    'Çekirdek Reaksiyonları (Fisyon, Füzyon)',
  ],
  'AYT Kimya': [
    'Atom Teorisi Tarihi',
    'Atom Modelleri — Bohr ve Dalton',
    'Kuantum Modeli (Temel)',
    'Periyodik Sistem ve Özellikleri',
    'İyonik Bağ',
    'Kovalent Bağ — Apolar ve Polar',
    'Metalik Bağ',
    'Zayıf Kuvvetler — Van der Waals, H-bağı',
    'Gaz Hali — İdeal Gaz Yasaları',
    'Gazlarda Karışımlar',
    'Sıvı Hali — Yüzey Gerilimi',
    'Katı Hali — Kristal Yapılar',
    'Mol Kavramı ve Hesaplamalar',
    'Kimyasal Formüller',
    'Kütlece Yüzde Bileşim',
    'Kimyasal Denklemler ve Denkleştirme',
    'Stokiyometri — Mol Hesapları',
    'Verim Hesabı',
    'Reaksiyon Türleri',
    'Termokimya — Entalpi ve Hess Kanunu',
    'Yanma Isısı',
    'Kimyasal Denge',
    'Le Chatelier İlkesi',
    'Kc ve Kp İfadeleri',
    'Arrhenius ve Brönsted-Lowry Teorileri',
    'Su ve pH Hesapları',
    'Kuvvetli ve Zayıf Asit-Baz Hesapları',
    'Tampon Çözeltiler',
    'Asit-Baz Titrasyonu',
    'Oksidasyon-İndirgeme Tepkimeleri',
    'Elektrokimyasal Piller',
    'Elektroliz',
    'Çözelti Derişimleri — Molarite ve Yüzde',
    'Koligatif Özellikler',
    'Organik Kimya — Hidrokarbonlar',
    'Alkanlar, Alkenler, Alkinler',
    'Aromatik Bileşikler — Benzen',
    'Alkoller ve Eterler',
    'Aldehit ve Ketonlar',
    'Karboksilik Asitler ve Esterler',
    'Aminler ve Amitler',
    'Organik Reaksiyonlar — Ekleme ve Yer Degistirme',
    'Polimerler',
    'Biyomoleküller — Karbonhidrat, Protein, Lipit',
  ],
  'AYT Biyoloji': [
    'Biyolojik Moleküller — Karbonhidratlar',
    'Biyolojik Moleküller — Proteinler',
    'Biyolojik Moleküller — Lipitler',
    'Biyolojik Moleküller — Nükleik Asitler',
    'Hücre Zarı ve Madde Geçişi (İleri)',
    'Hücre Organelleri (Ayrıntılı)',
    'Hücre Solunumu — Glikoliz',
    'Hücre Solunumu — Krebs ve ETS',
    'Fotosentez — Aydınlık Reaksiyonları',
    'Fotosentez — Calvin Döngüsü',
    'Hücre Bölünmesi — Mitoz',
    'Hücre Bölünmesi — Mayoz',
    'DNA Yapısı ve Replikasyonu',
    'RNA Çeşitleri',
    'Protein Sentezi — Transkripsiyon',
    'Protein Sentezi — Translasyon',
    'Mendel Genetigi — Tek Gen Çaprazlaması',
    'Mendel Genetigi — Dihybrid Çaprazlamalar',
    'Kan Grupları ve Rh Faktörü',
    'Bağlı Genler ve Crossing-Over',
    'Eseyе Bağlı Kalıtım — X Kromozomuna Bağlı',
    'Mutasyon ve Modifikasyon',
    'Kanser ve Hücre Döngüsü',
    'Sindirim Sistemi',
    'Boşaltım Sistemi — Böbrek',
    'Dolaşım Sistemi — Kalp ve Kan',
    'Bağışıklık Sistemi',
    'Solunum Sistemi',
    'Hormonal Düzenleme — Endokrin',
    'Sinir Sistemi — Nöron ve Sinaps',
    'Duyular — Göz ve Kulak',
    'Hareket Sistemi — Kemik ve Kas',
    'Üreme ve Embriyonik Gelisim',
    'Popülasyon Ekolojisi',
    'Topluluk Ekolojisi — Komünite',
    'Madde Döngüleri (İleri)',
    'Biyomlar',
    'İnsan ve Çevre',
    'Evrim Teorisinin Temelleri',
    'Doğal Seçilim',
    'Tür Kavramı ve Türlesme',
  ],
  'Türk Dili ve Edebiyatı': [
    'Türk Dili Tarihi ve Gelisimi',
    'Dilin İslevleri',
    'Ses Bilgisi — Fonetik',
    'Yapı Bilgisi — Morfem',
    'Sözcük Türleri (Ayrıntılı)',
    'Sözdizimi — Cümle Çözümlemesi',
    'Anlam Bilimi — Semantik',
    'Metin Türleri — Anlatı, Bilgi, Siir',
    'Türk Edebiyatının Dönemleri (Genel)',
    'Destan Dönemi ve İslam Öncesi Edebiyat',
    'İslami Dönem — Divan Edebiyatı',
    'Divan Edebiyatında Nazım Sekilleri (Gazel, Kaside)',
    'Halk Edebiyatı — Asık Edebiyatı',
    'Halk Edebiyatı — Tekke Edebiyatı',
    'Tanzimat Edebiyatı (1. Dönem)',
    'Tanzimat Edebiyatı (2. Dönem)',
    'Servetifünun Edebiyatı',
    'Fecr-i Ati Edebiyatı',
    'Milli Edebiyat Dönemi',
    'Cumhuriyet Dönemi Türk Edebiyatı',
    'Cumhuriyet Sonrası Siir Akımları',
    'Cumhuriyet Dönemi Roman ve Hikaye',
    'Siir Bilgisi — Nazım Biçimleri ve Türleri',
    'Siirde Anlam ve Yorum',
    'Roman ve Hikaye Analizi',
    'Tiyatro Türleri',
    'Deneme, Fıkra, Sohbet',
    'Biyografi, Otobiyografi, Anı',
    'Mektup ve Günlük',
    'Gezi Yazısı',
    'Söylev ve Makale',
  ],
  'Tarih-1 (AYT)': [
    'Tarih Öncesi Çağlar ve İlk Yerlesim',
    'Anadolu Uygarlıkları — Hitit, Frig, Lidya',
    'Eski Türkler — Orta Asya Türk Devletleri',
    'Asya Hunları ve Avrupa Hunları',
    'Göktürkler ve Uygurlar',
    'İslamiyetin Dogusu ve İslam Tarihi',
    'Emeviler ve Abbasiler',
    'Türklerin İslamiyeti Kabulü',
    'İlk Türk-İslam Devletleri — Karahanlı, Gazneli',
    'Büyük Selçuklu Devleti',
    'Anadolu Selçuklu Devleti',
    'Haçlı Seferleri',
    'Mogol İstilası ve İlhanlılar',
    'Türkiye Selçuklularının Yıkılısı',
    'Osmanlı Devletinin Kurulusu (1299—1453)',
    'Osmanlının Yükselme Dönemi — Fatih ve Yavuz',
    'Kanuni Sultan Süleyman Dönemi',
  ],
  'Coğrafya-1 (AYT)': [
    'Doga ve İnsan',
    'Dünyanın Sekli ve Hareketleri (İleri)',
    'Haritacılık ve Projeksiyon Sistemleri',
    'İklim Bilgisi — Atmosfer',
    'Yeryüzü Sekillerinin Olusumu',
    'Türkiyenin Cografi Konumu',
    'Türkiyede İklim ve Bitki Örtüsü',
    'Türkiyenin Yüzey Sekilleri (Ayrıntılı)',
    'Türkiyenin Hidrografyası — Akarsular ve Göller',
    'Türkiyede Nüfus — Yapı ve Dağılıs',
    'Türkiyede Göç',
    'Türkiyede Yerlesmе Özellikleri',
  ],
  'Tarih-2 (AYT)': [
    'Osmanlı Duraklama ve Gerileme Dönemi',
    'Osmanlıda Islahat Hareketleri (17-18. yy)',
    'Sanayi Devrimi ve Dünyaya Etkileri',
    'Fransız İhtilali ve Etkileri',
    'Osmanlıda Tanzimat ve Islahat Fermanları',
    'Osmanlıda Mesrutiyet Dönemleri',
    'Milliyetçilik Akımları ve Osmanlı',
    'Balkan Savaşları',
    '1. Dünya Savaşı — Sebepler ve Sonuçlar',
    '1. Dünya Savaşında Osmanlı Cepheleri',
    'Mondros Mütarekesi ve İsGaller',
    'Kuvay-i Milliye ve Direnis',
    'Kurtuluş Savası Muharebeleri',
    'Lozan Antlasması',
    'Türkiye Cumhuriyetinin İlanı',
    'Atatürk İnkılapları — Siyasi',
    'Atatürk İnkılapları — Hukuk ve Egitim',
    'Atatürk İnkılapları — Sosyal ve Ekonomik',
    '2. Dünya Savası — Sebepler ve Sonuçlar',
    'Soguk Savas ve Türkiye',
    'Yakın Dönem Türk Tarihi (1950—2000)',
  ],
  'Coğrafya-2 (AYT)': [
    'Türkiyede Tarımsal Faaliyetler',
    'Türkiyede Hayvancılık',
    'Türkiyede Madencilik',
    'Türkiyede Enerji Kaynakları',
    'Türkiyede Sanayi',
    'Türkiyede Ulasım',
    'Türkiyede Turizm',
    'Türkiyede Dıs Ticaret',
    'Dünyanın Genel Cografi Özellikleri',
    'Kıtalar ve Okyanuslar',
    'Dünyada Nüfus Sorunları',
    'Küresel İklim Degisikligi',
    'Sürdürülebilir Kalkınma',
    'Türkiye Bölgeleri — Genel Tekrar',
  ],
  'Felsefe Grubu (AYT)': [
    'Psikoloji Bilimine Giris',
    'Psikolojinin Tarihsel Gelisimi',
    'Davranısçılık',
    'Psikanaliz — Freud',
    'Bilissel Psikoloji',
    'Algı ve Dikkat',
    'Öğrenme Teorileri',
    'Bellek',
    'Duygu ve Motivasyon',
    'Kisilik Kuramları',
    'Psikolojik Bozukluklar (Genel)',
    'Sosyoloji Bilimine Giris',
    'Toplumsal Yapı ve Kurumlar',
    'Toplumsal Degisme',
    'Kültür ve Medeniyet',
    'Sosyal Gruplar — Aile, Egitim, Din',
    'Toplumsal Sapma',
    'Klasik Mantık — Kategorik Çıkarımlar',
    'Önermeler Mantıgı',
    'Sembolik Mantık',
    'Safsata Türleri',
    'Antik Yunan Felsefesi — Sokrates, Platon, Aristo',
    'Orta Çag Felsefesi',
    'Modern Felsefe — Descartes, Hume, Kant',
    'Çagdas Felsefe Akımları',
  ],
  'Din Kültürü (AYT)': [
    'Kuranın Yorumu — Tefsir',
    'Hadis Usulü',
    'Fıkıh ve İslam Hukuku',
    'Kelam — İnanç Problemleri',
    'İslam Mezhepleri',
    'Tasavvuf',
    'İslamda Ahlak Anlayısı',
    'Din ve Laiklik',
    'Karsılastırmalı Dinler — Yahudilik, Hristiyanlık',
    'Türk-İslam Düsüncesinin Temsilcileri',
    'Günümüz Dini Sorunları',
  ],
  'İngilizce (AYT)': [
    'Vocabulary — Kelime Bilgisi',
    'Grammar — Parts of Speech',
    'Grammar — Simple Tenses',
    'Grammar — Continuous Tenses',
    'Grammar — Perfect Tenses',
    'Grammar — Modal Verbs',
    'Grammar — Passive Voice',
    'Grammar — Conditional Sentences (0,1,2,3)',
    'Grammar — Reported Speech',
    'Grammar — Relative Clauses',
    'Grammar — Gerunds and Infinitives',
    'Grammar — Conjunctions and Transitions',
    'Grammar — Prepositions',
    'Grammar — Articles and Determiners',
    'Reading — Main Idea and Topic Sentence',
    'Reading — Detail Questions',
    'Reading — Inference',
    'Reading — Vocabulary in Context',
    'Reading — Paragraph Completion',
    'Reading — Sentence Ordering',
    'Reading — Irrelevant Sentence',
    'Reading — Dialogue Completion',
    'Translation — Türkçeye Çeviri',
    'Translation — İngilizceye Çeviri',
  ],
};

// ── State ───────────────────────────────────
let S = {
  plans: [],
  sessions: [],
  nets: [],
  questions: [],
  topics: {},      // { 'DersAdi': [{name, status},...] }
  dailyGoal: 6,
  theme: 'dark',
  activeSection: 'plan',
  planScope: 'gunluk',
  activeTopicExam: 'TYT',
  activeTopicDers: 'Türkçe',
  activeNetChart: 'TYT',

  pomodoro: {
    phase: 'work',   // 'work'|'short'|'long'
    secs: 25*60,
    isRunning: false,
    timerId: null,
    streak: 0,
    workMins: 25, shortMins: 5, longMins: 15,
    ders: 'Matematik',
  },
  stopwatch: {
    secs: 0,
    isRunning: false,
    timerId: null,
    ders: 'Matematik',
  },
};

// ── Persistence ─────────────────────────────
function load() {
  const keys = ['plans','sessions','nets','questions','topics','dailyGoal','theme'];
  keys.forEach(k => {
    try {
      const v = localStorage.getItem('ykso2_'+k);
      if (v !== null) S[k] = JSON.parse(v);
    } catch(e) {}
  });
  // Init TYT topics if empty
  Object.keys(TYT_TOPICS).forEach(ders => {
    if (!S.topics[ders]) {
      S.topics[ders] = TYT_TOPICS[ders].map(t => ({name:t, status:'baslama'}));
    }
  });
  // Init AYT topics if empty
  Object.keys(AYT_TOPICS).forEach(ders => {
    if (!S.topics[ders]) {
      S.topics[ders] = AYT_TOPICS[ders].map(t => ({name:t, status:'baslama'}));
    }
  });
}
function save(key) {
  const keys = key ? [key] : ['plans','sessions','nets','questions','topics','dailyGoal','theme'];
  keys.forEach(k => {
    try { localStorage.setItem('ykso2_'+k, JSON.stringify(S[k])); } catch(e) {}
  });
}

// ── Audio ────────────────────────────────────
let _actx = null;
function tone(freq, dur, type='sine', vol=0.07) {
  try {
    if (!_actx) _actx = new (window.AudioContext||window.webkitAudioContext)();
    if (_actx.state==='suspended') _actx.resume();
    const o=_actx.createOscillator(), g=_actx.createGain();
    o.type=type; o.frequency.value=freq;
    g.gain.setValueAtTime(vol, _actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, _actx.currentTime+dur);
    o.connect(g); g.connect(_actx.destination);
    o.start(); o.stop(_actx.currentTime+dur);
  } catch(e){}
}
function chimeWork() { tone(880,.4,'triangle'); setTimeout(()=>tone(1100,.6,'triangle'),180); }
function chimeBreak(){ [523.25,659.25,783.99].forEach((f,i)=>setTimeout(()=>tone(f,.2,'sine'),i*110)); }
function chimeSave() { tone(987,.1,'sine'); setTimeout(()=>tone(1318,.2,'sine'),90); }
function chimeClick(){ tone(700,.05,'sine',.04); }

// ── Helpers ──────────────────────────────────
function today() { return new Date().toISOString().split('T')[0]; }
function todayStr() { return new Date().toDateString(); }
function fmtDur(s) {
  const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
  if (h>0) return `${h}s ${m}dk`;
  if (m>0) return `${m}dk ${sec}sn`;
  return `${sec}sn`;
}
function fmtHMS(s) {
  return [Math.floor(s/3600),Math.floor((s%3600)/60),s%60]
    .map(n=>String(n).padStart(2,'0')).join(':');
}
function fmtMins(s){ return Math.round(s/60)+' dk'; }
function weekBounds() {
  const d=new Date(), day=d.getDay();
  const diff=d.getDate()-day+(day===0?-6:1);
  const mon=new Date(d.getFullYear(), d.getMonth(), diff);
  const sun=new Date(d.getFullYear(), d.getMonth(), diff+6);
  return {
    mon: mon.toISOString().split('T')[0],
    sun: sun.toISOString().split('T')[0],
  };
}
function badge(ders) {
  return `<span class="badge ${SUBJECT_BADGE[ders]||'badge-mat'}">${ders}</span>`;
}
function getActiveSecs() {
  let x=0;
  if (S.stopwatch.isRunning) x+=S.stopwatch.secs;
  if (S.pomodoro.isRunning && S.pomodoro.phase==='work')
    x+=(S.pomodoro.workMins*60)-S.pomodoro.secs;
  return x;
}
function todaySessions() {
  return S.sessions.filter(s=>new Date(s.ts).toDateString()===todayStr());
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  load();
  applyTheme();
  setInputDefaults();
  setupPWA();
  lucide.createIcons();

  // Listeners
  document.getElementById('theme-btn').addEventListener('click', toggleTheme);
  document.getElementById('quote-btn').addEventListener('click', nextQuote);
  document.getElementById('goal-hrs').addEventListener('input', e=>{
    S.dailyGoal=Math.max(1,parseInt(e.target.value)||6);
    save('dailyGoal'); updateSummary();
  });

  // Pomodoro
  document.getElementById('pom-play-btn').addEventListener('click', pomToggle);
  document.getElementById('pom-reset-btn').addEventListener('click', pomReset);
  document.getElementById('pom-skip-btn').addEventListener('click', pomSkip);
  ['pom-work','pom-short','pom-long'].forEach(id=>{
    document.getElementById(id).addEventListener('change', pomSettingsUpdate);
  });
  document.getElementById('pom-ders').addEventListener('change', e=>{
    S.pomodoro.ders=e.target.value;
  });

  // Stopwatch
  document.getElementById('sw-play-btn').addEventListener('click', swToggle);
  document.getElementById('sw-reset-btn').addEventListener('click', swReset);
  document.getElementById('sw-save-btn').addEventListener('click', swSave);
  document.getElementById('sw-ders').addEventListener('change', e=>{
    S.stopwatch.ders=e.target.value;
  });

  // Countdown
  startCountdown();
  nextQuote();

  // Initial renders
  renderPlans();
  renderSessions();
  updateSummary();
  renderNetTable();
  renderQuestions();
  renderTopicNav();
  renderTopics();
  pomRender();
  pomRenderStars();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  }

  // Save on unload
  window.addEventListener('beforeunload', saveOnUnload);
});

function setInputDefaults() {
  document.getElementById('p-tarih').value = today();
  document.getElementById('net-date').value = today();
  document.getElementById('goal-hrs').value = S.dailyGoal;
}

// ── Theme ────────────────────────────────────
function applyTheme() {
  document.body.className = S.theme==='dark' ? 'dark-theme' : 'light-theme';
}
function toggleTheme() {
  S.theme = S.theme==='dark' ? 'light' : 'dark';
  applyTheme(); save('theme'); chimeClick();
  // Redraw charts on theme change
  setTimeout(()=>{ initNetChart(); initWeeklyChart(); }, 100);
}

// ── Quote ─────────────────────────────────────
let _qIdx = 0;
function nextQuote() {
  const el=document.getElementById('quote-text');
  el.style.opacity=0;
  setTimeout(()=>{
    _qIdx=(_qIdx+1)%QUOTES.length;
    el.textContent=QUOTES[_qIdx];
    el.style.opacity=1;
  }, 200);
  chimeClick();
}

// ── Countdown ────────────────────────────────
function startCountdown() {
  const tick = () => {
    const diff = YKS_DATE - Date.now();
    if (diff<=0) {
      document.getElementById('cd-day').textContent='00';
      return;
    }
    const d=Math.floor(diff/86400000);
    const h=Math.floor((diff%86400000)/3600000);
    const m=Math.floor((diff%3600000)/60000);
    const s=Math.floor((diff%60000)/1000);
    document.getElementById('cd-day').textContent=String(d).padStart(2,'0');
    document.getElementById('cd-hour').textContent=String(h).padStart(2,'0');
    document.getElementById('cd-min').textContent=String(m).padStart(2,'0');
    document.getElementById('cd-sec').textContent=String(s).padStart(2,'0');
  };
  tick(); setInterval(tick, 1000);
}

// ── PWA Install ──────────────────────────────
let _deferredInstall = null;
function setupPWA() {
  window.addEventListener('beforeinstallprompt', e=>{
    e.preventDefault();
    _deferredInstall=e;
    document.getElementById('install-btn').classList.add('show');
  });
  document.getElementById('install-btn').addEventListener('click', async ()=>{
    if (!_deferredInstall) return;
    _deferredInstall.prompt();
    const {outcome} = await _deferredInstall.userChoice;
    if (outcome==='accepted') {
      document.getElementById('install-btn').classList.remove('show');
      _deferredInstall=null;
    }
  });
  window.addEventListener('appinstalled', ()=>{
    document.getElementById('install-btn').classList.remove('show');
  });
}

// ── Navigation ───────────────────────────────
function goTo(sec, btn) {
  S.activeSection=sec;
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('active'));
  document.getElementById('sec-'+sec).classList.add('active');

  document.querySelectorAll('.side-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.mob-btn').forEach(b=>b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Sync both navs
  document.querySelectorAll(`.side-btn[onclick*="${sec}"]`).forEach(b=>b.classList.add('active'));
  document.querySelectorAll(`.mob-btn[data-sec="${sec}"]`).forEach(b=>b.classList.add('active'));

  chimeClick();
  if (sec==='summary') { updateSummary(); initWeeklyChart(); }
  if (sec==='nets') initNetChart();
  lucide.createIcons();
}

// ══════════════════════════════════════════════
// PLAN
// ══════════════════════════════════════════════
function setPlanScope(scope, btn) {
  S.planScope=scope;
  document.querySelectorAll('#sec-plan .filter-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderPlans();
  chimeClick();
}

function addPlan(e) {
  e.preventDefault();
  const konu=document.getElementById('p-konu').value.trim();
  if (!konu) return;
  S.plans.push({
    id: Date.now(),
    ders: document.getElementById('p-ders').value,
    sure: parseInt(document.getElementById('p-sure').value)||45,
    tarih: document.getElementById('p-tarih').value||today(),
    konu, done:false, scope:S.planScope,
  });
  save('plans');
  document.getElementById('p-konu').value='';
  renderPlans(); updateSummary();
  tone(1000,.1,'sine');
}

function deletePlan(id) {
  S.plans=S.plans.filter(p=>p.id!==id);
  save('plans'); renderPlans(); updateSummary();
  tone(400,.15);
}

function togglePlan(id) {
  const p=S.plans.find(p=>p.id===id);
  if (p) { p.done=!p.done; save('plans'); renderPlans(); updateSummary(); }
  if (p?.done) { tone(1200,.2); maybeConfetti(); }
  else tone(600,.1);
}

function renderPlans() {
  const el=document.getElementById('plan-list');
  const {mon,sun}=weekBounds();
  const mo=today().slice(0,7);

  let list=S.plans.filter(p=>{
    if (p.scope!==S.planScope) return false;
    if (S.planScope==='gunluk') return p.tarih===today();
    if (S.planScope==='haftalik') return p.tarih>=mon && p.tarih<=sun;
    return p.tarih?.startsWith(mo);
  });

  const done=list.filter(p=>p.done).length;
  document.getElementById('plan-badge').textContent=`${done}/${list.length}`;

  if (!list.length) {
    el.innerHTML=`<div class="empty"><i data-lucide="clipboard-list"></i><p>Plan yok. Sol taraftan ekle!</p></div>`;
    lucide.createIcons(); return;
  }

  el.innerHTML=list.map(p=>`
    <div class="plan-card ${p.done?'done':''}">
      <input type="checkbox" class="plan-check" ${p.done?'checked':''} onchange="togglePlan(${p.id})">
      <div class="plan-body">
        <div class="plan-topic">${p.konu}</div>
        <div class="plan-meta">
          ${badge(p.ders)}
          <span>${p.sure}dk</span>
          <span>${p.tarih}</span>
        </div>
      </div>
      <button class="plan-del" onclick="deletePlan(${p.id})"><i data-lucide="trash-2"></i></button>
    </div>
  `).join('');
  lucide.createIcons();
}

// ══════════════════════════════════════════════
// POMODORO
// ══════════════════════════════════════════════
function pomPhaseTotal() {
  if (S.pomodoro.phase==='work') return S.pomodoro.workMins*60;
  if (S.pomodoro.phase==='short') return S.pomodoro.shortMins*60;
  return S.pomodoro.longMins*60;
}

function pomSettingsUpdate() {
  S.pomodoro.workMins=Math.max(1,parseInt(document.getElementById('pom-work').value)||25);
  S.pomodoro.shortMins=Math.max(1,parseInt(document.getElementById('pom-short').value)||5);
  S.pomodoro.longMins=Math.max(1,parseInt(document.getElementById('pom-long').value)||15);
  if (!S.pomodoro.isRunning) { S.pomodoro.secs=pomPhaseTotal(); pomRender(); }
}

function pomToggle() {
  if (S.pomodoro.isRunning) {
    // Pause
    clearInterval(S.pomodoro.timerId); S.pomodoro.isRunning=false;
    document.getElementById('pom-play-txt').textContent='Devam';
    document.getElementById('pom-play-ico').setAttribute('data-lucide','play');
    tone(500,.1);
  } else {
    // Start — stop stopwatch if running
    if (S.stopwatch.isRunning) swToggle();
    S.pomodoro.ders=document.getElementById('pom-ders').value;
    S.pomodoro.isRunning=true;
    document.getElementById('pom-play-txt').textContent='Durdur';
    document.getElementById('pom-play-ico').setAttribute('data-lucide','pause');
    tone(880,.15);
    S.pomodoro.timerId=setInterval(pomTick, 1000);
  }
  lucide.createIcons();
}

function pomTick() {
  S.pomodoro.secs--;
  pomRender();
  if (S.pomodoro.phase==='work') { updateSummary(); updateSwTotal(); }
  if (S.pomodoro.secs<=0) pomPhaseEnd();
}

function pomPhaseEnd() {
  clearInterval(S.pomodoro.timerId); S.pomodoro.isRunning=false;
  if (S.pomodoro.phase==='work') {
    chimeWork();
    S.pomodoro.streak++;
    S.sessions.push({id:Date.now(),ts:Date.now(),ders:S.pomodoro.ders,dur:S.pomodoro.workMins*60,type:'pomodoro'});
    save('sessions'); renderSessions(); updateSummary(); maybeConfetti();
    S.pomodoro.phase = (S.pomodoro.streak%4===0) ? 'long' : 'short';
  } else {
    chimeBreak();
    if (S.pomodoro.phase==='long') S.pomodoro.streak=0;
    S.pomodoro.phase='work';
  }
  S.pomodoro.secs=pomPhaseTotal();
  document.getElementById('pom-play-txt').textContent='Başlat';
  document.getElementById('pom-play-ico').setAttribute('data-lucide','play');
  pomRender(); pomRenderStars();
  lucide.createIcons();
}

function pomReset() {
  // Save partial work session
  if (S.pomodoro.phase==='work') {
    const elapsed=(S.pomodoro.workMins*60)-S.pomodoro.secs;
    if (elapsed>=10 && S.pomodoro.isRunning) savePartialSession('pomodoro', S.pomodoro.ders, elapsed);
  }
  clearInterval(S.pomodoro.timerId);
  S.pomodoro.isRunning=false; S.pomodoro.phase='work';
  S.pomodoro.secs=S.pomodoro.workMins*60;
  document.getElementById('pom-play-txt').textContent='Başlat';
  document.getElementById('pom-play-ico').setAttribute('data-lucide','play');
  pomRender(); updateSummary(); tone(440,.1);
  lucide.createIcons();
}

function pomSkip() {
  // Save partial
  if (S.pomodoro.phase==='work') {
    const elapsed=(S.pomodoro.workMins*60)-S.pomodoro.secs;
    if (elapsed>=10) savePartialSession('pomodoro', S.pomodoro.ders, elapsed);
    S.pomodoro.streak++;
    S.pomodoro.phase=(S.pomodoro.streak%4===0)?'long':'short';
  } else {
    if (S.pomodoro.phase==='long') S.pomodoro.streak=0;
    S.pomodoro.phase='work';
  }
  clearInterval(S.pomodoro.timerId); S.pomodoro.isRunning=false;
  S.pomodoro.secs=pomPhaseTotal();
  document.getElementById('pom-play-txt').textContent='Başlat';
  document.getElementById('pom-play-ico').setAttribute('data-lucide','play');
  pomRender(); pomRenderStars(); updateSummary(); tone(700,.1);
  lucide.createIcons();
}

function pomRender() {
  const total=pomPhaseTotal();
  const frac=S.pomodoro.secs/total;
  const circ=552.92;
  const circle=document.getElementById('pom-circle');
  circle.style.strokeDashoffset = circ*(1-frac);

  const m=Math.floor(S.pomodoro.secs/60), s=S.pomodoro.secs%60;
  document.getElementById('pom-digits').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

  const labels={work:'Odaklanma',short:'Kısa Mola',long:'Uzun Mola'};
  document.getElementById('pom-phase-lbl').textContent=labels[S.pomodoro.phase];

  const ring=document.getElementById('pom-ring');
  ring.classList.remove('phase-work','phase-short','phase-long');
  ring.classList.add('phase-'+S.pomodoro.phase);
}

function pomRenderStars() {
  const container=document.getElementById('pom-stars');
  const cur=S.pomodoro.streak%4||0;
  container.innerHTML=[...Array(4)].map((_,i)=>`
    <svg class="star ${i<cur?'lit':''}" viewBox="0 0 24 24" fill="${i<cur?'currentColor':'none'}" stroke="currentColor" stroke-width="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `).join('');
  document.getElementById('pom-count').textContent=`${S.pomodoro.streak} Pomodoro`;
}

// ══════════════════════════════════════════════
// STOPWATCH
// ══════════════════════════════════════════════
function swToggle() {
  if (S.stopwatch.isRunning) {
    clearInterval(S.stopwatch.timerId); S.stopwatch.isRunning=false;
    document.getElementById('sw-play-txt').textContent='Devam';
    document.getElementById('sw-play-ico').setAttribute('data-lucide','play');
    document.getElementById('sw-status').classList.remove('on');
    document.getElementById('sw-status-txt').textContent='Beklemede';
    tone(500,.1);
  } else {
    if (S.pomodoro.isRunning) pomToggle();
    S.stopwatch.ders=document.getElementById('sw-ders').value;
    S.stopwatch.isRunning=true;
    document.getElementById('sw-play-txt').textContent='Durdur';
    document.getElementById('sw-play-ico').setAttribute('data-lucide','pause');
    const status=document.getElementById('sw-status');
    status.classList.add('on');
    document.getElementById('sw-status-txt').textContent='Çalışıyor: '+S.stopwatch.ders;
    tone(880,.15);
    S.stopwatch.timerId=setInterval(()=>{
      S.stopwatch.secs++;
      document.getElementById('sw-digits').textContent=fmtHMS(S.stopwatch.secs);
      updateSwTotal();
      updateSummary();
    },1000);
  }
  lucide.createIcons();
}

function swReset() {
  clearInterval(S.stopwatch.timerId);
  S.stopwatch.isRunning=false; S.stopwatch.secs=0;
  document.getElementById('sw-digits').textContent='00:00:00';
  document.getElementById('sw-play-txt').textContent='Başlat';
  document.getElementById('sw-play-ico').setAttribute('data-lucide','play');
  document.getElementById('sw-status').classList.remove('on');
  document.getElementById('sw-status-txt').textContent='Beklemede';
  tone(400,.15); lucide.createIcons();
}

function swSave() {
  if (S.stopwatch.secs<10) { alert('En az 10 saniye çalışmalısınız.'); return; }
  S.sessions.push({id:Date.now(),ts:Date.now(),ders:S.stopwatch.ders,dur:S.stopwatch.secs,type:'manuel'});
  save('sessions'); chimeSave();
  swReset(); renderSessions(); updateSummary();
}

function clearSessions() {
  if (!confirm('Tüm oturumları silmek istiyor musunuz?')) return;
  S.sessions=[]; save('sessions'); renderSessions(); updateSummary(); tone(300,.3);
}

function updateSwTotal() {
  const saved=todaySessions().reduce((a,s)=>a+s.dur,0);
  document.getElementById('sw-today').textContent=fmtDur(saved+getActiveSecs());
}

function renderSessions() {
  const el=document.getElementById('sess-list');
  const list=todaySessions().slice().reverse();
  updateSwTotal();
  if (!list.length) {
    el.innerHTML=`<div class="empty"><i data-lucide="hourglass"></i><p>Bugün henüz oturum yok.</p></div>`;
    lucide.createIcons(); return;
  }
  el.innerHTML=list.map(s=>{
    const t=new Date(s.ts);
    const tStr=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}`;
    const tagC=s.type==='pomodoro'?'tag-pom':'tag-man';
    const tagL=s.type==='pomodoro'?'Pomodoro':'Manuel';
    return `<div class="sess-item">
      <div class="sess-left">
        ${badge(s.ders)}
        <span class="sess-tag ${tagC}">${tagL}</span>
      </div>
      <span class="sess-dur">${fmtDur(s.dur)} <span class="sess-time">${tStr}</span></span>
    </div>`;
  }).join('');
  lucide.createIcons();
}

function savePartialSession(type, ders, secs) {
  S.sessions.push({id:Date.now(),ts:Date.now(),ders,dur:secs,type});
  save('sessions'); renderSessions();
}

// ── Save on unload ─────────────────────────────
function saveOnUnload() {
  let changed=false;
  if (S.stopwatch.isRunning && S.stopwatch.secs>=10) {
    S.sessions.push({id:Date.now(),ts:Date.now(),ders:S.stopwatch.ders,dur:S.stopwatch.secs,type:'manuel'});
    changed=true;
  }
  if (S.pomodoro.isRunning && S.pomodoro.phase==='work') {
    const el=(S.pomodoro.workMins*60)-S.pomodoro.secs;
    if (el>=10) { S.sessions.push({id:Date.now(),ts:Date.now(),ders:S.pomodoro.ders,dur:el,type:'pomodoro'}); changed=true; }
  }
  if (changed) save('sessions');
}

// ══════════════════════════════════════════════
// NET TRACKER
// ══════════════════════════════════════════════
function toggleNetForm() {
  const isTYT=document.getElementById('nt-tyt').checked;
  document.getElementById('tyt-inputs').classList.toggle('hidden',!isTYT);
  document.getElementById('ayt-inputs').classList.toggle('hidden',isTYT);
}

function addNet(e) {
  e.preventDefault();
  const type=document.querySelector('input[name="net-type"]:checked').value;
  const name=document.getElementById('net-name').value.trim();
  const date=document.getElementById('net-date').value;
  let scores={}, total=0;
  if (type==='TYT') {
    scores={tr:+document.getElementById('nt-tr').value||0, mat:+document.getElementById('nt-mat').value||0, sos:+document.getElementById('nt-sos').value||0, fen:+document.getElementById('nt-fen').value||0};
    total=scores.tr+scores.mat+scores.sos+scores.fen;
  } else {
    scores={mat:+document.getElementById('na-mat').value||0, fen:+document.getElementById('na-fen').value||0, edes:+document.getElementById('na-edes').value||0, sos2:+document.getElementById('na-sos2').value||0};
    total=scores.mat+scores.fen+scores.edes+scores.sos2;
  }
  S.nets.push({id:Date.now(),ts:Date.now(),type,name,date,scores,total});
  save('nets'); renderNetTable(); initNetChart();
  document.getElementById('net-name').value='';
  tone(1100,.15);
}

function deleteNet(id) {
  S.nets=S.nets.filter(n=>n.id!==id);
  save('nets'); renderNetTable(); initNetChart(); tone(400,.1);
}

function renderNetTable() {
  const tbody=document.getElementById('net-tbody');
  const empty=document.getElementById('net-empty');
  const sorted=S.nets.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
  tbody.innerHTML='';
  if (!sorted.length) { empty.classList.remove('hidden'); lucide.createIcons(); return; }
  empty.classList.add('hidden');
  sorted.forEach(n=>{
    const tr=document.createElement('tr');
    const typeBadge=n.type==='TYT'?'badge-mat':'badge-fiz';
    tr.innerHTML=`<td>${n.date}</td><td><span class="badge ${typeBadge}">${n.type}</span></td><td><strong>${n.name}</strong></td><td class="net-val">${n.total}</td><td><button class="plan-del" onclick="deleteNet(${n.id})"><i data-lucide="trash-2"></i></button></td>`;
    tbody.appendChild(tr);
  });
  lucide.createIcons();
}

function setNetChart(type) {
  S.activeNetChart=type;
  document.getElementById('nc-tyt').classList.toggle('active',type==='TYT');
  document.getElementById('nc-ayt').classList.toggle('active',type==='AYT');
  initNetChart(); chimeClick();
}

let _netChart=null;
function initNetChart() {
  const ctx=document.getElementById('net-chart').getContext('2d');
  if (_netChart) { _netChart.destroy(); _netChart=null; }
  const data=S.nets.filter(n=>n.type===S.activeNetChart).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const dark=document.body.classList.contains('dark-theme');
  const gridC=dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.06)';
  const textC=dark?'#a0a0c0':'#4a4a6a';
  const primary=S.activeNetChart==='TYT'?'#A29BFE':'#00D2FF';
  _netChart=new Chart(ctx,{
    type:'line',
    data:{
      labels:data.map(n=>n.name),
      datasets:[{
        label:'Toplam Net', data:data.map(n=>n.total),
        borderColor:primary, borderWidth:3,
        pointBackgroundColor:primary,
        pointBorderColor:dark?'#050510':'#fff',
        pointBorderWidth:2, pointRadius:5, pointHoverRadius:7,
        tension:0.35, fill:true,
        backgroundColor:(ctx2)=>{
          const {ctx:c,chartArea:a}=ctx2.chart;
          if (!a) return 'transparent';
          const g=c.createLinearGradient(0,a.top,0,a.bottom);
          g.addColorStop(0,primary+'33'); g.addColorStop(1,primary+'00');
          return g;
        }
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}, tooltip:{
        backgroundColor:dark?'#0a0a1a':'#fff',
        titleColor:dark?'#f0f0ff':'#1a1a2e',
        bodyColor:dark?'#f0f0ff':'#1a1a2e',
        borderColor:'rgba(255,255,255,0.06)',borderWidth:1,
        bodyFont:{family:'Outfit',weight:'bold'},
      }},
      scales:{
        y:{grid:{color:gridC},ticks:{color:textC,font:{family:'Outfit'}},min:0,max:S.activeNetChart==='TYT'?120:80},
        x:{grid:{display:false},ticks:{color:textC,font:{family:'Outfit',size:10}}},
      }
    }
  });
}

// ══════════════════════════════════════════════
// QUESTION COUNTER
// ══════════════════════════════════════════════
function addQuestion(e) {
  e.preventDefault();
  const ders=document.getElementById('q-ders').value;
  const d=parseInt(document.getElementById('q-dogru').value)||0;
  const y=parseInt(document.getElementById('q-yanlis').value)||0;
  const hedef=parseInt(document.getElementById('q-hedef').value)||50;
  if (d+y===0) { alert('En az 1 soru giriniz.'); return; }
  S.questions.push({id:Date.now(),ts:Date.now(),ders,dogru:d,yanlis:y,hedef});
  save('questions'); renderQuestions(); updateSummary();
  document.getElementById('q-dogru').value=0;
  document.getElementById('q-yanlis').value=0;
  tone(1000,.1);
}

function deleteQuestion(id) {
  S.questions=S.questions.filter(q=>q.id!==id);
  save('questions'); renderQuestions(); updateSummary(); tone(400,.1);
}

function renderQuestions() {
  const todayQ=S.questions.filter(q=>new Date(q.ts).toDateString()===todayStr());
  const totalD=todayQ.reduce((a,q)=>a+q.dogru,0);
  const totalY=todayQ.reduce((a,q)=>a+q.yanlis,0);
  const total=totalD+totalY;
  const latestHedef=todayQ.length?todayQ[todayQ.length-1].hedef:50;

  document.getElementById('q-total').textContent=total;
  document.getElementById('q-correct').textContent=totalD;
  document.getElementById('q-wrong').textContent=totalY;

  const pct=Math.min(100,Math.round((total/latestHedef)*100));
  document.getElementById('q-prog-txt').textContent=`${total} / ${latestHedef}`;
  document.getElementById('q-prog-fill').style.width=pct+'%';

  const el=document.getElementById('q-list');
  if (!todayQ.length) {
    el.innerHTML=`<div class="empty"><i data-lucide="hash"></i><p>Bugün soru kaydı yok.</p></div>`;
    lucide.createIcons(); return;
  }
  el.innerHTML=todayQ.slice().reverse().map(q=>`
    <div class="q-history-item">
      <div style="display:flex;align-items:center;gap:8px">
        ${badge(q.ders)}
        <span style="font-size:0.82rem;color:var(--aurora-green)">+${q.dogru}</span>
        <span style="font-size:0.82rem;color:var(--aurora-pink)">-${q.yanlis}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-family:var(--font-mono);font-weight:700">${q.dogru+q.yanlis} soru</span>
        <button class="plan-del" onclick="deleteQuestion(${q.id})"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// ══════════════════════════════════════════════
// TOPIC TRACKER
// ══════════════════════════════════════════════
function setTopicExam(exam) {
  S.activeTopicExam=exam;
  // Set first ders of that exam
  const map = exam==='TYT' ? TYT_TOPICS : AYT_TOPICS;
  S.activeTopicDers = Object.keys(map)[0];
  renderTopicNav();
  renderTopics();
  chimeClick();
}

function setTopicDers(ders, btn) {
  S.activeTopicDers=ders;
  document.querySelectorAll('.topic-ders-pill').forEach(b=>b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (!S.topics[ders]) S.topics[ders]=[];
  renderTopics(); chimeClick();
}

function renderTopicNav() {
  // Update exam toggle buttons
  document.querySelectorAll('.topic-exam-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.exam===S.activeTopicExam);
  });
  // Render ders pills for current exam
  const map = S.activeTopicExam==='TYT' ? TYT_TOPICS : AYT_TOPICS;
  const navEl = document.getElementById('topic-ders-nav');
  navEl.innerHTML = Object.keys(map).map(ders=>{
    const isActive = ders===S.activeTopicDers;
    return `<button class="topic-ders-pill filter-pill ${isActive?'active':''}" onclick="setTopicDers('${ders}',this)">${ders}</button>`;
  }).join('');
}

function addTopic() {
  const name=document.getElementById('topic-input').value.trim();
  if (!name) return;
  if (!S.topics[S.activeTopicDers]) S.topics[S.activeTopicDers]=[];
  S.topics[S.activeTopicDers].push({name, status:'baslama'});
  save('topics');
  document.getElementById('topic-input').value='';
  renderTopics(); tone(1000,.1);
}

function setTopicStatus(ders, idx, status) {
  if (S.topics[ders]?.[idx]) {
    S.topics[ders][idx].status=status;
    save('topics'); renderTopics();
    if (status==='bitti') { tone(1200,.2); maybeConfetti(); }
    else chimeClick();
  }
}

function deleteTopic(ders, idx) {
  S.topics[ders]?.splice(idx,1);
  save('topics'); renderTopics(); tone(400,.1);
}

function renderTopics() {
  const ders=S.activeTopicDers;
  const list=S.topics[ders]||[];
  document.getElementById('topic-ders-title').textContent=ders;

  // Overall exam progress
  const examMap = S.activeTopicExam==='TYT' ? TYT_TOPICS : AYT_TOPICS;
  let examTotal=0, examDone=0;
  Object.keys(examMap).forEach(d=>{
    const l=S.topics[d]||[];
    examTotal+=l.length;
    examDone+=l.filter(t=>t.status==='bitti').length;
  });
  const examPct=examTotal?Math.round((examDone/examTotal)*100):0;
  const circ=263.9;
  document.getElementById('tp-circle').style.strokeDashoffset=circ-(circ*examPct/100);
  document.getElementById('tp-pct').textContent=`${examPct}%`;
  document.getElementById('tp-summary').textContent=`${S.activeTopicExam}: ${examDone} / ${examTotal} konu`;

  // Per-ders progress counts in nav
  document.querySelectorAll('.topic-ders-pill').forEach(btn=>{
    const d=btn.textContent.trim();
    const dl=S.topics[d]||[];
    const dd=dl.filter(t=>t.status==='bitti').length;
    if (dl.length>0) btn.title=`${dd}/${dl.length} tamamlandı`;
  });

  const el=document.getElementById('topic-list');
  if (!list.length) {
    el.innerHTML=`<div class="empty"><i data-lucide="book-open"></i><p>Bu ders için konu yüklenmedi.</p><button class="btn btn-secondary" style="margin-top:8px" onclick="loadDefaultTopics('${ders}')">MEB Konularını Yükle</button></div>`;
    lucide.createIcons(); return;
  }

  const statusLabels={baslama:'Başlamadım',calisiyor:'Çalışıyorum',bitti:'Bitti ✓',tekrar:'Tekrar Lazım'};
  const statusColors={baslama:'var(--text-3)',calisiyor:'var(--aurora-amber)',bitti:'var(--aurora-green)',tekrar:'var(--aurora-pink)'};
  el.innerHTML=list.map((t,i)=>{
    const pct=t.status==='bitti'?100:t.status==='calisiyor'?50:t.status==='tekrar'?25:0;
    return `<div class="topic-item">
      <div style="flex:1;display:flex;flex-direction:column;gap:2px">
        <span class="topic-name status-${t.status}">${t.name}</span>
        <div style="height:3px;border-radius:2px;background:rgba(255,255,255,0.05);overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${statusColors[t.status]};border-radius:2px;transition:width .4s"></div>
        </div>
      </div>
      <select class="topic-select" onchange="setTopicStatus('${ders}',${i},this.value)">
        ${Object.entries(statusLabels).map(([v,l])=>`<option value="${v}" ${t.status===v?'selected':''}>${l}</option>`).join('')}
      </select>
      <button class="plan-del" onclick="deleteTopic('${ders}',${i})"><i data-lucide="trash-2"></i></button>
    </div>`;
  }).join('');
  lucide.createIcons();
}

function loadDefaultTopics(ders) {
  const allTopics = {...TYT_TOPICS, ...AYT_TOPICS};
  if (allTopics[ders]) {
    S.topics[ders]=allTopics[ders].map(t=>({name:t,status:'baslama'}));
    save('topics'); renderTopics();
  }
}

// ══════════════════════════════════════════════
// SUMMARY
// ══════════════════════════════════════════════
function updateSummary() {
  const active=getActiveSecs();
  const {mon,sun}=weekBounds();
  const weekSess=S.sessions.filter(s=>{
    const d=new Date(s.ts).toISOString().split('T')[0];
    return d>=mon&&d<=sun;
  });
  const weekTotal=weekSess.reduce((a,s)=>a+s.dur,0)+active;
  const pomCount=weekSess.filter(s=>s.type==='pomodoro').length;

  const weekPlans=S.plans.filter(p=>{
    if (!p.tarih) return false;
    const {mon:wmon,sun:wsun}=weekBounds();
    return p.tarih>=wmon&&p.tarih<=wsun;
  });
  const donePlans=weekPlans.filter(p=>p.done).length;
  const planPct=weekPlans.length?Math.round((donePlans/weekPlans.length)*100):0;

  document.getElementById('s-time').textContent=fmtDur(weekTotal);
  document.getElementById('s-pom').textContent=pomCount;
  document.getElementById('s-plan-pct').textContent=`${planPct}%`;
  document.getElementById('s-plan-frac').textContent=`${donePlans} / ${weekPlans.length} tamamlandı`;

  // Ders bars
  const byDers={};
  weekSess.forEach(s=>{ byDers[s.ders]=(byDers[s.ders]||0)+s.dur; });
  const el=document.getElementById('s-ders-list');
  if (!Object.keys(byDers).length) {
    el.innerHTML=`<div class="empty"><i data-lucide="pie-chart"></i><p>Veri yok.</p></div>`;
  } else {
    const sorted=Object.entries(byDers).sort((a,b)=>b[1]-a[1]);
    const max=sorted[0][1];
    el.innerHTML=sorted.map(([ders,dur])=>`
      <div class="ders-bar">
        <div class="ders-bar-top">
          ${badge(ders)}
          <span style="font-size:0.8rem;font-weight:600">${fmtDur(dur)}</span>
        </div>
        <div class="prog-wrap">
          <div class="prog-fill" style="width:${Math.round(dur/max*100)}%;background:${SUBJECT_COLOR[ders]||'#A29BFE'}"></div>
        </div>
      </div>
    `).join('');
  }
  lucide.createIcons();

  // Daily goal
  const todaySecs=todaySessions().reduce((a,s)=>a+s.dur,0)+active;
  const goalSecs=S.dailyGoal*3600;
  const pct=Math.min(100,Math.round(todaySecs/goalSecs*100));
  const h=Math.floor(todaySecs/3600), m=Math.floor((todaySecs%3600)/60);
  document.getElementById('goal-progress-txt').textContent=`${h>0?h+'s ':''} ${m}dk / ${S.dailyGoal}s`;
  document.getElementById('goal-pct').textContent=`%${pct}`;
  document.getElementById('goal-fill').style.width=pct+'%';
  const msgs=['Bugün henüz çalışmaya başlamadın. Hadi başla!','Güzel başlangıç! Devam et.','Harika gidiyorsun! Yarı yoldasın.','Neredeyse bitti! Son bir hamle.','Tebrikler! Hedefini tamamladın! 🎉'];
  const msgIdx=pct===0?0:pct<30?1:pct<60?2:pct<100?3:4;
  document.getElementById('goal-msg').textContent=msgs[msgIdx];

  // Question summary
  const todayQ=S.questions.filter(q=>new Date(q.ts).toDateString()===todayStr());
  const totalD=todayQ.reduce((a,q)=>a+q.dogru,0);
  const totalY=todayQ.reduce((a,q)=>a+q.yanlis,0);
  const sqEl=document.getElementById('s-q-summary');
  if (!todayQ.length) {
    sqEl.innerHTML=`<div class="empty" style="padding:1.5rem 0"><i data-lucide="hash"></i><p>Bugün soru kaydı yok.</p></div>`;
  } else {
    const byD={};
    todayQ.forEach(q=>{ byD[q.ders]=(byD[q.ders]||{d:0,y:0}); byD[q.ders].d+=q.dogru; byD[q.ders].y+=q.yanlis; });
    sqEl.innerHTML=`
      <div style="display:flex;gap:1rem;margin-bottom:0.75rem;text-align:center">
        <div style="flex:1;background:rgba(0,230,118,0.08);border-radius:var(--radius-md);padding:0.5rem">
          <div style="font-size:1.4rem;font-weight:800;color:var(--aurora-green)">${totalD}</div>
          <div style="font-size:0.7rem;color:var(--text-3)">Doğru</div>
        </div>
        <div style="flex:1;background:rgba(253,121,168,0.08);border-radius:var(--radius-md);padding:0.5rem">
          <div style="font-size:1.4rem;font-weight:800;color:var(--aurora-pink)">${totalY}</div>
          <div style="font-size:0.7rem;color:var(--text-3)">Yanlış</div>
        </div>
        <div style="flex:1;background:rgba(108,92,231,0.08);border-radius:var(--radius-md);padding:0.5rem">
          <div style="font-size:1.4rem;font-weight:800;color:var(--aurora-purple)">${totalD+totalY}</div>
          <div style="font-size:0.7rem;color:var(--text-3)">Toplam</div>
        </div>
      </div>
      ${Object.entries(byD).map(([ders,{d,y}])=>`
        <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:0.82rem;border-bottom:1px solid var(--border-dim)">
          ${badge(ders)}
          <span style="color:var(--aurora-green)">+${d}</span>
          <span style="color:var(--aurora-pink)">-${y}</span>
          <span style="font-weight:700">${d+y} soru</span>
        </div>
      `).join('')}
    `;
  }
  lucide.createIcons();
}

// ── Weekly Chart ────────────────────────────
let _weeklyChart=null;
function initWeeklyChart() {
  const ctx=document.getElementById('weekly-chart').getContext('2d');
  if (_weeklyChart) { _weeklyChart.destroy(); _weeklyChart=null; }
  const dark=document.body.classList.contains('dark-theme');
  const gridC=dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.06)';
  const textC=dark?'#a0a0c0':'#4a4a6a';

  // Build last 7 days
  const days=[];
  const labels=[];
  const dayNames=['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
  for (let i=6;i>=0;i--) {
    const d=new Date(); d.setDate(d.getDate()-i);
    days.push(d.toISOString().split('T')[0]);
    labels.push(dayNames[d.getDay()]);
  }
  const data=days.map(day=>{
    const secs=S.sessions.filter(s=>new Date(s.ts).toISOString().split('T')[0]===day).reduce((a,s)=>a+s.dur,0);
    return Math.round(secs/60); // minutes
  });

  _weeklyChart=new Chart(ctx,{
    type:'bar',
    data:{
      labels,
      datasets:[{
        label:'Dakika',data,
        backgroundColor:data.map((_,i)=>i===6?'rgba(108,92,231,0.7)':'rgba(108,92,231,0.25)'),
        borderColor:data.map((_,i)=>i===6?'#A29BFE':'rgba(108,92,231,0.4)'),
        borderWidth:2, borderRadius:8,
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}, tooltip:{
        callbacks:{label:ctx=>`${ctx.raw} dk`},
        backgroundColor:dark?'#0a0a1a':'#fff',
        titleColor:dark?'#f0f0ff':'#1a1a2e',
        bodyColor:dark?'#f0f0ff':'#1a1a2e',
        bodyFont:{family:'Outfit',weight:'bold'},
      }},
      scales:{
        y:{grid:{color:gridC},ticks:{color:textC,font:{family:'Outfit'},callback:v=>v+'dk'},min:0},
        x:{grid:{display:false},ticks:{color:textC,font:{family:'Outfit'}}},
      }
    }
  });
}

// ── Confetti ─────────────────────────────────
let _confettiRunning=false;
function maybeConfetti() {
  if (_confettiRunning) return;
  _confettiRunning=true;
  const canvas=document.getElementById('confetti-canvas');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const ctx=canvas.getContext('2d');
  const colors=['#6C5CE7','#00D2FF','#00E676','#FD79A8','#FDCB6E','#A29BFE'];
  const particles=Array.from({length:120},()=>({
    x:Math.random()*canvas.width, y:-10,
    r:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)],
    vx:(Math.random()-0.5)*4, vy:Math.random()*4+2,
    rot:Math.random()*360, rotV:(Math.random()-0.5)*8,
    alpha:1,
  }));
  let frame=0;
  const draw=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotV;
      p.vy+=0.05; // gravity
      if (frame>80) p.alpha-=0.02;
      ctx.save(); ctx.globalAlpha=Math.max(0,p.alpha);
      ctx.fillStyle=p.color;
      ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r);
      ctx.restore();
    });
    frame++;
    if (frame<120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); _confettiRunning=false; }
  };
  draw();
}
