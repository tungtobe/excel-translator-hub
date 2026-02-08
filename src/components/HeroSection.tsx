import { motion } from "framer-motion";
import { Apple, Monitor } from "lucide-react";
import appIcon from "@/assets/icon.png";

const HeroSection = () => {
  return (
    <section
      id="download"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* App icon */}
          <motion.img
            src={appIcon}
            alt="Comtor ちゃん icon"
            className="h-28 w-28 rounded-3xl shadow-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl font-jp">
            Comtor <span className="text-jp-red">ちゃん</span>
          </h1>

          <p className="max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed">
            Trợ lý AI dịch thuật chuyên nghiệp cho dự án IT.
            <br className="hidden sm:block" />
            Dịch Excel Việt ↔ Nhật — giữ nguyên 100% định dạng.
          </p>

          {/* Download buttons */}
          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://github.com/tungtobe/excel-translator-hub/releases/latest/download/Comtor.dmg"
              className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-7 py-4 text-primary-foreground backdrop-blur-sm hover:bg-white/20 transition-all"
              download
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-white/60">Tải cho</div>
                <div className="text-base font-semibold">macOS</div>
              </div>
            </a>

            <a
              href="https://github.com/tungtobe/excel-translator-hub/releases/latest/download/Comtor_x64_en-US.msi.zip"
              className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-7 py-4 text-primary-foreground backdrop-blur-sm hover:bg-white/20 transition-all"
              download
            >
              <Monitor className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-white/60">Tải cho</div>
                <div className="text-base font-semibold">Windows</div>
              </div>
            </a>
          </motion.div>

          <p className="mt-2 text-sm text-white/50">
            Phiên bản mới nhất • Miễn phí sử dụng • AI credit tự trả
          </p>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 38C384 36 480 42 576 50C672 58 768 68 864 66C960 64 1056 50 1152 44C1248 38 1344 40 1392 41L1440 42V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V60Z"
            fill="hsl(220, 20%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
