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

// ── MEB Anadolu Lisesi Müfredatı — TYT (9. ve 10. Sınıf) ─────────────────────
const TYT_TOPICS = {
  // ═══════ 9. SINIF ═══════
  'Matematik (9. Sınıf)': [
    'Küme Kavramı ve Gösterimi',
    'Kümelerde İşlemler (Birleşim, Kesişim, Fark)',
    'Alt Küme ve Eşit Küme',
    'Kartezyen Çarpım',
    'Mantık — Önerme ve Bileşik Önermeler',
    'Koşullu Önermeler ve Niceleyiciler',
    'Doğal Sayılar ve Tam Sayılar',
    'Bölünebilme Kuralları',
    'EBOB ve EKOK',
    'Rasyonel Sayılar ve Ondalık Gösterim',
    'Üslü İfadeler',
    'Köklü İfadeler',
    'Çarpanlara Ayırma',
    'Oran ve Orantı',
    'Denklem Çözme (1. Derece)',
    'Eşitsizlikler',
    'Mutlak Değer',
    'Fonksiyon Kavramı ve Gösterimi',
    'Fonksiyon Çeşitleri (Birebir, Örten, İçine)',
  ],
  'Geometri (9. Sınıf)': [
    'Temel Kavramlar (Nokta, Doğru, Düzlem)',
    'Açı Kavramı ve Açı Ölçüleri',
    'Açılar Arası İlişkiler',
    'Üçgende Açı-Kenar Bağıntıları',
    'Üçgende Açıortay ve Kenarortay',
    'Üçgende Eşlik ve Benzerlik',
    'Dik Üçgen ve Pisagor Bağıntısı',
    'İkizkenar ve Eşkenar Üçgen',
    'Üçgenin Alanı',
    'Çokgenler — Dörtgenler',
    'Paralelkenar, Dikdörtgen, Kare',
    'Yamuk ve Özellikleri',
    'Çemberde Temel Kavramlar',
    'Çemberde Açılar',
  ],
  'Fizik (9. Sınıf)': [
    'Fizik Bilimine Giriş ve Ölçme',
    'Madde ve Özellikleri (Kütle, Hacim, Özkütleler)',
    'Katılarda, Sıvılarda ve Gazlarda Basınç',
    'Kaldırma Kuvveti — Archimedes İlkesi',
    'Isı ve Sıcaklık',
    'Hal Değişimleri',
    'Genleşme',
  ],
  'Kimya (9. Sınıf)': [
    'Kimya Bilimi ve Güvenlik',
    'Atom ve Yapısı (Proton, Nötron, Elektron)',
    'Atom Modelleri Tarihi (Dalton, Thomson, Rutherford, Bohr)',
    'Periyodik Sistem ve Element Özellikleri',
    'Elektron Dizilimleri',
    'Kimyasal Türler Arası Etkileşimler',
    'Maddenin Halleri',
    'Maddenin Fiziksel ve Kimyasal Özellikleri',
  ],
  'Biyoloji (9. Sınıf)': [
    'Yaşam Bilimi — Biyolojiye Giriş',
    'Canlıların Ortak Özellikleri',
    'Canlıların Yapısında Bulunan Temel Bileşikler (Su, Mineraller)',
    'Karbonhidratlar',
    'Yağlar (Lipitler)',
    'Proteinler',
    'Nükleik Asitler (DNA ve RNA)',
    'Vitaminler',
    'Hücre — Prokaryot ve Ökaryot',
    'Hücre Organelleri',
    'Hücre Zarından Madde Geçişi (Difüzyon, Osmoz)',
    'Canlıların Sınıflandırılması',
  ],
  'Türkçe (9-10)': [
    'Sözcükte Anlam — Gerçek, Mecaz, Yan Anlam',
    'Sözcükte Anlam — Eş, Yakın ve Zıt Anlam',
    'Sözcükte Anlam — Deyimler ve Atasözleri',
    'Sözcükte Anlam — İkilemeler, Sesteş Sözcükler',
    'Cümlede Anlam — Öznel ve Nesnel Yargı',
    'Cümlede Anlam — Neden-Sonuç, Amaç-Sonuç',
    'Cümlede Anlam — Koşul, Karşılaştırma',
    'Paragraf — Ana Düşünce ve Başlık Bulma',
    'Paragraf — Yardımcı Düşünce',
    'Paragraf — Boşluk ve Paragraf Tamamlama',
    'Paragraf — Anlatım Biçimleri',
    'Paragraf — Düşünceyi Geliştirme Yolları',
    'Dil Bilgisi — İsim, Sıfat, Zamir',
    'Dil Bilgisi — Zarf, Edat, Bağlaç, Ünlem',
    'Dil Bilgisi — Fiil Çekimi (Kip ve Kişi)',
    'Dil Bilgisi — Yapı Bakımından Sözcükler',
    'Dil Bilgisi — Cümle Öğeleri (Özne, Yüklem)',
    'Dil Bilgisi — Cümle Öğeleri (Nesne, Tümleçler)',
    'Dil Bilgisi — Cümle Türleri',
    'Dil Bilgisi — Fiilimsi (İsim, Sıfat, Zarf Fiil)',
    'Dil Bilgisi — Ses Bilgisi ve Ses Olayları',
    'Dil Bilgisi — Yazım Kuralları',
    'Dil Bilgisi — Noktalama İşaretleri',
  ],
  'Tarih (9. Sınıf)': [
    'Tarih Bilimi — Kavram ve Yöntemler',
    'Uygarlığın Doğuşu ve İlk Uygarlıklar',
    'Mezopotamya Uygarlıkları (Sümer, Babil, Asur)',
    'Mısır Uygarlığı',
    'Ege ve Yunan Uygarlıkları',
    'İlk Türk Devletleri — Büyük Hun Devleti',
    'Göktürk Devleti',
    'Uygur Devleti',
    'İslamiyetin Doğuşu',
    'Dört Halife Dönemi',
    'Emeviler ve Abbasiler',
  ],
  'Coğrafya (9. Sınıf)': [
    'Coğrafya Biliminin Konusu ve Yöntemi',
    'Coğrafi Konum ve Etkileri',
    'Harita Bilgisi ve Projeksiyonlar',
    'Dünyanın Şekli ve Hareketleri',
    'Atmosfer ve Sıcaklık',
    'Basınç ve Rüzgarlar',
    'Nem, Yağış ve İklim Tipleri',
    'İç Kuvvetler (Orojenez, Epirojenez)',
    'Volkanizma ve Depremler',
    'Dış Kuvvetler — Akarsu Aşındırması',
    'Dış Kuvvetler — Rüzgar ve Buzul',
  ],

  // ═══════ 10. SINIF ═══════
  'Matematik (10. Sınıf)': [
    'Sayı Kümeleri ve Aralıklar',
    'Bileşke ve Ters Fonksiyon',
    'Polinomlar ve Polinom İşlemleri',
    'Polinom Çarpanlara Ayırma',
    '2. Derece Denklemler',
    '2. Derece Eşitsizlikler',
    'Parabol ve Grafiği',
    'Permütasyon',
    'Kombinasyon',
    'Binom Açılımı ve Pascal Üçgeni',
    'Olasılık — Temel Kavramlar',
    'Koşullu Olasılık',
    'İstatistik — Veri Analizi',
    'Merkezi Eğilim Ölçüleri (Ortalama, Ortanca)',
    'Yayılım Ölçüleri (Standart Sapma)',
  ],
  'Geometri (10. Sınıf)': [
    'Doğruda Açıortay ve Uzaklık',
    'Üçgenin Kenarortay ve Ağırlık Merkezi',
    'Dik Üçgende Trigonometrik Oranlar',
    'Özel Açıların Trigonometrik Değerleri',
    'Alan Hesapları — Üçgen ve Dörtgen',
    'Çember ve Daire Alanı',
    'Dairenin Dilimi ve Yayı',
    'Prizmalar ve Yüzey Alanı',
    'Silindir',
    'Piramit ve Koni',
    'Küre',
  ],
  'Fizik (10. Sınıf)': [
    'Kuvvet ve Bileşenleri',
    'Newtonun Hareket Yasaları',
    'Sürtünme Kuvveti',
    'İş, Güç ve Enerji',
    'İş-Enerji Teoremi',
    'Basit Makineler (Kaldıraç, Makara)',
    'Elektrik Yükleri ve Coulomb Yasası',
    'Elektrik Alanı ve Potansiyel',
    'Basit Elektrik Devreleri (Seri, Paralel)',
    'Mıknatıslar ve Manyetik Alan',
    'Dalgalar — Temel Kavramlar',
    'Ses Dalgaları',
    'Yansıma ve Düzlem Ayna',
    'Kırılma ve Mercekler',
  ],
  'Kimya (10. Sınıf)': [
    'Kimyasal Bağlar — İyonik Bağ',
    'Kovalent Bağ (Polar ve Apolar)',
    'Metalik Bağ',
    'Zayıf Etkileşimler (Van der Waals)',
    'Kimyasal Tepkimeler ve Denkleştirme',
    'Tepkime Türleri (Yanma, Nötrleşme)',
    'Asitler ve Bazlar (Temel)',
    'Tuzlar',
    'Karışımlar ve Ayrıştırma Yöntemleri',
    'Çözeltiler ve Derişim',
    'Endüstride Kimya',
  ],
  'Biyoloji (10. Sınıf)': [
    'Hücre Bölünmesi — Mitoz',
    'Hücre Bölünmesi — Mayoz',
    'Eşeyli ve Eşeysiz Üreme',
    'Kalıtımın Genel İlkeleri — Mendel Genetiği',
    'Tek Gen Çaprazlamaları',
    'Kan Grupları Kalıtımı',
    'Eşeye Bağlı Kalıtım',
    'Ekosistem Ekolojisi',
    'Madde Döngüleri (Karbon, Azot, Su)',
    'Besin Zinciri ve Enerji Akışı',
    'Biyomlar',
    'Güncel Çevre Sorunları',
  ],
  'Tarih (10. Sınıf)': [
    'Türklerin Müslüman Olması',
    'İlk Türk-İslam Devletleri — Karahanlılar',
    'Gazneliler',
    'Büyük Selçuklu Devleti',
    'Malazgirt Savaşı ve Anadolunun Türkleşmesi',
    'Anadolu Selçuklu Devleti',
    'Anadolu Beylikleri',
    'Haçlı Seferleri',
    'Moğol İstilası',
    'Osmanlı Devletinin Kuruluşu',
    'Osmanlı Beylikten Devlete (Osman, Orhan, 1. Murat)',
    'Osmanlının Balkanlardaki Fetihleri',
    'Ankara Savaşı ve Fetret Devri',
    'İstanbulun Fethi',
  ],
  'Coğrafya (10. Sınıf)': [
    'Türkiyenin Coğrafi Konumu',
    'Türkiyenin Yüzey Şekilleri',
    'Türkiyenin İklimi',
    'Türkiyenin Bitki Örtüsü',
    'Türkiyenin Akarsuları',
    'Türkiyenin Gölleri',
    'Türkiyenin Nüfusu — Yapı ve Dağılış',
    'Türkiyede Göç',
    'Nüfus Politikaları',
    'Yerleşme Tipleri (Kır-Kent)',
    'Doğal Afetler ve Korunma',
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
    'Klasik ve Modern Mantık',
  ],
  'Din Kültürü (TYT)': [
    'İslamın Temel Kaynakları — Kuran',
    'Sünnet ve Hadis',
    'İnanç Esasları',
    'İbadetler',
    'Hz. Muhammedin Hayatı',
    'Ahlak ve Değerler',
    'İslam ve Diğer Dinler',
    'Laiklik ve Din Özgürlüğü',
    'Türk-İslam Kültürü',
  ],
};

// ── MEB Anadolu Lisesi Müfredatı — AYT (11. ve 12. Sınıf) ────────────────────
const AYT_TOPICS = {
  // ═══════ 11. SINIF ═══════
  'Matematik (11. Sınıf)': [
    'Üstel Fonksiyonlar',
    'Logaritma ve Özellikleri',
    'Üstel ve Logaritmik Denklemler',
    'Trigonometri — Temel Kavramlar',
    'Trigonometri — Birim Çember',
    'Sinüs, Kosinüs, Tanjant Fonksiyonları',
    'Trigonometrik Denklemler',
    'Toplam-Fark Formülleri',
    'Diziler — Genel Terim',
    'Aritmetik Dizi',
    'Geometrik Dizi',
    'Seriler (Toplam Formülleri)',
    'Limit — Tanım ve Hesaplama',
    'Belirsizlik Durumları',
    'Süreklilik',
  ],
  'Geometri (11. Sınıf)': [
    'Analitik Geometri — Nokta ve Uzaklık',
    'Doğru Denklemleri',
    'İki Doğrunun Birbirine Göre Durumu',
    'Noktanın Doğruya Uzaklığı',
    'Çember Denklemi',
    'Doğru ve Çember İlişkisi',
  ],
  'Fizik (11. Sınıf)': [
    'Kuvvet ve Hareket (İleri Dinamik)',
    'Bağlı Cisimler Problemleri',
    'Eğik Düzlemde Hareket',
    'İş, Güç ve Enerji (İleri)',
    'Momentum ve İmpuls',
    'Çarpışmalar (Esnek, Esnek Olmayan)',
    'Tork ve Denge',
    'Ağırlık Merkezi',
    'Basit Harmonik Hareket (Yay-Kütle)',
    'Sarkaç',
    'Dalga Mekaniği',
    'Yüzey Dalgaları',
    'Ses Dalgaları ve Doppler Etkisi',
    'Elektrik Akımı',
    'Direnç ve Ohm Yasası',
    'Kirchhoff Yasaları',
    'Kondansatörler',
    'Manyetik Alan ve Kuvvet',
    'Elektromanyetik İndüksiyon',
    'Alternatif Akım ve Transformatörler',
  ],
  'Kimya (11. Sınıf)': [
    'Modern Atom Teorisi — Kuantum Modeli',
    'Periyodik Özellikler',
    'Gazlar — İdeal Gaz Yasaları',
    'Gazlarda Karışım (Dalton)',
    'Mol Kavramı',
    'Kimyasal Hesaplamalar (Stokiyometri)',
    'Kütlece Yüzde Bileşim',
    'Termokimya — Entalpi',
    'Hess Yasası',
    'Tepkime Hızı',
    'Hızı Etkileyen Faktörler',
    'Kimyasal Denge',
    'Le Chatelier İlkesi',
    'Denge Sabiti (Kc ve Kp)',
  ],
  'Biyoloji (11. Sınıf)': [
    'Hücre Solunumu — Glikoliz',
    'Hücre Solunumu — Krebs Döngüsü',
    'Hücre Solunumu — Elektron Taşıma Sistemi',
    'Fotosentez — Işığa Bağımlı Reaksiyonlar',
    'Fotosentez — Calvin Döngüsü',
    'Kemosentez',
    'DNA Replikasyonu',
    'Protein Sentezi — Transkripsiyon',
    'Protein Sentezi — Translasyon',
    'Genetik Kod ve Kodon',
    'Mutasyon Çeşitleri',
    'Biyoteknoloji ve Gen Mühendisliği',
    'Komünite ve Popülasyon Ekolojisi',
  ],
  'Türk Dili ve Edebiyatı (11. Sınıf)': [
    'Tanzimat Edebiyatı — Genel Özellikler',
    'Tanzimat 1. Dönem (Şinasi, Namık Kemal)',
    'Tanzimat 2. Dönem (Recaizade, Sami Paşazade)',
    'Servetifünun Edebiyatı',
    'Tevfik Fikret ve Cenap Şahabettin',
    'Halit Ziya Uşaklıgil',
    'Fecr-i Ati Edebiyatı',
    'Milli Edebiyat Dönemi',
    'Ziya Gökalp, Ömer Seyfettin',
    'Beş Hececiler',
    'Roman Türü — Yapı ve İnceleme',
    'Hikaye Türü — Olay ve Durum Hikayesi',
    'Tiyatro Türleri',
    'Makale ve Deneme',
  ],
  'Tarih (11. Sınıf)': [
    'Osmanlı Yükselme Dönemi',
    'Kanuni Sultan Süleyman',
    'Osmanlıda Toprak ve Devlet Yönetimi',
    'Osmanlı Duraklama Dönemi',
    'Osmanlı Gerileme Dönemi',
    'Lale Devri ve III. Ahmet',
    'Osmanlıda Islahat Hareketleri (18. yy)',
    'Sanayi Devrimi ve Etkileri',
    'Fransız İhtilali ve Milliyetçilik',
    'Osmanlıda Tanzimat Fermanı',
    'Islahat Fermanı',
    '1. ve 2. Meşrutiyet',
    'Balkan Savaşları',
    'Osmanlıda Son Dönem Fikir Akımları',
  ],
  'Coğrafya (11. Sınıf)': [
    'Türkiyede Tarımsal Faaliyetler',
    'Türkiyede Hayvancılık',
    'Türkiyede Madencilik ve Enerji',
    'Türkiyede Sanayi',
    'Türkiyede Ulaşım',
    'Türkiyede Ticaret ve Turizm',
    'Dünya Ülkeleri ve Ekonomik Özellikler',
    'Bölgesel Kalkınma',
  ],

  // ═══════ 12. SINIF ═══════
  'Matematik (12. Sınıf)': [
    'Türev — Tanım ve Hesaplama',
    'Türev Kuralları (Toplam, Çarpım, Bölüm)',
    'Zincir Kuralı',
    'Türevin Geometrik Yorumu (Teğet ve Normal)',
    'Artan ve Azalan Fonksiyonlar',
    'Ekstremum Noktaları (Max ve Min)',
    'Büküm Noktası',
    'Türev Uygulamaları (Optimizasyon)',
    'Belirsiz İntegral',
    'İntegral Alma Teknikleri',
    'Belirli İntegral',
    'İntegral Uygulamaları — Alan Hesabı',
    'Karmaşık Sayılar',
    'Karmaşık Düzlem ve İşlemler',
    'Matris ve Matris İşlemleri',
    'Determinant',
    'Lineer Denklem Sistemleri (Cramer)',
  ],
  'Geometri (12. Sınıf)': [
    'Dönüşüm Geometrisi — Öteleme',
    'Yansıma (Simetri)',
    'Dönme',
    'Vektörler ve Bileşenleri',
    'Vektörlerde İşlemler',
    'Nokta ve Vektörel Çarpım',
  ],
  'Fizik (12. Sınıf)': [
    'Dairesel Hareket',
    'Kepler Yasaları ve Uydu Fiziği',
    'Tek Boyutlu Hareket (Kinematik)',
    'Serbest Düşme ve Dikey Atış',
    'Yatay ve Eğik Atış',
    'Isı ve Termodinamik Yasaları',
    'Isı Makineleri ve Verim',
    'Yansıma — Düzlem and Küresel Aynalar',
    'Kırılma — Snell Yasası',
    'İnce Mercekler ve Görüntü',
    'Özel Görelilik — Zaman ve Uzay',
    'Fotoelektrik Olay',
    'Bohr Atom Modeli ve Enerji Seviyeleri',
    'Radyoaktivite — Alfa, Beta, Gama',
    'Çekirdek Tepkimeleri (Fisyon ve Füzyon)',
  ],
  'Kimya (12. Sınıf)': [
    'Arrhenius ve Brönsted-Lowry Asit-Baz Teorisi',
    'pH ve pOH Hesapları',
    'Kuvvetli ve Zayıf Asit-Baz',
    'Tampon Çözeltiler',
    'Asit-Baz Titrasyonu',
    'Oksidasyon-İndirgeme Tepkimeleri',
    'Elektrokimyasal Piller (Galvanik)',
    'Elektroliz',
    'Organik Kimya — Hidrokarbonlar',
    'Alkanlar, Alkenler, Alkinler',
    'Aromatik Bileşikler — Benzen',
    'Alkoller ve Eterler',
    'Aldehit ve Ketonlar',
    'Karboksilik Asitler ve Esterler',
    'Aminler ve Amitler',
    'Polimerler',
    'Karbonhidratlar, Proteinler ve Yağlar',
  ],
  'Biyoloji (12. Sınıf)': [
    'Bitki Biyolojisi — Yaprak, Kök, Gövde',
    'Bitkide Madde Taşınması',
    'Bitkide Eşeyli ve Eşeysiz Üreme',
    'Sindirim Sistemi ve Sindirim Enzimleri',
    'Dolaşım Sistemi — Kalp ve Kan Damarları',
    'Kan ve Kan Grupları',
    'Bağışıklık Sistemi',
    'Solunum Sistemi',
    'Boşaltım Sistemi — Böbrek',
    'Destek ve Hareket Sistemi',
    'Sinir Sistemi — Nöron ve Sinaps',
    'Merkezi Sinir Sistemi (Beyin, Omurilik)',
    'Duyu Organları (Göz, Kulak)',
    'Endokrin Sistem — Hormonlar',
    'Üreme Sistemi ve Embriyonik Gelişim',
    'Evrim — Doğal Seçilim',
    'Evrim Kanıtları ve Türleşme',
  ],
  'Türk Dili ve Edebiyatı (12. Sınıf)': [
    'Cumhuriyet Dönemi Türk Edebiyatı — Genel',
    'Cumhuriyet Dönemi Şiir Akımları',
    'Garip Akımı (Orhan Veli)',
    '2. Yeni (Cemal Süreya, Turgut Uyar)',
    'Toplumcu Gerçekçi Şiir (Nazım Hikmet)',
    'Cumhuriyet Dönemi Roman (Reşat Nuri, Yakup Kadri)',
    'Köy Romanları (Yaşar Kemal)',
    'Toplumcu Gerçekçi Roman',
    'Bireyin İç Dünyasını Elen Alan Roman',
    'Postmodern Roman',
    'Cumhuriyet Dönemi Hikaye',
    'Tiyatro — Cumhuriyet Dönemi',
    'Deneme, Eleştiri, Söylev',
    'Biyografi ve Otobiyografi',
    'Mektup, Günlük, Gezi Yazısı',
  ],
  'Tarih (12. Sınıf)': [
    '1. Dünya Savaşı — Sebep ve Cepheler',
    'Osmanlının 1. Dünya Savaşı Cepheleri',
    'Mondros Mütarekesi ve İşgaller',
    'Mustafa Kemalin Samsuna Çıkışı',
    'Amasya Genelgesi ve Kongreler',
    'TBMM\'nin Açılması',
    'Kuvay-i Milliye Hareketi',
    'Sakarya ve Büyük Taarruz',
    'Mudanya ve Lozan Antlaşmaları',
    'Cumhuriyetin İlanı',
    'Atatürk İnkılapları — Siyasi',
    'Atatürk İnkılapları — Hukuk ve Eğitim',
    'Atatürk İnkılapları — Sosyal ve Ekonomik',
    'Atatürk İlkeleri',
    '2. Dünya Savaşı',
    'Soğuk Savaş Dönemi',
    'Türkiyenin Yakın Tarihi (1950-2000)',
  ],
  'Coğrafya (12. Sınıf)': [
    'Küresel Çevre Sorunları',
    'İklim Değişikliği',
    'Sürdürülebilir Kalkınma',
    'Doğal Kaynakların Kullanımı',
    'Türkiye Bölgeleri — Marmara',
    'Türkiye Bölgeleri — Ege',
    'Türkiye Bölgeleri — Akdeniz',
    'Türkiye Bölgeleri — İç Anadolu',
    'Türkiye Bölgeleri — Karadeniz',
    'Türkiye Bölgeleri — Doğu Anadolu',
    'Türkiye Bölgeleri — Güneydoğu Anadolu',
    'Dünya Nüfusu ve Göç',
  ],
  'Felsefe Grubu (AYT)': [
    'Psikolojiye Giriş',
    'Psikolojinin Tarihsel Gelişimi',
    'Davranışçılık ve Bilişsel Psikoloji',
    'Psikanaliz — Freud',
    'Öğrenme ve Bellek',
    'Algı ve Dikkat',
    'Duygu ve Motivasyon',
    'Kişilik Kuramları',
    'Sosyolojiye Giriş',
    'Toplumsal Yapı ve Kurumlar',
    'Toplumsal Değişme',
    'Kültür ve Medeniyet',
    'Klasik Mantık — Kategorik Çıkarımlar',
    'Sembolik Mantık',
    'Antik Yunan Felsefesi',
    'Modern Felsefe (Descartes, Kant)',
    'Çağdaş Felsefe Akımları',
  ],
  'Din Kültürü (AYT)': [
    'Kuranın Yorumu — Tefsir',
    'Hadis Usulü',
    'Fıkıh ve İslam Hukuku',
    'İslam Mezhepleri',
    'Tasavvuf',
    'Karşılaştırmalı Dinler',
    'Türk-İslam Düşünürleri',
  ],
  'İngilizce (AYT)': [
    'Grammar — Tenses (Simple, Continuous, Perfect)',
    'Grammar — Modal Verbs',
    'Grammar — Passive Voice',
    'Grammar — Conditional Sentences (0,1,2,3)',
    'Grammar — Reported Speech',
    'Grammar — Relative Clauses',
    'Grammar — Gerunds and Infinitives',
    'Grammar — Conjunctions and Transitions',
    'Reading — Main Idea and Topic Sentence',
    'Reading — Detail Questions and Inference',
    'Reading — Paragraph Completion',
    'Reading — Irrelevant Sentence',
    'Reading — Dialogue Completion',
    'Translation — Türkçeye ve İngilizceye Çeviri',
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
  activeTopicDers: 'Matematik (9. Sınıf)',
  activeNetChart: 'TYT',
  geminiKey: '',
  aiChatHistory: [],
  notebookFolders: [],
  examDates: [],
  restDays: [],
  tokens: 0,
  restPasses: 0,
  unlockedItems: ['theme-light', 'theme-dark'],
  activeTheme: 'default',
  activeTitle: 'none',
  lastStreakClaim: '',
  pendingStudySeconds: 0,
  duelNickname: '',
  duelGroupCode: '',
  userId: '',
  duelGroupEditKey: '',

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
  const keys = ['plans','sessions','nets','questions','topics','dailyGoal','theme','stopwatch','pomodoro','geminiKey','aiChatHistory','notebookFolders','examDates','restDays','tokens','restPasses','unlockedItems','activeTheme','activeTitle','lastStreakClaim','pendingStudySeconds','duelNickname','duelGroupCode','userId','duelGroupEditKey'];
  keys.forEach(k => {
    try {
      const v = localStorage.getItem('ykso2_'+k);
      if (v !== null) S[k] = JSON.parse(v);
    } catch(e) {}
  });

  // Ensure userId exists
  if (!S.userId) {
    S.userId = 'usr_' + Math.random().toString(36).substring(2, 15);
    try { localStorage.setItem('ykso2_userId', JSON.stringify(S.userId)); } catch(e) {}
  }
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

  // Resume stopwatch if it was running
  if (S.stopwatch.isRunning) {
    const elapsed = S.stopwatch.lastTick ? Math.floor((Date.now() - S.stopwatch.lastTick) / 1000) : 0;
    S.stopwatch.secs += Math.max(0, elapsed);
    S.stopwatch.isRunning = false;
    setTimeout(() => {
      const dersSel = document.getElementById('sw-ders');
      if (dersSel) dersSel.value = S.stopwatch.ders;
      swToggle();
    }, 100);
  } else {
    setTimeout(() => {
      document.getElementById('sw-digits').textContent = fmtHMS(S.stopwatch.secs);
      updateSwTotal();
    }, 100);
  }

  // Resume pomodoro if it was running
  if (S.pomodoro.isRunning) {
    const elapsed = S.pomodoro.lastTick ? Math.floor((Date.now() - S.pomodoro.lastTick) / 1000) : 0;
    if (elapsed > 0) {
      if (S.pomodoro.phase === 'work') {
        if (elapsed >= S.pomodoro.secs) {
          S.pomodoro.streak++;
          S.sessions.push({id:Date.now(),ts:Date.now(),ders:S.pomodoro.ders,dur:S.pomodoro.workMins*60,type:'pomodoro'});
          save('sessions');
          S.pomodoro.phase = (S.pomodoro.streak%4===0) ? 'long' : 'short';
          S.pomodoro.secs = pomPhaseTotal();
          S.pomodoro.isRunning = false;
          save('pomodoro');
          setTimeout(() => {
            alert('Tebrikler! Sen yokken bir Pomodoro tamamlandı.');
            updateSummary();
            pomRender();
            pomRenderStars();
          }, 300);
        } else {
          S.pomodoro.secs -= elapsed;
          S.pomodoro.isRunning = false;
          setTimeout(() => {
            const dersSel = document.getElementById('pom-ders');
            if (dersSel) dersSel.value = S.pomodoro.ders;
            pomToggle();
          }, 100);
        }
      } else {
        if (elapsed >= S.pomodoro.secs) {
          if (S.pomodoro.phase === 'long') S.pomodoro.streak = 0;
          S.pomodoro.phase = 'work';
          S.pomodoro.secs = pomPhaseTotal();
          S.pomodoro.isRunning = false;
          save('pomodoro');
          setTimeout(() => {
            alert('Mola bitti! Yeni pomodoroya başlayabilirsin.');
            pomRender();
            pomRenderStars();
          }, 300);
        } else {
          S.pomodoro.secs -= elapsed;
          S.pomodoro.isRunning = false;
          setTimeout(() => {
            pomToggle();
          }, 100);
        }
      }
    } else {
      S.pomodoro.isRunning = false;
      setTimeout(() => {
        pomToggle();
      }, 100);
    }
  } else {
    setTimeout(() => {
      pomRender();
      pomRenderStars();
    }, 100);
  }
}
function save(key) {
  const keys = key ? [key] : ['plans','sessions','nets','questions','topics','dailyGoal','theme','stopwatch','pomodoro','geminiKey','aiChatHistory','notebookFolders','examDates','restDays','tokens','restPasses','unlockedItems','activeTheme','activeTitle','lastStreakClaim','pendingStudySeconds','duelNickname','duelGroupCode','userId','duelGroupEditKey'];
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
function today() {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const r = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${r}`;
}
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
  const fmt = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const r = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${r}`;
  };
  return {
    mon: fmt(mon),
    sun: fmt(sun),
  };
}
function badge(ders) {
  return `<span class="badge ${SUBJECT_BADGE[ders]||'badge-mat'}">${ders}</span>`;
}
function getActiveSecs() {
  let x=0;
  if (S.stopwatch.secs > 0) {
    x += S.stopwatch.secs;
  }
  if (S.pomodoro.phase === 'work') {
    const elapsed = (S.pomodoro.workMins * 60) - S.pomodoro.secs;
    if (elapsed > 0) {
      x += elapsed;
    }
  }
  return x;
}
function todaySessions() {
  return S.sessions.filter(s=>new Date(s.ts).toDateString()===todayStr());
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  load();
  await initNotebookDB();
  applyTheme();
  setInputDefaults();
  setupPWA();
  lucide.createIcons();
  // Splash screen — hide after 2 seconds
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.classList.add('hidden');
      setTimeout(() => splash.remove(), 700);
    }
  }, 2000);
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
  // Skip button removed
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
  initAI();
  renderExams();
  checkDailyStreakClaim();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  }

  // Request notification permission early
  if ('Notification' in window && Notification.permission === 'default') {
    // Ask after 5 seconds to not be intrusive
    setTimeout(() => {
      Notification.requestPermission();
    }, 5000);
  }

  // Save on unload and visibilitychange
  window.addEventListener('beforeunload', saveOnUnload);
  
  let _leftAppAt = null;
  
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveTimerStates();
      
      // Send notification if a timer is actively running
      const pomRunning = S.pomodoro.isRunning && S.pomodoro.phase === 'work';
      const swRunning = S.stopwatch.isRunning;
      
      if (pomRunning || swRunning) {
        _leftAppAt = Date.now();
        
        if ('Notification' in window && Notification.permission === 'granted') {
          const timerName = pomRunning ? `Pomodoro (${S.pomodoro.ders})` : `Kronometre (${S.stopwatch.ders})`;
          try {
            new Notification('⏱️ YKS Odak — Zamanlayıcın Çalışıyor!', {
              body: `${timerName} hâlâ çalışıyor. Odaklanmaya devam et, hedefine yaklaşıyorsun! 🎯`,
              icon: './icons/icon-512.jpg',
              tag: 'yks-timer-running',
              renotify: true
            });
          } catch(e) {}
        }
      }
      
    } else if (document.visibilityState === 'visible') {
      catchUpTimers();
      
      // Show "away time" toast if user was away while timer was running
      if (_leftAppAt) {
        const awaySeconds = Math.floor((Date.now() - _leftAppAt) / 1000);
        _leftAppAt = null;
        
        if (awaySeconds >= 10) {
          const pomRunning = S.pomodoro.isRunning && S.pomodoro.phase === 'work';
          const swRunning = S.stopwatch.isRunning;
          
          if (pomRunning || swRunning) {
            const mins = Math.floor(awaySeconds / 60);
            const secs = awaySeconds % 60;
            let awayText = '';
            if (mins > 0) {
              awayText = `${mins} dk ${secs} sn`;
            } else {
              awayText = `${secs} saniye`;
            }
            showAwayToast(awayText);
          }
        }
      }
    }
  });
});

function setInputDefaults() {
  document.getElementById('p-tarih').value = today();
  document.getElementById('net-date').value = today();
  document.getElementById('goal-hrs').value = S.dailyGoal;
}

// ── Theme ────────────────────────────────────
function applyTheme() {
  const customTheme = S.activeTheme || 'default';
  document.body.className = `${S.theme==='dark' ? 'dark-theme' : 'light-theme'} active-theme-${customTheme}`;
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
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }
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
  if (sec==='shop') { renderShop(); }
  if (sec==='nets') initNetChart();
  if (sec==='notebook') { renderFolders(); }
  if (sec==='ai') {
    const chatEl = document.getElementById('ai-messages');
    if (chatEl) setTimeout(() => chatEl.scrollTop = chatEl.scrollHeight, 50);
  }
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
    save('pomodoro');
    updateSummary();
    tone(500,.1);
  } else {
    // Start — stop stopwatch if running
    if (S.stopwatch.isRunning) swToggle();
    S.pomodoro.ders=document.getElementById('pom-ders').value;
    S.pomodoro.isRunning=true;
    S.pomodoro.lastTick=Date.now();
    save('pomodoro');
    document.getElementById('pom-play-txt').textContent='Durdur';
    document.getElementById('pom-play-ico').setAttribute('data-lucide','pause');
    updateSummary();
    tone(880,.15);
    S.pomodoro.timerId=setInterval(pomTick, 1000);
  }
  lucide.createIcons();
}

function pomTick() {
  S.pomodoro.secs--;
  S.pomodoro.lastTick=Date.now();
  if (S.pomodoro.secs % 5 === 0) save('pomodoro');
  pomRender();
  if (S.pomodoro.phase==='work') { updateSummary(); updateSwTotal(); }
  if (S.pomodoro.secs<=0) pomPhaseEnd();
}

function pomPhaseEnd() {
  clearInterval(S.pomodoro.timerId); S.pomodoro.isRunning=false;
  if (S.pomodoro.phase==='work') {
    // Work phase completed! 
    S.pomodoro.streak++;
    addStudySession('pomodoro', S.pomodoro.ders, S.pomodoro.workMins*60);
    // Celebration!
    maybeConfetti();
    pomNotify();
    S.pomodoro.phase = (S.pomodoro.streak%4===0) ? 'long' : 'short';
  } else {
    // Break ended — notify to get back to work
    chimeWork();
    pomNotify();
    if (S.pomodoro.phase==='long') S.pomodoro.streak=0;
    S.pomodoro.phase='work';
  }
  S.pomodoro.secs=pomPhaseTotal();
  save('pomodoro');
  document.getElementById('pom-play-txt').textContent='Başlat';
  document.getElementById('pom-play-ico').setAttribute('data-lucide','play');
  pomRender(); pomRenderStars();
  lucide.createIcons();
}

// Pomodoro completion notification — sound + browser notification
function pomNotify() {
  // Play a loud celebration sound
  const isWork = S.pomodoro.phase==='work';
  if (isWork) {
    // Work done! Multi-tone celebration
    [523.25, 659.25, 783.99, 1046.50].forEach((f,i) => setTimeout(() => tone(f, 0.4, 'sine', 0.12), i*150));
  } else {
    // Break done — alert sound
    [880, 1100, 880].forEach((f,i) => setTimeout(() => tone(f, 0.2, 'triangle', 0.1), i*200));
  }
  // Browser notification
  if ('Notification' in window && Notification.permission === 'granted') {
    const title = isWork ? '🎉 Pomodoro Tamamlandı!' : '⏰ Mola Bitti!';
    const body = isWork ? `${S.pomodoro.streak}. pomodoro bitti. Mola zamanı!` : 'Odaklanma zamanı! Hadi başlayalım.';
    new Notification(title, { body, icon: 'icons/icon-512.jpg' });
  }
  // Request notification permission if not asked
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function pomReset() {
  // Save partial work session
  if (S.pomodoro.phase==='work') {
    const elapsed=(S.pomodoro.workMins*60)-S.pomodoro.secs;
    if (elapsed>=10) savePartialSession('pomodoro', S.pomodoro.ders, elapsed);
  }
  clearInterval(S.pomodoro.timerId);
  S.pomodoro.isRunning=false; S.pomodoro.phase='work';
  S.pomodoro.secs=S.pomodoro.workMins*60;
  save('pomodoro');
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
  save('pomodoro');
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
    // Auto-save: When stopping, save the elapsed time as a session
    if (S.stopwatch.secs>=10) {
      addStudySession('manuel', S.stopwatch.ders, S.stopwatch.secs);
      chimeSave();
      S.stopwatch.secs=0;
      document.getElementById('sw-digits').textContent='00:00:00';
      document.getElementById('sw-play-txt').textContent='Başlat';
    } else {
      document.getElementById('sw-play-txt').textContent='Devam';
    }
    document.getElementById('sw-play-ico').setAttribute('data-lucide','play');
    document.getElementById('sw-status').classList.remove('on');
    document.getElementById('sw-status-txt').textContent='Beklemede';
    save('stopwatch');
    updateSummary();
    tone(500,.1);
  } else {
    if (S.pomodoro.isRunning) pomToggle();
    S.stopwatch.ders=document.getElementById('sw-ders').value;
    S.stopwatch.isRunning=true;
    S.stopwatch.lastTick=Date.now();
    save('stopwatch');
    document.getElementById('sw-play-txt').textContent='Durdur';
    document.getElementById('sw-play-ico').setAttribute('data-lucide','pause');
    const status=document.getElementById('sw-status');
    status.classList.add('on');
    document.getElementById('sw-status-txt').textContent='Çalışıyor: '+S.stopwatch.ders;
    tone(880,.15);
    S.stopwatch.timerId=setInterval(()=>{
      S.stopwatch.secs++;
      S.stopwatch.lastTick=Date.now();
      if (S.stopwatch.secs % 5 === 0) save('stopwatch');
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
  save('stopwatch');
  document.getElementById('sw-digits').textContent='00:00:00';
  document.getElementById('sw-play-txt').textContent='Başlat';
  document.getElementById('sw-play-ico').setAttribute('data-lucide','play');
  document.getElementById('sw-status').classList.remove('on');
  document.getElementById('sw-status-txt').textContent='Beklemede';
  tone(400,.15); lucide.createIcons();
}

function swSave() {
  if (S.stopwatch.secs<10) { alert('En az 10 saniye çalışmalısınız.'); return; }
  addStudySession('manuel', S.stopwatch.ders, S.stopwatch.secs);
  chimeSave();
  swReset();
}

function clearSessions() {
  if (!confirm('Tüm oturumları silmek istiyor musunuz?')) return;
  S.sessions=[]; save('sessions'); renderSessions(); updateSummary(); tone(300,.3);
}

function deleteSession(id) {
  if (!confirm('Bu çalışma oturumunu silmek istediğinizden emin misiniz?')) return;
  S.sessions=S.sessions.filter(s=>s.id!==id);
  save('sessions');
  renderSessions();
  updateSummary();
  tone(400,.15);
}

function updateSwTotal() {
  const saved=todaySessions().reduce((a,s)=>a+s.dur,0);
  document.getElementById('sw-today').textContent=fmtDur(saved+getActiveSecs());
}

function renderSessions() {
  const swEl=document.getElementById('sess-list');
  const pomEl=document.getElementById('pom-sess-list');
  const list=todaySessions().slice().reverse();
  updateSwTotal();
  
  const renderEmpty = () => `<div class="empty"><i data-lucide="hourglass"></i><p>Bugün henüz oturum yok.</p></div>`;
  
  const renderHtml = (items) => items.map(s=>{
    const t=new Date(s.ts);
    const tStr=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}`;
    const tagC=s.type==='pomodoro'?'tag-pom':'tag-man';
    const tagL=s.type==='pomodoro'?'Pomodoro':'Manuel';
    return `<div class="sess-item" style="display:flex;justify-content:space-between;align-items:center;width:100%">
      <div class="sess-left" style="display:flex;align-items:center;gap:8px">
        ${badge(s.ders)}
        <span class="sess-tag ${tagC}">${tagL}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="sess-dur">${fmtDur(s.dur)} <span class="sess-time">${tStr}</span></span>
        <button class="plan-del" onclick="deleteSession(${s.id})" title="Oturumu Sil" style="padding:4px"><i data-lucide="trash-2" style="width:14px;height:14px"></i></button>
      </div>
    </div>`;
  }).join('');

  if (!list.length) {
    if (swEl) swEl.innerHTML=renderEmpty();
    if (pomEl) pomEl.innerHTML=renderEmpty();
  } else {
    const html = renderHtml(list);
    if (swEl) swEl.innerHTML=html;
    if (pomEl) pomEl.innerHTML=html;
  }
  lucide.createIcons();
}

function savePartialSession(type, ders, secs) {
  addStudySession(type, ders, secs);
}

// ── Save on unload ─────────────────────────────
function saveOnUnload() {
  saveTimerStates();
}

function saveTimerStates() {
  if (S.stopwatch.isRunning) {
    S.stopwatch.lastTick = Date.now();
  }
  if (S.pomodoro.isRunning) {
    S.pomodoro.lastTick = Date.now();
  }
  save('stopwatch');
  save('pomodoro');
}

function catchUpTimers() {
  let changed = false;
  if (S.stopwatch.isRunning && S.stopwatch.lastTick) {
    const elapsed = Math.floor((Date.now() - S.stopwatch.lastTick) / 1000);
    if (elapsed > 0) {
      S.stopwatch.secs += elapsed;
      S.stopwatch.lastTick = Date.now();
      document.getElementById('sw-digits').textContent = fmtHMS(S.stopwatch.secs);
      updateSwTotal();
      updateSummary();
      changed = true;
    }
  }
  if (S.pomodoro.isRunning && S.pomodoro.lastTick) {
    const elapsed = Math.floor((Date.now() - S.pomodoro.lastTick) / 1000);
    if (elapsed > 0) {
      S.pomodoro.lastTick = Date.now();
      if (S.pomodoro.phase === 'work') {
        if (elapsed >= S.pomodoro.secs) {
          pomPhaseEnd();
        } else {
          S.pomodoro.secs -= elapsed;
          pomRender();
        }
      } else {
        if (elapsed >= S.pomodoro.secs) {
          pomPhaseEnd();
        } else {
          S.pomodoro.secs -= elapsed;
          pomRender();
        }
      }
      changed = true;
    }
  }
  if (changed) {
    save('stopwatch');
    save('pomodoro');
  }
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
    const dateObj = new Date(s.ts);
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const r = String(dateObj.getDate()).padStart(2, '0');
    const d = `${y}-${m}-${r}`;
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

  // Streak update
  const streak = calculateStreak();
  const streakBadge = document.getElementById('streak-badge');
  const streakCount = document.getElementById('streak-count');
  const sStreak = document.getElementById('s-streak');
  const sStreakSub = document.getElementById('s-streak-sub');
  const restDayBtn = document.getElementById('rest-day-btn');

  if (streakBadge && streakCount) {
    streakCount.textContent = streak;
    if (streak > 0) {
      streakBadge.style.display = 'flex';
    } else {
      streakBadge.style.display = 'none';
    }
  }
  if (sStreak && sStreakSub) {
    sStreak.textContent = `🔥 ${streak} Gün`;
    sStreakSub.textContent = streak > 0 ? 'Seriyi devam ettiriyorsun!' : 'Bugün çalışarak seriye başla!';
  }
  if (restDayBtn) {
    const todayStrVal = today();
    if (S.restDays && S.restDays.includes(todayStrVal)) {
      restDayBtn.textContent = '☀️ Bugün Dinlenme Günü (İptal Et)';
      restDayBtn.style.background = 'rgba(0, 230, 118, 0.15)';
      restDayBtn.style.borderColor = 'var(--aurora-green)';
      restDayBtn.style.color = '#00E676';
    } else {
      restDayBtn.textContent = '🌴 Bugünü Dinlenme Günü Yap';
      restDayBtn.style.background = '';
      restDayBtn.style.borderColor = 'rgba(253, 203, 110, 0.3)';
      restDayBtn.style.color = '';
    }
  }

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
    const yr = d.getFullYear();
    const mt = String(d.getMonth() + 1).padStart(2, '0');
    const dt = String(d.getDate()).padStart(2, '0');
    days.push(`${yr}-${mt}-${dt}`);
    labels.push(dayNames[d.getDay()]);
  }
  const data=days.map(day=>{
    const secs=S.sessions.filter(s=>{
      const dateObj = new Date(s.ts);
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth() + 1).padStart(2, '0');
      const r = String(dateObj.getDate()).padStart(2, '0');
      return `${y}-${m}-${r}` === day;
    }).reduce((a,s)=>a+s.dur,0);
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

// ══════════════════════════════════════════════
// AURORA AI ASSISTANT
// ══════════════════════════════════════════════
const AI_WELCOME_MSG = `Merhaba! Ben **Aurora AI**, senin YKS çalışma asistanınım. 🚀

YKS (TYT/AYT) sınavına hazırlık sürecinde sana her konuda destek olabilirim:
* **Soru Çözümü:** Çözemediğin matematik, fizik, kimya veya herhangi bir dersin sorusunu alt kısımdaki resim ikonuna tıklayarak fotoğrafını yükleyebilirsin. Senin için adım adım çözebilirim!
* **Ders Anlatımı:** Anlamadığın formülleri, tarihi olayları veya dil bilgisi kurallarını sorabilirsin.
* **Koçluk & Motivasyon:** Çalışma programı tavsiyeleri alabilir, stresle başa çıkma yollarını danışabilirsin.

*Asistanı aktifleştirmek için sağ üstteki **API Ayarları** butonundan ücretsiz API anahtarını tanımlamayı unutma!*`;

let _attachedImage = null;

function initAI() {
  const warningBanner = document.getElementById('gemini-key-warning');
  const statusDot = document.getElementById('ai-status-dot');
  
  if (S.geminiKey) {
    if (warningBanner) warningBanner.style.display = 'none';
    if (statusDot) {
      statusDot.style.background = 'var(--aurora-green)';
      statusDot.style.boxShadow = '0 0 8px var(--aurora-green)';
    }
  } else {
    if (warningBanner) warningBanner.style.display = 'flex';
    if (statusDot) {
      statusDot.style.background = 'var(--aurora-amber)';
      statusDot.style.boxShadow = '0 0 8px var(--aurora-amber)';
    }
  }
  
  const msgBox = document.getElementById('ai-messages');
  if (!msgBox) return;
  msgBox.innerHTML = '';
  
  // If history is empty, insert welcome message
  if (S.aiChatHistory.length === 0) {
    S.aiChatHistory.push({ role: 'model', text: AI_WELCOME_MSG });
    save('aiChatHistory');
  }
  
  S.aiChatHistory.forEach(m => {
    renderAIMessage(m.role, m.text, m.image);
  });
  
  msgBox.scrollTop = msgBox.scrollHeight;
}

function openGeminiConfig() {
  document.getElementById('ai-key-input').value = S.geminiKey || '';
  document.getElementById('ai-config-modal').classList.remove('hidden');
  chimeClick();
}

function closeGeminiConfig() {
  document.getElementById('ai-config-modal').classList.add('hidden');
  chimeClick();
}

function saveGeminiKey() {
  const key = document.getElementById('ai-key-input').value.trim();
  S.geminiKey = key;
  save('geminiKey');
  closeGeminiConfig();
  initAI();
  tone(1000, 0.15);
}

function clearAIChat() {
  if (!confirm('Sohbet geçmişini temizlemek istiyor musunuz?')) return;
  S.aiChatHistory = [];
  save('aiChatHistory');
  initAI();
  tone(400, 0.15);
}

function handleImageAttachment(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 4 * 1024 * 1024) {
    alert('Resim boyutu 4MB\'tan küçük olmalıdır.');
    e.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = function(evt) {
    const rawData = evt.target.result;
    const commaIndex = rawData.indexOf(',');
    const base64Data = rawData.substring(commaIndex + 1);
    
    _attachedImage = {
      mimeType: file.type,
      data: base64Data
    };
    
    document.getElementById('ai-img-preview').src = rawData;
    document.getElementById('ai-img-name').textContent = file.name;
    document.getElementById('ai-img-preview-box').classList.remove('hidden');
    tone(700, 0.1);
  };
  reader.readAsDataURL(file);
}

function removeAttachedImage() {
  _attachedImage = null;
  document.getElementById('ai-file-input').value = '';
  document.getElementById('ai-img-preview-box').classList.add('hidden');
  tone(400, 0.1);
}

function renderAIMessage(role, text, image) {
  const msgBox = document.getElementById('ai-messages');
  if (!msgBox) return;
  
  const div = document.createElement('div');
  div.className = `message-bubble message-${role === 'user' ? 'user' : 'ai'}`;
  
  if (image) {
    const img = document.createElement('img');
    img.src = `data:${image.mimeType};base64,${image.data}`;
    img.className = 'message-image';
    div.appendChild(img);
  }
  
  const content = document.createElement('div');
  content.innerHTML = parseMarkdown(text);
  div.appendChild(content);
  
  msgBox.appendChild(div);
  
  // Trigger KaTeX math rendering
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(content, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\[', display: true }
      ],
      throwOnError: false
    });
  }
  
  msgBox.scrollTop = msgBox.scrollHeight;
}

async function sendAIMessage(e) {
  if (e) e.preventDefault();
  
  const input = document.getElementById('ai-msg-input');
  let text = input.value.trim();
  if (!text && !_attachedImage) return;
  
  if (!S.geminiKey) {
    alert('Lütfen öncelikle sağ üstteki API Ayarlarından ücretsiz bir Gemini API Anahtarı girin.');
    openGeminiConfig();
    return;
  }
  
  // Default prompt if only image is sent
  if (_attachedImage && !text) {
    text = "Bu resimdeki soruyu çözüp açıklar mısın?";
  }
  
  const userMsg = { role: 'user', text: text, image: _attachedImage };
  S.aiChatHistory.push(userMsg);
  save('aiChatHistory');
  
  // Render user message immediately
  renderAIMessage('user', text, _attachedImage);
  
  input.value = '';
  const attachedImgCopy = _attachedImage; // Keep reference before resetting
  removeAttachedImage();
  tone(880, 0.1);
  
  // Render typing indicator bubble
  const msgBox = document.getElementById('ai-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message-bubble message-ai';
  typingDiv.id = 'ai-typing-indicator';
  typingDiv.innerHTML = `
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  msgBox.appendChild(typingDiv);
  msgBox.scrollTop = msgBox.scrollHeight;
  
  try {
    let success = false;
    let aiText = '';
    
    if (S.geminiKey.startsWith('gsk_')) {
      // ── GROQ API (OpenAI Compatible) ──
      const messages = [];
      
      // System instructions as system role
      messages.push({
        role: "system",
        content: "Sen YKS (Yükseköğretim Kurumları Sınavı) hazırlık sürecindeki öğrencilere yardımcı olan uzman bir yapay zeka çalışma asistanısın. Öğrencilerin sorduğu TYT/AYT sorularını, formülleri, ders konularını adım adım açıkla. Matematiksel ifadeleri LaTeX (örn: \\(x^2\\) veya \\[ \\int x dx \\]) formatında yaz. Her zaman Türkçe cevap ver, motive edici ve arkadaş canlısı ol."
      });
      
      // Only get last 12 messages for context
      const apiHistory = S.aiChatHistory.slice(-12);
      
      apiHistory.forEach(m => {
        const contentParts = [];
        if (m.image) {
          contentParts.push({
            type: "image_url",
            image_url: {
              url: `data:${m.image.mimeType};base64,${m.image.data}`
            }
          });
        }
        contentParts.push({
          type: "text",
          text: m.text || "Soruyu açıkla."
        });
        
        messages.push({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: contentParts
        });
      });
      
      const groqModels = ["llama-3.2-11b-vision-instruct", "llama-3.2-90b-vision-instruct", "llama-3.2-11b-vision-preview"];
      let lastErr = "";
      
      for (const model of groqModels) {
        try {
          const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${S.geminiKey}`
            },
            body: JSON.stringify({
              model: model,
              messages: messages,
              temperature: 0.7
            })
          });
          
          if (response.ok) {
            const resData = await response.json();
            aiText = resData.choices[0].message.content;
            success = true;
            break;
          } else {
            let errText = '';
            try {
              const errData = await response.json();
              errText = errData.error?.message || JSON.stringify(errData);
            } catch(e) {
              errText = await response.text();
            }
            lastErr = errText || `HTTP Hata Kodu ${response.status}`;
            if (response.status === 401 || (response.status === 400 && lastErr.includes('API key'))) {
              break;
            }
          }
        } catch (err) {
          lastErr = err.message;
        }
      }
      
      // Remove typing indicator
      const indicator = document.getElementById('ai-typing-indicator');
      if (indicator) indicator.remove();
      
      if (!success) {
        throw new Error(lastErr || 'Tüm Groq model denemeleri başarısız oldu.');
      }
      
    } else {
      // ── GEMINI API ──
      // Clean and alternate history (Gemini strict rules)
      const apiHistory = [];
      let lastRole = null;
      for (let i = 0; i < S.aiChatHistory.length; i++) {
        const msg = S.aiChatHistory[i];
        if (apiHistory.length === 0 && msg.role !== 'user') {
          continue;
        }
        if (lastRole === msg.role) {
          apiHistory[apiHistory.length - 1].text += "\n" + msg.text;
          if (msg.image) {
            apiHistory[apiHistory.length - 1].image = msg.image;
          }
        } else {
          apiHistory.push({ role: msg.role, text: msg.text, image: msg.image });
          lastRole = msg.role;
        }
      }
      
      // Only send last 12 messages of the cleaned alternating history
      const slicedHistory = apiHistory.slice(-12);
      
      // Ensure the sliced history still starts with a user turn
      while (slicedHistory.length > 0 && slicedHistory[0].role !== 'user') {
        slicedHistory.shift();
      }
      
      if (slicedHistory.length === 0) {
        slicedHistory.push({ role: 'user', text: text, image: attachedImgCopy });
      }
      
      const contents = slicedHistory.map((m, idx) => {
        const parts = [];
        if (m.image) {
          parts.push({
            inlineData: {
              mimeType: m.image.mimeType,
              data: m.image.data
            }
          });
        }
        
        let messageText = m.text || "Soruyu açıkla.";
        if (idx === 0) {
          messageText = `[Sistem Talimatı: Sen YKS (Yükseköğretim Kurumları Sınavı) hazırlık sürecindeki öğrencilere yardımcı olan uzman bir yapay zeka çalışma asistanısın. Öğrencilerin sorduğu TYT/AYT sorularını, formülleri, ders konularını adım adım açıkla. Matematiksel ifadeleri LaTeX (örn: \\(x^2\\) veya \\[ \\int x dx \\]) formatında yaz. Her zaman Türkçe cevap ver, motive edici ve arkadaş canlısı ol.]\n\nÖğrenci Sorusu: ${messageText}`;
        }
        
        parts.push({ text: messageText });
        return {
          role: m.role === 'user' ? 'user' : 'model',
          parts: parts
        };
      });
      
      const models = ['gemini-2.5-pro', 'gemini-2.0-flash-lite', 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-3.5-flash'];
      let firstModelError = '';
      let lastError = '';
      
      for (let i = 0; i < models.length; i++) {
        const model = models[i];
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${S.geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: contents
            })
          });
          
          if (response.ok) {
            const resData = await response.json();
            if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts) {
              aiText = resData.candidates[0].content.parts[0].text;
              success = true;
              break;
            }
          } else {
            let errText = '';
            try {
              const errData = await response.json();
              errText = errData.error?.message || JSON.stringify(errData);
            } catch(e) {
              errText = await response.text();
            }
            const currentError = errText || `HTTP Hata Kodu ${response.status}`;
            if (i === 0) {
              firstModelError = currentError;
            }
            lastError = currentError;
            // Only break loop if the API key itself is invalid, do not break on rate limits/quota limits
            if (response.status === 400 && (lastError.includes('API key') || lastError.includes('not valid'))) {
              break;
            }
          }
        } catch (err) {
          if (i === 0) {
            firstModelError = err.message;
          }
          lastError = err.message;
        }
      }
      
      // Remove typing indicator
      const indicator = document.getElementById('ai-typing-indicator');
      if (indicator) indicator.remove();
      
      if (!success) {
        throw new Error(firstModelError || lastError || 'Tüm model denemeleri başarısız oldu.');
      }
    }
    
    const aiMsg = { role: 'model', text: aiText };
    S.aiChatHistory.push(aiMsg);
    save('aiChatHistory');
    
    renderAIMessage('model', aiText);
    tone(1046, 0.15);
    
  } catch (err) {
    console.error(err);
    const indicator = document.getElementById('ai-typing-indicator');
    if (indicator) indicator.remove();
    
    const errorMsg = `⚠️ **Yapay Zeka Sunucu Hatası:**\n\n\`${err.message}\`\n\nLütfen bir süre sonra tekrar deneyin veya internet bağlantınızı kontrol edin.`;
    renderAIMessage('model', errorMsg);
    tone(300, 0.3);
  }
}

function parseMarkdown(text) {
  const mathBlocks = [];
  let placeholderCount = 0;
  
  // Replace $$...$$
  let processed = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
    const placeholder = `__MATH_BLOCK_DISPLAY_${placeholderCount++}__`;
    mathBlocks.push({ placeholder, content: `$$${math}$$` });
    return placeholder;
  });
  
  // Replace \[...\]
  processed = processed.replace(/\\\[([\s\S]*?)\\\]/g, (match, math) => {
    const placeholder = `__MATH_BLOCK_DISPLAY_${placeholderCount++}__`;
    mathBlocks.push({ placeholder, content: `\\[${math}\\]` });
    return placeholder;
  });

  // Replace \(...\)
  processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, (match, math) => {
    const placeholder = `__MATH_BLOCK_INLINE_${placeholderCount++}__`;
    mathBlocks.push({ placeholder, content: `\\(${math}\\)` });
    return placeholder;
  });
  
  // Escape HTML tags to prevent XSS
  let html = processed
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold text: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic text: *text* (avoiding underscores to protect LaTeX math subscripts)
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Code blocks: ```language ... ```
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, "<pre><code class=\"language-$1\">$2</code></pre>");

  // Inline code: `code`
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // Newlines to <br> (but not inside pre/code tags)
  const parts = html.split(/(<\/pre>)/);
  html = parts.map(p => {
    if (p.includes('<pre>') || p === '</pre>') return p;
    return p.replace(/\n/g, '<br>');
  }).join('');

  // Restore LaTeX math blocks
  mathBlocks.forEach(block => {
    html = html.replace(block.placeholder, block.content);
  });

  return html;
}

// ══════════════════════════════════════════════
// KARTOTEK / SORU DEFTERİ (INDEXEDDB & STORAGE)
// ══════════════════════════════════════════════
const DB_NAME = 'YKSNotebookDB_v2';
const DB_VERSION = 1;
const STORE_NAME = 'questions';
let _nbDb = null;
let _currentFolderId = null;
let _selectedFolderColor = 'purple';
let _notebookImageBase64 = null;
let _notebookImageMime = null;
let _viewingQuestionId = null;

function initNotebookDB() {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => {
      console.warn("IndexedDB başlatılamadı. LocalStorage yedek olarak kullanılacak.");
      resolve(null);
    };
    request.onsuccess = (e) => {
      _nbDb = e.target.result;
      resolve(_nbDb);
    };
    request.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

function saveNotebookQuestionToDB(q) {
  return new Promise((resolve) => {
    if (!_nbDb) {
      try {
        const localQs = JSON.parse(localStorage.getItem('ykso2_nb_fallback') || '[]');
        localQs.push(q);
        localStorage.setItem('ykso2_nb_fallback', JSON.stringify(localQs));
      } catch(e) {
        alert("Depolama alanı yetersiz! Lütfen tarayıcınızda yer açın veya çerezleri temizleyin.");
      }
      resolve();
      return;
    }
    const transaction = _nbDb.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(q);
    request.onsuccess = () => resolve();
    request.onerror = () => resolve();
  });
}

function getNotebookQuestionsFromDB() {
  return new Promise((resolve) => {
    if (!_nbDb) {
      resolve(JSON.parse(localStorage.getItem('ykso2_nb_fallback') || '[]'));
      return;
    }
    const transaction = _nbDb.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = () => resolve([]);
  });
}

function deleteNotebookQuestionFromDB(id) {
  return new Promise((resolve) => {
    if (!_nbDb) {
      const localQs = JSON.parse(localStorage.getItem('ykso2_nb_fallback') || '[]');
      const filtered = localQs.filter(q => q.id !== id);
      localStorage.setItem('ykso2_nb_fallback', JSON.stringify(filtered));
      resolve();
      return;
    }
    const transaction = _nbDb.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => resolve();
  });
}

function openCreateFolderModal() {
  document.getElementById('folder-name-input').value = '';
  _selectedFolderColor = 'purple';
  document.querySelectorAll('.notebook-color-pill').forEach(p => {
    p.classList.remove('active');
    if (p.getAttribute('data-color') === 'purple') p.classList.add('active');
  });
  document.getElementById('notebook-folder-modal').classList.remove('hidden');
  
  const container = document.getElementById('folder-colors-container');
  if (!container.dataset.listening) {
    container.dataset.listening = 'true';
    container.addEventListener('click', (e) => {
      const pill = e.target.closest('.notebook-color-pill');
      if (pill) {
        document.querySelectorAll('.notebook-color-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        _selectedFolderColor = pill.getAttribute('data-color');
      }
    });
  }
}

function closeCreateFolderModal() {
  document.getElementById('notebook-folder-modal').classList.add('hidden');
}

function createFolderSubmit() {
  const name = document.getElementById('folder-name-input').value.trim();
  if (!name) return;
  const newFolder = {
    id: 'f_' + Date.now(),
    name: name,
    color: _selectedFolderColor,
    date: Date.now()
  };
  S.notebookFolders.push(newFolder);
  save('notebookFolders');
  closeCreateFolderModal();
  renderFolders();
  tone(880, 0.15);
}

function openAddQuestionModal() {
  _notebookImageBase64 = null;
  _notebookImageMime = null;
  document.getElementById('nb-q-file').value = '';
  document.getElementById('nb-q-note-input').value = '';
  document.getElementById('nb-q-sol-input').value = '';
  
  const placeholder = document.getElementById('nb-q-placeholder');
  placeholder.innerHTML = `
    <i data-lucide="upload-cloud" style="width:32px; height:32px;"></i>
    <span>Tıkla ve Soru Fotoğrafı Yükle</span>
  `;
  lucide.createIcons();
  
  document.getElementById('notebook-question-modal').classList.remove('hidden');
}

function closeAddQuestionModal() {
  document.getElementById('notebook-question-modal').classList.add('hidden');
}

function handleNotebookImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    _notebookImageBase64 = evt.target.result.split(',')[1];
    _notebookImageMime = file.type;
    
    const placeholder = document.getElementById('nb-q-placeholder');
    placeholder.innerHTML = `
      <img src="${evt.target.result}" style="width:100%; height:100%; object-fit:contain;">
    `;
  };
  reader.readAsDataURL(file);
}

async function addQuestionToFolderSubmit() {
  if (!_notebookImageBase64) {
    alert("Lütfen sorunun fotoğrafını yükleyin.");
    return;
  }
  const note = document.getElementById('nb-q-note-input').value.trim();
  const solution = document.getElementById('nb-q-sol-input').value.trim();
  
  const newQ = {
    id: 'q_' + Date.now(),
    folderId: _currentFolderId,
    image: {
      data: _notebookImageBase64,
      mimeType: _notebookImageMime
    },
    note: note,
    solution: solution,
    date: Date.now()
  };
  
  await saveNotebookQuestionToDB(newQ);
  closeAddQuestionModal();
  renderFolderDetail(_currentFolderId);
  tone(1000, 0.15);
}

async function deleteFolder(id, event) {
  if (event) event.stopPropagation();
  if (!confirm("Bu klasörü ve içindeki tüm soruları silmek istediğine emin misin?")) return;
  
  const allQs = await getNotebookQuestionsFromDB();
  const folderQs = allQs.filter(q => q.folderId === id);
  for (const q of folderQs) {
    await deleteNotebookQuestionFromDB(q.id);
  }
  
  S.notebookFolders = S.notebookFolders.filter(f => f.id !== id);
  save('notebookFolders');
  renderFolders();
  tone(300, 0.2);
}

async function renderFolders() {
  const listEl = document.getElementById('notebook-folders-list');
  const emptyEl = document.getElementById('notebook-folders-empty');
  listEl.innerHTML = '';
  
  document.getElementById('notebook-folders-view').classList.remove('hidden');
  document.getElementById('notebook-detail-view').classList.add('hidden');
  document.getElementById('notebook-main-head').classList.remove('hidden');

  if (S.notebookFolders.length === 0) {
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');

  const allQs = await getNotebookQuestionsFromDB();

  S.notebookFolders.forEach(f => {
    const qCount = allQs.filter(q => q.folderId === f.id).length;
    const card = document.createElement('div');
    card.className = `folder-card glass glow-${f.color}`;
    card.onclick = () => openFolderDetail(f.id);
    
    card.innerHTML = `
      <button class="folder-delete-btn" onclick="deleteFolder('${f.id}', event)" title="Klasörü Sil">
        <i data-lucide="trash-2"></i>
      </button>
      <div class="folder-icon-wrap" style="background:rgba(255,255,255,0.03); color:var(--aurora-${f.color})">
        <i data-lucide="folder"></i>
      </div>
      <h3>${f.name}</h3>
      <span class="count-lbl">${qCount} Soru Kayıtlı</span>
    `;
    listEl.appendChild(card);
  });
  lucide.createIcons();
}

function openFolderDetail(id) {
  _currentFolderId = id;
  renderFolderDetail(id);
}

function backToFolders() {
  _currentFolderId = null;
  renderFolders();
}

async function renderFolderDetail(id) {
  const folder = S.notebookFolders.find(f => f.id === id);
  if (!folder) return;

  document.getElementById('notebook-folders-view').classList.add('hidden');
  document.getElementById('notebook-main-head').classList.add('hidden');
  document.getElementById('notebook-detail-view').classList.remove('hidden');

  document.getElementById('notebook-folder-title').textContent = folder.name;
  
  const listEl = document.getElementById('notebook-questions-list');
  const emptyEl = document.getElementById('notebook-questions-empty');
  listEl.innerHTML = '';

  const allQs = await getNotebookQuestionsFromDB();
  const folderQs = allQs.filter(q => q.folderId === id).sort((a,b) => b.date - a.date);

  document.getElementById('notebook-folder-meta').textContent = `Toplam ${folderQs.length} Soru`;

  if (folderQs.length === 0) {
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');

  folderQs.forEach(q => {
    const card = document.createElement('div');
    card.className = 'notebook-q-card';
    
    const formattedDate = new Date(q.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
    const previewImg = `data:${q.image.mimeType};base64,${q.image.data}`;

    card.innerHTML = `
      <button class="delete-icon-btn" onclick="deleteNotebookQuestion('${q.id}', event)" title="Soruyu Sil">
        <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
      </button>
      <div class="notebook-q-img-wrap" onclick="viewQuestionDetails('${q.id}')">
        <img src="${previewImg}">
      </div>
      <div class="notebook-q-body">
        <p class="notebook-q-note">${q.note || 'Not eklenmemiş.'}</p>
        <div class="notebook-q-meta">
          <span>${formattedDate}</span>
          <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="viewQuestionDetails('${q.id}')">Detay & Çözüm</button>
        </div>
      </div>
    `;
    listEl.appendChild(card);
  });
  lucide.createIcons();
}

async function deleteNotebookQuestion(id, event) {
  if (event) event.stopPropagation();
  if (!confirm("Bu soruyu silmek istediğine emin misin?")) return;
  await deleteNotebookQuestionFromDB(id);
  renderFolderDetail(_currentFolderId);
  tone(300, 0.2);
}

async function viewQuestionDetails(id) {
  _viewingQuestionId = id;
  const allQs = await getNotebookQuestionsFromDB();
  const q = allQs.find(item => item.id === id);
  if (!q) return;

  const previewImg = `data:${q.image.mimeType};base64,${q.image.data}`;
  document.getElementById('nb-view-img').src = previewImg;
  document.getElementById('nb-view-note').textContent = q.note || 'Eklenmiş bir not yok.';
  
  const solBox = document.getElementById('nb-view-sol-box');
  if (q.solution) {
    solBox.classList.remove('hidden');
    document.getElementById('nb-view-sol').textContent = q.solution;
  } else {
    solBox.classList.add('hidden');
  }

  const delBtn = document.getElementById('nb-view-delete-btn');
  delBtn.onclick = async () => {
    closeViewQuestionModal();
    await deleteNotebookQuestion(q.id);
  };

  document.getElementById('notebook-view-modal').classList.remove('hidden');
}

function closeViewQuestionModal() {
  document.getElementById('notebook-view-modal').classList.add('hidden');
  _viewingQuestionId = null;
}

async function sendToAIFromNotebook() {
  if (!_viewingQuestionId) return;
  const allQs = await getNotebookQuestionsFromDB();
  const q = allQs.find(item => item.id === _viewingQuestionId);
  if (!q) return;

  _attachedImage = {
    data: q.image.data,
    mimeType: q.image.mimeType
  };

  const imgBox = document.getElementById('ai-img-preview-box');
  const img = document.getElementById('ai-img-preview');
  const name = document.getElementById('ai-img-name');

  img.src = `data:${q.image.mimeType};base64,${q.image.data}`;
  name.textContent = "defterden_soru.jpg";
  imgBox.classList.remove('hidden');

  closeViewQuestionModal();
  
  goTo('ai', document.querySelector('.side-btn[onclick*="ai"]'));
  
  const input = document.getElementById('ai-msg-input');
  input.value = "Bu defterimdeki soruyu benim için çözüp açıklar mısın?";
  input.focus();
  
  tone(1000, 0.1);
}

// ── Mobile More Bottom Sheet Actions ──
function openMobileMoreSheet() {
  const sheet = document.getElementById('mobile-more-sheet');
  const content = document.getElementById('more-sheet-content');
  sheet.classList.remove('hidden');
  sheet.style.display = 'flex';
  setTimeout(() => {
    content.style.transform = 'translateY(0)';
  }, 10);
  tone(880, 0.08);
}

function closeMobileMoreSheet() {
  const sheet = document.getElementById('mobile-more-sheet');
  const content = document.getElementById('more-sheet-content');
  content.style.transform = 'translateY(100%)';
  setTimeout(() => {
    sheet.classList.add('hidden');
    sheet.style.display = 'none';
  }, 300);
}

function triggerMobileNav(sec) {
  closeMobileMoreSheet();
  if (sec === 'settings-api') {
    openGeminiConfig();
  } else {
    const sideBtn = document.querySelector(`.side-btn[onclick*="${sec}"]`);
    goTo(sec, sideBtn);
  }
}

// ── Away Toast Notification ──
function showAwayToast(awayText) {
  // Remove existing toast if any
  const existing = document.getElementById('away-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'away-toast';
  toast.innerHTML = `
    <div class="away-toast-icon">👋</div>
    <div class="away-toast-body">
      <strong>Tekrar hoş geldin!</strong>
      <span>${awayText} uzaktaydın. Zamanlayıcın çalışmaya devam etti.</span>
    </div>
    <button onclick="this.parentElement.remove()" class="away-toast-close">&times;</button>
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto dismiss after 6 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.remove('show');
      setTimeout(() => { if (toast.parentElement) toast.remove(); }, 400);
    }
  }, 6000);

  tone(660, 0.12, 'sine');
}

// ── Streak Calculation ──
function calculateStreak() {
  const studyDates = new Set();
  if (S.sessions) {
    S.sessions.forEach(s => {
      const d = new Date(s.ts);
      studyDates.add(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
    });
  }

  const restDays = new Set(S.restDays || []);
  
  let streak = 0;
  let checkDate = new Date(); // Start from today
  
  for (let i = 0; i < 365; i++) {
    const y = checkDate.getFullYear();
    const m = String(checkDate.getMonth() + 1).padStart(2, '0');
    const r = String(checkDate.getDate()).padStart(2, '0');
    const checkStr = `${y}-${m}-${r}`;
    
    const isToday = (i === 0);
    
    if (studyDates.has(checkStr)) {
      streak++;
    } else if (restDays.has(checkStr)) {
      // Rest day: streak is frozen (neither incremented nor broken)
    } else {
      // Not studied, not a rest day
      if (isToday) {
        // Today: they still have time to study, don't break yet!
      } else {
        // Yesterday or earlier: streak is broken!
        break;
      }
    }
    checkDate.setDate(checkDate.getDate() - 1);
  }
  return streak;
}

// ── Backup Export / Import ──
async function exportBackup() {
  try {
    const backupData = JSON.parse(JSON.stringify(S));
    // Fetch all IndexedDB questions to pack into backup
    const dbQs = await getNotebookQuestionsFromDB();
    backupData.indexedDBQuestions = dbQs;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `yks_odak_yedek_${today()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    tone(880, 0.1, 'sine');
  } catch(err) {
    alert("Yedek oluşturulurken hata: " + err.message);
  }
}

function importBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (!parsed.plans && !parsed.sessions && !parsed.nets) {
        alert("Geçersiz yedek dosyası!");
        return;
      }

      if (confirm("Bu yedeği yüklemek istediğine emin misin? Mevcut tüm verilerin silinecek ve yedekteki veriler yazılacaktır.")) {
        // Restore localstorage keys
        const keys = ['plans','sessions','nets','questions','topics','dailyGoal','theme','stopwatch','pomodoro','geminiKey','aiChatHistory','notebookFolders','examDates','restDays','tokens','restPasses','unlockedItems','activeTheme','activeTitle','lastStreakClaim','pendingStudySeconds','duelNickname','duelGroupCode','userId','duelGroupEditKey'];
        keys.forEach(k => {
          if (parsed[k] !== undefined) {
            localStorage.setItem('ykso2_' + k, JSON.stringify(parsed[k]));
          }
        });

        // Restore IndexedDB questions if they exist in backup
        if (parsed.indexedDBQuestions && _nbDb) {
          const transaction = _nbDb.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          
          // Clear current store first
          store.clear();
          
          // Add each question
          for (const q of parsed.indexedDBQuestions) {
            store.put(q);
          }
        }

        alert("Veriler başarıyla geri yüklendi! Sayfa yenileniyor...");
        window.location.reload();
      }
    } catch(err) {
      alert("Dosya yüklenirken hata oluştu: " + err.message);
    }
  };
  reader.readAsText(file);
}

// ── Deneme Takvimi (Exam Dates) ──
function openExamModal() {
  document.getElementById('exam-name-input').value = '';
  document.getElementById('exam-date-input').value = today();
  document.getElementById('exam-modal').classList.remove('hidden');
}

function closeExamModal() {
  document.getElementById('exam-modal').classList.add('hidden');
}

function addExam() {
  const name = document.getElementById('exam-name-input').value.trim();
  const dateVal = document.getElementById('exam-date-input').value;
  if (!name || !dateVal) return;

  const newExam = {
    id: 'e_' + Date.now(),
    name: name,
    date: dateVal
  };

  S.examDates = S.examDates || [];
  S.examDates.push(newExam);
  save('examDates');
  closeExamModal();
  renderExams();
  tone(880, 0.1, 'sine');
}

function deleteExam(id) {
  if (!confirm("Bu sınavı takvimden silmek istediğine emin misin?")) return;
  S.examDates = S.examDates.filter(e => e.id !== id);
  save('examDates');
  renderExams();
  tone(300, 0.15, 'sine');
}

function renderExams() {
  const container = document.getElementById('exam-list');
  if (!container) return;
  container.innerHTML = '';

  S.examDates = S.examDates || [];

  if (S.examDates.length === 0) {
    container.innerHTML = `
      <div class="empty" style="padding:1.25rem 0">
        <i data-lucide="calendar-days"></i>
        <p>Henüz deneme sınavı eklenmedi.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Sort exams by date (upcoming first)
  const sortedExams = [...S.examDates].sort((a, b) => new Date(a.date) - new Date(b.date));

  const todayMidnight = new Date();
  todayMidnight.setHours(0,0,0,0);

  sortedExams.forEach(e => {
    const examDate = new Date(e.date);
    examDate.setHours(0,0,0,0);

    const diffTime = examDate - todayMidnight;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let badgeClass = 'upcoming';
    let countdownText = '';

    if (diffDays > 0) {
      countdownText = `${diffDays} gün`;
    } else if (diffDays === 0) {
      countdownText = 'Bugün';
    } else {
      badgeClass = 'past';
      countdownText = 'Geçti';
    }

    const formattedDate = new Date(e.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    const item = document.createElement('div');
    item.className = 'exam-item';
    item.innerHTML = `
      <div class="exam-info">
        <div class="exam-countdown-badge ${badgeClass}">${countdownText}</div>
        <div class="exam-detail">
          <span class="exam-name">${e.name}</span>
          <span class="exam-date-lbl">${formattedDate}</span>
        </div>
      </div>
      <button class="exam-del-btn" onclick="deleteExam('${e.id}')" title="Sınavı Sil">
        <i data-lucide="trash-2" style="width:16px; height:16px;"></i>
      </button>
    `;
    container.appendChild(item);
  });
  lucide.createIcons();
}

// ── Toggle Today Rest Day ──
function toggleTodayRestDay() {
  const todayStrVal = today();
  S.restDays = S.restDays || [];
  S.restPasses = S.restPasses || 0;
  
  if (S.restDays.includes(todayStrVal)) {
    // Cancel rest day: refund rest pass
    S.restDays = S.restDays.filter(d => d !== todayStrVal);
    S.restPasses++;
    save('restDays');
    save('restPasses');
    tone(600, 0.15, 'sine');
    showAwayToast(`☀️ Dinlenme günü iptal edildi. 1 Dinlenme Kartı iade edildi! Kalan: 🌴 ${S.restPasses}`);
  } else {
    // Check weekly rest day limit (maximum 3 rest days per week)
    const { mon, sun } = weekBounds();
    const thisWeekRestDaysCount = S.restDays.filter(d => d >= mon && d <= sun).length;
    if (thisWeekRestDaysCount >= 3) {
      alert("⚠️ Haftalık dinlenme günü sınırına ulaştın! Bir haftada en fazla 3 gün dinlenebilirsin.");
      return;
    }

    // Declare rest day: cost 1 rest pass
    if (S.restPasses < 1) {
      alert("⚠️ Yeterli Dinlenme Kartın yok! Mağazadan 20 Token karşılığında satın alabilirsin.");
      goTo('shop');
      return;
    }
    S.restDays.push(todayStrVal);
    S.restPasses--;
    save('restDays');
    save('restPasses');
    tone(880, 0.15, 'sine');
    showAwayToast(`🌴 Bugün dinlenme günü olarak ayarlandı. 1 Dinlenme Kartı kullanıldı! Kalan: 🌴 ${S.restPasses}`);
  }
  
  updateSummary();
}

// ── Study Session Recorder (Gamified) ──
function addStudySession(type, ders, secs) {
  S.sessions = S.sessions || [];
  S.sessions.push({ id: Date.now(), ts: Date.now(), ders, dur: secs, type });
  
  // Calculate tokens: +1 Token for every 30 minutes (1800 seconds) of study
  S.pendingStudySeconds = (S.pendingStudySeconds || 0) + secs;
  const earned = Math.floor(S.pendingStudySeconds / 1800);
  if (earned > 0) {
    S.tokens = (S.tokens || 0) + earned;
    S.pendingStudySeconds = S.pendingStudySeconds % 1800;
    save('tokens');
    save('pendingStudySeconds');
    setTimeout(() => {
      showAwayToast(`🪙 Tebrikler! Çalışarak ${earned} Token kazandın! Toplam: 🪙 ${S.tokens}`);
    }, 1000);
  }
  
  save('sessions');
  renderSessions();
  updateSummary();
}

// ── Daily Streak Token Claimer ──
function checkDailyStreakClaim() {
  const todayStr = today();
  S.lastStreakClaim = S.lastStreakClaim || '';
  
  // Update equipped title badge on start
  updateTitleBadgeUI();

  if (S.lastStreakClaim === todayStr) return; // Already claimed today

  const streak = calculateStreak();
  if (streak > 0) {
    S.tokens = (S.tokens || 0) + streak;
    S.lastStreakClaim = todayStr;
    save('tokens');
    save('lastStreakClaim');
    
    // Play a nice success sound and show claim toast
    setTimeout(() => {
      [523.25, 659.25, 783.99].forEach((f, i) => {
        setTimeout(() => tone(f, 0.2, 'sine', 0.1), i * 120);
      });
      showAwayToast(`🔥 Günlük Giriş! ${streak} günlük serin için +${streak} Token kazandın!`);
    }, 2000);
  }
}

// ── Shop Renderer ──
function renderShop() {
  // Update unlocks first
  const stats = checkTitleUnlocks();

  S.tokens = S.tokens || 0;
  S.restPasses = S.restPasses || 0;
  S.unlockedItems = S.unlockedItems || ['theme-light', 'theme-dark'];
  S.activeTheme = S.activeTheme || 'default';
  S.activeTitle = S.activeTitle || 'none';

  // Update counters
  const tokCounter = document.getElementById('shop-token-count');
  const passCounter = document.getElementById('shop-pass-count');
  if (tokCounter) tokCounter.textContent = S.tokens;
  if (passCounter) passCounter.textContent = S.restPasses;

  // Render Theme item buttons
  const themes = ['theme_retro', 'theme_forest', 'theme_space'];
  themes.forEach(t => {
    const btn = document.querySelector(`#shop-item-${t} button`);
    if (!btn) return;
    
    if (S.unlockedItems.includes(t)) {
      if (S.activeTheme === t) {
        btn.textContent = 'Aktif';
        btn.className = 'btn btn-secondary';
        btn.disabled = true;
      } else {
        btn.textContent = 'Aktif Et';
        btn.className = 'btn btn-primary';
        btn.disabled = false;
      }
    } else {
      btn.innerHTML = `<i data-lucide="lock" style="width:12px; height:12px; display:inline; vertical-align:middle; margin-right:4px;"></i>150 Token`;
      btn.className = 'btn btn-primary';
      btn.disabled = false;
    }
  });

  // Render Title item buttons (Achievement locked)
  const titles = ['title_derece', 'title_pomo', 'title_night'];
  titles.forEach(t => {
    const btn = document.querySelector(`#shop-item-${t} button`);
    const descEl = document.querySelector(`#shop-item-${t} .shop-item-desc`);
    if (!btn) return;

    // Update progress texts dynamically
    if (descEl) {
      if (t === 'title_derece') {
        const hrs = Math.floor(stats.totalSecs / 3600);
        descEl.textContent = `Toplamda en az 250 saat aktif çalışma. (İlerleme: ${hrs} / 250 saat)`;
      } else if (t === 'title_pomo') {
        descEl.textContent = `En az 150 Pomodoro tamamla. (İlerleme: ${stats.pomodorosCount} / 150 Pomodoro)`;
      } else if (t === 'title_night') {
        const nightHrs = Math.floor(stats.nightSecs / 3600);
        descEl.textContent = `Gece 23:00 - 05:00 arası en az 80 saat çalışma. (İlerleme: ${nightHrs} / 80 saat)`;
      }
    }

    if (S.unlockedItems.includes(t)) {
      if (S.activeTitle === t) {
        btn.textContent = 'Kuşanıldı';
        btn.className = 'btn btn-secondary';
        btn.disabled = true;
      } else {
        btn.textContent = 'Kuşan';
        btn.className = 'btn btn-primary';
        btn.disabled = false;
      }
    } else {
      btn.innerHTML = `<i data-lucide="lock" style="width:12px; height:12px; display:inline; vertical-align:middle; margin-right:4px;"></i>Kilitli`;
      btn.className = 'btn btn-secondary';
      btn.disabled = true;
    }
  });

  // Render Music item buttons
  const sounds = ['sound_rain', 'sound_lofi', 'sound_forest'];
  sounds.forEach(s => {
    const btn = document.querySelector(`#shop-item-${s} button`);
    if (!btn) return;

    const prices = { sound_rain: 100, sound_lofi: 120, sound_forest: 100 };

    if (S.unlockedItems.includes(s)) {
      const isPlaying = _activeAmbientId === s;
      btn.textContent = isPlaying ? 'Durdur' : 'Çal';
      btn.className = isPlaying ? 'btn btn-danger' : 'btn btn-secondary';
      btn.disabled = false;
    } else {
      btn.innerHTML = `<i data-lucide="lock" style="width:12px; height:12px; display:inline; vertical-align:middle; margin-right:4px;"></i>${prices[s]} Token`;
      btn.className = 'btn btn-primary';
      btn.disabled = false;
    }
  });

  lucide.createIcons();
}

// ── Buy Shop Item ──
function buyShopItem(itemId, price) {
  S.tokens = S.tokens || 0;
  if (S.tokens < price) {
    alert(`⚠️ Yeterli token'ın yok! Bu ürün ${price} Token değerinde. Senin ise ${S.tokens} Token'ın var.`);
    return false;
  }

  S.tokens -= price;
  save('tokens');
  tone(880, 0.2, 'sine');
  
  if (itemId === 'rest_pass') {
    S.restPasses = (S.restPasses || 0) + 1;
    save('restPasses');
    showAwayToast(`🌴 1 adet Dinlenme Kartı satın alındı! Kalan Token: 🪙 ${S.tokens}`);
  } else {
    S.unlockedItems = S.unlockedItems || ['theme-light', 'theme-dark'];
    S.unlockedItems.push(itemId);
    save('unlockedItems');
    showAwayToast(`🎉 Tebrikler! Yeni ürünün kilidi açıldı!`);
  }

  renderShop();
  return true;
}

// ── Themes Manager ──
function handleThemeItemClick(themeId, price) {
  S.unlockedItems = S.unlockedItems || ['theme-light', 'theme-dark'];
  if (S.unlockedItems.includes(themeId)) {
    // Equip theme
    S.activeTheme = themeId;
    save('activeTheme');
    applyTheme();
    showAwayToast('🎨 Tema başarıyla değiştirildi!');
    renderShop();
  } else {
    // Buy theme
    buyShopItem(themeId, price);
  }
}

// ── Titles Manager ──
function handleTitleItemClick(titleId, price) {
  S.unlockedItems = S.unlockedItems || ['theme-light', 'theme-dark'];
  if (S.unlockedItems.includes(titleId)) {
    // Equip title
    if (S.activeTitle === titleId) {
      S.activeTitle = 'none';
    } else {
      S.activeTitle = titleId;
    }
    save('activeTitle');
    updateTitleBadgeUI();
    showAwayToast('👑 Ünvanın güncellendi!');
    renderShop();
  } else {
    // Buy title
    buyShopItem(titleId, price);
  }
}

function updateTitleBadgeUI() {
  const badgeEl = document.getElementById('user-title-badge');
  if (!badgeEl) return;

  const titleLabels = {
    title_derece: 'Derece Canavarı',
    title_pomo: 'Pomodoro Üstadı',
    title_night: 'Gece Kuşu'
  };

  const current = S.activeTitle || 'none';
  if (current === 'none' || !titleLabels[current]) {
    badgeEl.style.display = 'none';
  } else {
    badgeEl.textContent = titleLabels[current];
    badgeEl.style.display = 'inline-block';
  }
}

// ── Ambient Music Controller ──
let _ambientAudio = null;
let _activeAmbientId = null;

const SOUND_URLS = {
  sound_rain: 'https://www.soundjay.com/nature/sounds/rain-07.mp3',
  sound_lofi: 'https://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Playa_d_En_Bossa_Mix.mp3',
  sound_forest: 'https://www.soundjay.com/nature/sounds/forest-wind-01.mp3'
};

function handleSoundItemClick(soundId, price) {
  S.unlockedItems = S.unlockedItems || ['theme-light', 'theme-dark'];
  if (S.unlockedItems.includes(soundId)) {
    toggleAmbientSound(soundId);
  } else {
    buyShopItem(soundId, price);
  }
}

function toggleAmbientSound(soundId) {
  if (_activeAmbientId === soundId) {
    // Stop playing
    stopAmbientSound();
  } else {
    // Play selected sound
    playAmbientSound(soundId);
  }
  renderShop();
}

function playAmbientSound(soundId) {
  stopAmbientSound();

  const url = SOUND_URLS[soundId];
  if (!url) return;

  _ambientAudio = new Audio(url);
  _ambientAudio.loop = true;
  _ambientAudio.volume = 0.4;
  
  _ambientAudio.play().catch(e => {
    console.error("Audio playback error:", e);
    alert("Ses oynatılamadı. Lütfen sayfada bir yere tıkladıktan sonra tekrar dene.");
  });

  _activeAmbientId = soundId;
}

function stopAmbientSound() {
  if (_ambientAudio) {
    _ambientAudio.pause();
    _ambientAudio = null;
  }
  _activeAmbientId = null;
}

// ── Achievement Titles Unlocks Checker ──
function checkTitleUnlocks() {
  const stats = {
    totalSecs: 0,
    pomodorosCount: 0,
    nightSecs: 0
  };

  if (S.sessions) {
    S.sessions.forEach(s => {
      stats.totalSecs += s.dur;
      if (s.type === 'pomodoro') stats.pomodorosCount++;
      
      const date = new Date(s.ts);
      const hrs = date.getHours();
      if (hrs >= 23 || hrs < 5) {
        stats.nightSecs += s.dur;
      }
    });
  }

  const unlocked = ['theme-light', 'theme-dark'];
  if (stats.totalSecs >= 250 * 3600) unlocked.push('title_derece');
  if (stats.pomodorosCount >= 150) unlocked.push('title_pomo');
  if (stats.nightSecs >= 80 * 3600) unlocked.push('title_night');

  S.unlockedItems = S.unlockedItems || [];
  unlocked.forEach(item => {
    if (!S.unlockedItems.includes(item)) {
      S.unlockedItems.push(item);
    }
  });
  save('unlockedItems');

  return stats;
}



