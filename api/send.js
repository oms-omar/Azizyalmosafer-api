export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, visa } = req.body;

  const BOT_TOKEN = "8671295214:AAGvAGN-beKK2I7AIvoY6xkmo7MRb3QXOVo";
  const CHAT_ID = "8641368325";

  const message = `
🚀 عميل جديد

👤 الاسم: ${name}
📞 الجوال: ${phone}
🌍 التأشيرة: ${visa}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ success: false });
  }
}