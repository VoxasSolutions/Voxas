"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 md:bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 animate-whatsapp-pulse"
      style={{
        background: "#25D366",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" fill="white" />
    </a>
  );
}
