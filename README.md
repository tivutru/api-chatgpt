🔄 Các API ChatGPT miễn phí hoặc có free-tier
1. 🌀 OpenRouter
Proxy nhiều mô hình LLM: ChatGPT, Claude, Mistral, Mixtral, Gemini, v.v.

Free-tier: Có nhiều mô hình cho phép dùng miễn phí (Mistral, Gemma...).

Cấu trúc gọi giống OpenAI nên rất dễ tích hợp.

API endpoint: https://openrouter.ai/api/v1/chat/completions

Cần token, đăng nhập miễn phí tại https://openrouter.ai

Một lựa chọn rất tốt để dùng ChatGPT (và nhiều mô hình mạnh khác như Claude, Mistral, Mixtral...) miễn phí hoặc rẻ hơn là OpenRouter.ai. Đây là một API tương thích với OpenAI, nên bạn có thể chuyển đổi dễ dàng.

✅ Ưu điểm:
Hỗ trợ nhiều mô hình (GPT-3.5, GPT-4, Claude, Mistral, Mixtral, Gemini...).

Có quota miễn phí (tùy mô hình).

Dễ dùng, API tương thích OpenAI.



📞 Liên hệ Zalo & Facebook
📱 Zalo: 0835084666
🌐 Facebook: https://www.facebook.com/HoangQuan.Developer



🚀 Cách chạy API ChatGPT
🔓 Bước 1: Mở cổng (Open Port)
1️⃣ Mở Control Panel > System and Security > Windows Defender Firewall
2️⃣ Chọn Advanced settings (góc trái trên cùng)
3️⃣ Chọn Inbound Rules > Nhấn New Rule... (bên phải)
4️⃣ Chọn Port ➜ ấn Next
5️⃣ Nhập 8899 ➜ ấn Next 3 lần
6️⃣ Đặt tên là: open port 8899
7️⃣ Nhấn Finish ✅

📦 Bước 2: Cài đặt và chạy API ChatGPT
1️⃣ Vào thư mục api-chatgpt
2️⃣ Mở terminal tại thư mục đó và chạy lệnh:
npm i
3️⃣ Sau đó chạy:
npm start
✅ Kết quả
Nếu thành công, terminal sẽ hiển thị:
✅ API GPT đang chạy tại http://localhost:8899/gpt?text=hello

{
  "success": true,
  "reply": "Hello! How can I assist you today?"
}

🔧 Cách dùng OpenRouter thay thế OpenAI:
1. Tạo tài khoản & lấy API key:
Truy cập https://openrouter.ai

Đăng nhập (Google hoặc Discord).

Vào Dashboard và tạo API key
 



🔑 Cách lấy API Key từ OpenRouter
Truy cập trang chủ:
👉 https://openrouter.ai

Đăng nhập / Đăng ký:

Nhấn Sign in ở góc phải.

Bạn có thể dùng tài khoản Google, Discord hoặc email để đăng nhập.

Chấp nhận điều khoản & tạo khóa:

Sau khi đăng nhập, vào link sau để tạo API key:
👉 https://openrouter.ai/keys

Nhấn "Create key" để tạo một API key mới.

Copy key và dán vào file .env của bạn:
Ví dụ:  OPENROUTER_API_KEY=sk-your-openrouter-key





