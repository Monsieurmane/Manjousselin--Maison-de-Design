import { Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

const TikTokIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const PinterestIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="17" x2="10" y2="22" />
    <path d="M8 21c1-1.5 1.5-4 2-6" />
    <path d="M15.5 8.5c0 1.5-.5 3-1.5 4s-2.5 1.5-4 1.5c-2 0-3-1-3-2.5s1-3 3-3 3 1 3 2.5c0 1-.5 2-1.5 2.5" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const Footer = () => {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/manejousselin", icon: <Instagram size={20} strokeWidth={1.5} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@manejousselin", icon: <TikTokIcon size={20} strokeWidth={1.5} /> },
    { name: "YouTube", url: "https://www.youtube.com/@manejousselin", icon: <Youtube size={20} strokeWidth={1.5} /> },
    { name: "Pinterest", url: "https://www.pinterest.com/@manejousselin", icon: <PinterestIcon size={20} strokeWidth={1.5} /> },
    { name: "WhatsApp", url: "https://wa.me/4915568580042", icon: <MessageCircle size={20} strokeWidth={1.5} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/manejousselin", icon: <Linkedin size={20} strokeWidth={1.5} /> },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#accueil" className="font-body text-lg tracking-[0.25em] text-gradient-gold font-medium">
          manejousselin
        </a>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} manejousselin — Tous droits réservés
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
