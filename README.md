# 🌌 YKS Odak — Premium Çalışma Asistanı

YKS sınavına hazırlık sürecinde odaklanmayı artıran, çalışmaları takip eden ve gelişimi grafiklerle gösteren modern bir web uygulaması.

## 🔗 Canlı Demo

> Netlify üzerinden yayında — [Siteyi Ziyaret Et](https://your-netlify-url.netlify.app)

---

## ✨ Özellikler

- **⏱️ Pomodoro Zamanlayıcısı** — Yıldız serisi, sesli bildirimler, dairesel animasyon
- **🏪 YKS Mağaza & Ünvanlar** — Kazanılan tokenler ile premium temalar ve dinlenme günleri satın alma
- **🏆 Başarıma Bağlı Ünvanlar** — Derece Canavarı (250s çalışma), Pomodoro Üstadı (150 Pomo) ve Gece Kuşu (80s gece çalışması) başarımları ile açılan kilitli ünvan sistemi
- **🔥 4 Saatlik Streak Barajı** — Günlük serileri (streak) korumak ve geliştirmek için günde en az 4 saat çalışma şartı
- **🔋 Haftalık Dinlenme Günü Sınırı** — Haftada en fazla 3 dinlenme günü kullanımı ile dengeli ve planlı çalışma disiplini
- **⌚ Kronometre** — Ders bazlı süre ölçümü ve oturum kaydetme
- **📋 Çalışma Planı** — Günlük, haftalık, aylık görev yönetimi
- **📈 Net Takipçisi** — TYT/AYT deneme sonuçları ve gelişim grafiği
- **#️⃣ Soru Sayacı** — Doğru/yanlış takibi ve günlük hedef
- **📖 Konu Takipçisi** — MEB müfredatına göre tüm TYT ve AYT konuları
- **📊 Özet & İstatistik** — Haftalık çalışma grafiği ve ders dağılımı
- **🎯 YKS Geri Sayımı** — YKS 2027'ye kalan süre
- **📱 PWA Desteği** — Telefona uygulama olarak yüklenebilir
- **🌙 Karanlık/Açık Tema**
- **💾 Offline Çalışma** — İnternetsiz de kullanılabilir (Local-first)

---

## 🎨 Tasarım

**"Aurora"** teması — Kuzey ışıkları ilhamlı kozmik tasarım:
- Akan aurora gradient animasyonları
- Glassmorphism kart tasarımı
- Neon glow efektleri
- Mobil için frosted cam alt navigasyon barı
- Konfeti kutlama animasyonları

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Amaç |
|-----------|------|
| HTML5 | Uygulama yapısı |
| CSS3 | Aurora animasyonları, glassmorphism tasarım |
| JavaScript (Vanilla) | Tüm uygulama mantığı |
| Chart.js | Net gelişim ve haftalık çalışma grafikleri |
| Web Audio API | Pomodoro ve bildirim sesleri |
| LocalStorage API | Verilerin yerel cihazda saklanması |
| Service Worker | Offline PWA desteği |
| Lucide Icons | İkon seti |

---

## 📁 Proje Yapısı

```
yks-study-planner/
├── index.html      # Ana uygulama sayfası
├── style.css       # Aurora teması ve tüm stiller
├── app.js          # Uygulama mantığı
├── manifest.json   # PWA manifest
├── sw.js           # Service Worker (offline destek)
└── icons/
    └── icon-512.jpg  # Uygulama ikonu
```

---

## 🚀 Yerel Kurulum

Herhangi bir kurulum gerekmez! Projeyi klonlayıp `index.html` dosyasını tarayıcınızda açmanız yeterli:

```bash
git clone https://github.com/KULLANICI_ADIN/yks-study-planner.git
cd yks-study-planner
# index.html dosyasını tarayıcıda açın
```

---

## 📱 Telefona Yükleme (PWA)

1. Siteyi Chrome veya Safari ile açın
2. Tarayıcı menüsünden **"Ana Ekrana Ekle"** seçin
3. Uygulama telefonda ikonla açılır

---

## 💡 Veri Güvenliği

Tüm veriler (planlar, oturumlar, deneme sonuçları) **yalnızca tarayıcınızın LocalStorage**'ında saklanır. Hiçbir veri sunucuya gönderilmez.

> ⚠️ Tarayıcı geçmişini temizlerken bu siteye ait verileri koruyun.

---

## 👨‍💻 Geliştirici

Bu proje YKS'ye hazırlanan öğrenciler için geliştirilmiştir.

---

⭐ Beğendiyseniz yıldız vermeyi unutmayın!
