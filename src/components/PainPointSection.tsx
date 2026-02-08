import { motion } from "framer-motion";
import { Clock, Copy, FileSearch, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: Copy,
    title: "Copy-Paste không hồi kết",
    description:
      "Dịch xong rồi nhưng phải ngồi copy từng ô, paste từng dòng. File 69 sheet thì mất cả ngày chỉ để... dán.",
  },
  {
    icon: FileSearch,
    title: "Căn chỉnh format vỡ nát",
    description:
      "Merged cells, màu nền, border, font chữ — tất cả đều bay màu sau khi paste. Sửa format mất thời gian gấp 3 lần dịch.",
  },
  {
    icon: AlertTriangle,
    title: "File gốc thay đổi liên tục",
    description:
      "Khách hàng cập nhật spec, sửa vài dòng trong file 404 trang. Tìm ra chỗ sửa rồi cập nhật vào file dịch — như mò kim đáy bể.",
  },
  {
    icon: Clock,
    title: "Thời gian thao tác >> Thời gian dịch",
    description:
      "Nghịch lý: dịch 1 tiếng, nhưng copy-paste và căn chỉnh mất 4-5 tiếng. Công sức bỏ ra không tương xứng.",
  },
];

const PainPointSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
            Câu chuyện
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            Dịch file Excel —{" "}
            <span className="text-accent">nỗi đau</span> ai cũng hiểu
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Đặc biệt với dân BrSE hoặc IT Comtor, khi phải xử lý spec dài hàng trăm trang hay
            test case với hàng nghìn dòng, việc dịch tay trở thành cơn ác mộng thực sự.
          </p>
        </motion.div>

        {/* Story narrative */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 rounded-2xl border border-border bg-card p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Bạn nhận một file Excel spec từ khách hàng Nhật — <strong className="text-foreground">404 trang, 69 sheet</strong>,
            đầy bảng biểu, flowchart, merged cells và cả shapes. Bạn dịch xong nội dung,
            nhưng rồi nhận ra: <strong className="text-foreground">thời gian copy-paste và căn chỉnh format gấp 5 lần thời gian dịch</strong>.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            Tệ hơn, tuần sau khách gửi bản cập nhật — sửa vài chỗ rải rác trong cả file.
            Bạn phải <strong className="text-foreground">diff từng dòng</strong> để tìm thay đổi, rồi cập nhật vào file dịch.
            Lặp đi lặp lại, sprint nào cũng vậy.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-accent/5 border border-accent/10 p-4">
            <span className="text-2xl">💬</span>
            <p className="text-sm text-muted-foreground italic">
              "Mình dịch nhanh lắm, nhưng mỗi lần ngồi paste và sửa format thì muốn bỏ nghề." — Một Comtor giấu tên
            </p>
          </div>
        </motion.div>

        {/* Pain point cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <point.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground font-jp">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to solution */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground">
            Sẽ thế nào nếu tất cả thao tác đó được{" "}
            <strong className="text-primary">tự động hóa hoàn toàn</strong>?
          </p>
          <motion.div
            className="mt-4 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointSection;
