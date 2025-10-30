import { Button } from "./ui/button";
import { Instagram, Facebook } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Check, Star } from "lucide-react";

export const SocialCTA = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/one_health_essentials/",
      icon: Instagram,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@1healthessentials?lang=en",
      icon: FaTiktok,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/one_health_essentials/",
      icon: Facebook,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Healthy_Ess",
      icon: FaXTwitter,
      color: "from-gray-800 to-black"
    }
  ];

  const features = [
    "Premium Quality Products",
    "Authentic Brands Guaranteed",
    "Fast Nairobi Delivery",
    "Trusted by Kenyans"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/10 to-background">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold animate-pulse">
            <Star className="h-4 w-4 fill-white" />
            COMING SOON
            <Star className="h-4 w-4 fill-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Health & Cosmetic Essentials
            </span>
            <br />
            <span className="text-foreground">
              Follow Us for Exclusive{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Launch Updates!
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for the ultimate beauty and wellness destination in Nairobi! We're curating the finest collection of authentic cosmetics and health essentials for the modern Kenyan woman.{" "}
            <span className="font-semibold text-foreground">
              Follow our social media for exclusive launch updates and first access to our premium collection!
            </span>
          </p>

          {/* Social Media Buttons */}
          <div className="pt-4">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
              CONNECT WITH ONE HEALTH ESSENTIALS
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="lg"
                  className={`bg-gradient-to-r ${social.color} text-white hover:opacity-90 transition-all duration-300 hover:scale-105 rounded-2xl px-6 py-6`}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="mr-2 h-5 w-5" />
                  {social.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="pt-8">
            <a 
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto max-w-md mx-auto"
            >
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 md:px-8 md:py-6 text-sm md:text-lg rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative flex items-center justify-center gap-2 md:gap-3">
                  <Star className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 fill-white group-hover:rotate-12 transition-transform duration-500" />
                  <span className="text-center leading-tight">Be First to Know About Our Launch</span>
                  <Star className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 fill-white group-hover:rotate-12 transition-transform duration-500" />
                </span>
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Exclusive early access for followers
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
