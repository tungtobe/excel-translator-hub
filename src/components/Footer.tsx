import appIcon from "@/assets/icon.png";

const Footer = () => {
  return (
    <footer className="hero-gradient py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <img src={appIcon} alt="Comtor ちゃん" className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-bold text-primary-foreground font-jp">
              Comtor ちゃん
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-md">
            Giải phóng sức lao động, nâng tầm chất lượng dịch thuật.
            <br />
            Trợ lý AI dịch Excel Việt ↔ Nhật cho BrSE & Comtor.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <a href="#overview" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              Tổng quan
            </a>
            <a href="#guide" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              Hướng dẫn
            </a>
            <a href="#faq" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              FAQ
            </a>
          </div>
          <div className="mt-4 border-t border-white/10 pt-4 w-full">
            <p className="text-xs text-white/40">
              © 2025 Comtor ちゃん. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
