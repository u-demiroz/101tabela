"use client";
import Link from "next/link";

export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e1e1e" }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 20, color: "#f59e0b", textDecoration: "none" }}>101 Tabela</Link>
        <Link href="/" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>← Ana Sayfa</Link>
      </nav>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 32px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Gizlilik Politikası</h1>
        <p style={{ color: "#64748b", marginBottom: 40, fontSize: 14 }}>Son güncelleme: Nisan 2026</p>

        {[
          { title: "1. Toplanan Veriler", text: "101 Tabela uygulaması herhangi bir kişisel veri toplamamaktadır. Uygulama tamamen çevrimdışı çalışmaktadır ve oyun skorları yalnızca cihazınızda saklanmaktadır." },
          { title: "2. Üçüncü Taraf Hizmetler", text: "Uygulama, Google AdMob aracılığıyla reklam göstermektedir. AdMob, reklam kişiselleştirme amacıyla cihaz bilgileri toplayabilir. Daha fazla bilgi için Google'ın gizlilik politikasını inceleyebilirsiniz." },
          { title: "3. Çocukların Gizliliği", text: "Bu uygulama 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamamaktadır." },
          { title: "4. Veri Güvenliği", text: "Hiçbir veri sunucularımıza iletilmemektedir. Tüm veriler yalnızca yerel cihazınızda saklanır." },
          { title: "5. İletişim", text: "Gizlilik politikamız hakkında sorularınız için: ugur@ugurdemiroz.com adresine ulaşabilirsiniz." },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f59e0b", marginBottom: 10 }}>{s.title}</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>{s.text}</p>
          </div>
        ))}
      </main>
      <footer style={{ textAlign: "center", padding: "40px 32px", color: "#475569", fontSize: 13, borderTop: "1px solid #1e1e1e" }}>
        <p>© 2026 Uğur Demiröz</p>
      </footer>
    </div>
  );
}
