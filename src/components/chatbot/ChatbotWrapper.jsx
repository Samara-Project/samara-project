import { useEffect } from "react";

export default function ChatbotWrapper() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/chatbot/chatbot.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const CHAT_HTML = `
<div id="samara-chatbot">
  <div class="chat-button" id="chatButton">
        <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
    </div>

    <div class="chat-container" id="chatContainer">
        <div class="chat-header">
            <div>
                <h3>Samara Chocolates</h3>
                <small>Luxury Artisan Chocolate</small>
            </div>
            <button class="close-btn" id="closeBtn">&times;</button>
        </div>

        <div class="chat-messages" id="chatMessages"></div>
        <div class="quick-replies" id="quickReplies"></div>
    </div>
</div>
`

  return (
    <div className='z-[99999] fixed bottom-0 right-0'>
      <link rel="stylesheet" href="/chatbot/chatbot.css" />
      <div
        dangerouslySetInnerHTML={{
          __html: CHAT_HTML
        }}
      />
    </div>
  );
}
