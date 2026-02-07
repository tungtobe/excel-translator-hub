import { motion } from "framer-motion";
import { FileSpreadsheet, BookOpen, Cpu, Play, Database, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Bảo toàn Định dạng Tuyệt đối",
    description:
      "Giữ nguyên 100% layout, màu sắc, font chữ. Xử lý thông minh Shapes, Drawings, Flowcharts mà không làm vỡ bố cục.",
    highlights: ["Giữ nguyên layout", "Shapes & Flowcharts", "Sẵn sàng sử dụng"],
  },
  {
    icon: BookOpen,
    title: "Kaizen với Project & Glossary",
    description:
      'Tổ chức dữ liệu theo từng dự án riêng biệt. Glossary thông minh giúp hệ thống ngày càng "thông thạo" thuật ngữ chuyên ngành.',
    highlights: ["Học theo dự án", "Glossary thông minh", "Dịch chuẩn dần"],
  },
  {
    icon: Cpu,
    title: "Sức mạnh AI tiên tiến",
    description:
      "Sử dụng LLM hàng đầu thế giới. API Key miễn phí từ Google hoặc OpenAI. Bản dịch tự nhiên, đúng ngữ cảnh kỹ thuật.",
    highlights: ["LLM hàng đầu", "API Key miễn phí", "Hiệu suất cao"],
  },
];

const bonusFeatures = [
  {
    icon: Play,
    title: "Pause / Resume",
    description: "Không lo mất tiến độ khi gặp sự cố mạng.",
  },
  {
    icon: Database,
    title: "Smart Cache",
    description: "Tiết kiệm tài nguyên với nội dung trùng lặp.",
  },
  {
    icon: BarChart3,
    title: "Theo dõi thời gian thực",
    description: "Quan sát tiến độ dịch chi tiết từng Sheet.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Tổng quan
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            3 Tính năng <span className="text-gradient">Đột phá</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Giải pháp dịch thuật tự động thế hệ mới, tối ưu cho tài liệu kỹ thuật và hồ sơ dự án IT.
          </p>
        </motion.div>

        {/* Main features */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground font-jp">
                {feature.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus features */}
        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bonusFeatures.map((bf) => (
            <motion.div
              key={bf.title}
              variants={itemVariants}
              className="flex items-start gap-4 rounded-xl bg-secondary/50 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <bf.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{bf.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{bf.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
