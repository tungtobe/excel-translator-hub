import { motion } from "framer-motion";
import { Coffee, Code, Languages, Heart, Sparkles, Moon } from "lucide-react";
import appIcon from "@/assets/icon.png";

const funFacts = [
  {
    icon: Coffee,
    text: "Vibe code bằng cà phê và rất nhiều AI credits",
  },
  {
    icon: Code,
    text: "App này không có Bug, tất cả là feature",
  },
  {
    icon: Languages,
    text: "Có AI rồi nhưng sếp bảo dù sao vẫn phải học tiếng Nhật",
  },
  {
    icon: Moon,
    text: "Vibe code dễ gây nghiện và mất ngủs",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/20" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
            Giới thiệu
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            Ai rảnh tạo ra ứng dụng này?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl border border-border bg-card p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Avatar & intro */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-24 w-24 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg">
                  <img
                    src={appIcon}
                    alt="Developer avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 text-2xl">🇻🇳</span>
              </motion.div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground font-jp mb-1">
                  Một BrSE/PM/PO giấu tên
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  aka "Tobe Tùng" aka "Tony Tùng"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Từng gặp cảnh việc thì ngập đầu mà cứ bị thúc a dịch cái spec <strong className="text-foreground"> 696 trang </strong>
                  này cho em. Sau 3 ngày copy-paste liên tục, tôi quyết định: <em>"éo làm nữa."</em>
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Thế là <strong className="text-foreground">Comtor ちゃん</strong> ra đời — không phải
                  vì đam mê công nghệ, mà vì{" "}
                  <strong className="text-accent">lười !</strong> 😤
                </p>
              </div>
            </div>

            {/* Fun facts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-secondary/50 p-4 hover:bg-secondary transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <fact.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">{fact.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy */}
            <motion.div
              className="rounded-xl bg-primary/5 border border-primary/10 p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground font-jp mb-2">
                    Triết lý phát triển
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Nếu bạn phải làm một việc lặp đi lặp lại hơn 3 lần — hãy vibe code để nó tự làm.
                    Nếu code không chạy — uống cà phê rồi sửa. Nếu vẫn không chạy —{" "}
                    <strong className="text-foreground">quay lại làm bằng tay.</strong>"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing joke */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                Made with <Heart className="h-4 w-4 text-accent fill-accent" /> và rất nhiều
                <Coffee className="h-4 w-4 text-accent" /> và AI credits 🤖
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
