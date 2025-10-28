import { Instagram, Facebook } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/one_health_essentials/",
      icon: Instagram,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@1healthessentials?lang=en",
      icon: FaTiktok,
    },
    {
      name: "Facebook",
      url: "https://www.instagram.com/one_health_essentials/",
      icon: Facebook,
    },
    {
      name: "X",
      url: "https://x.com/Healthy_Ess",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            No.1 Health Essentials
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 hover:from-purple-600 hover:to-pink-600 border border-border hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Company Info */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>© {currentYear} One Health Essentials Ltd. • Safari Cosmetics • Brentwood Arcade, Kiambu Rd</p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                ✓ Authentic Products Guaranteed
              </span>
              <span className="flex items-center gap-1">
                ✓ Same-Day Dispatch
              </span>
              <span className="flex items-center gap-1">
                ✓ Secure Payments
              </span>
              <span className="flex items-center gap-1">
                ✓ Trusted Since {currentYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
