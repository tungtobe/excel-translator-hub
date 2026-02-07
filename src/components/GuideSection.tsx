import { motion } from "framer-motion";
import { FileText, BookMarked, RefreshCw, Pause, Lightbulb, Layers } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const scenarios = [
  {
    id: "scenario-1",
    icon: FileText,
    title: "Kịch bản 1: Dịch thông thường",
    steps: [
      "Mở tab Translate và chọn chiều dịch (VD: JP → VI).",
      'Nhấn "Chọn file..." và trỏ đến file Excel của bạn.',
      'Nhấn "Bắt đầu ngay".',
      "Hệ thống scan file, hiển thị số Sheet/Cell và tiến hành dịch.",
      "File kết quả lưu tại thư mục output với hậu tố _translated.",
    ],
  },
  {
    id: "scenario-2",
    icon: BookMarked,
    title: "Kịch bản 2: Sử dụng Glossary",
    steps: [
      "Vào mục Projects & Glossary, chọn hoặc tạo Project.",
      'Tại Glossary, nhấn "Add row" và thêm thuật ngữ chuyên ngành.',
      'Nhấn "Save changes".',
      "Quay lại tab Translate, chọn đúng Project và tiến hành dịch.",
      "Export/Import CSV để quản lý hàng trăm thuật ngữ nhanh chóng.",
    ],
  },
  {
    id: "scenario-3",
    icon: RefreshCw,
    title: "Kịch bản 3: Sửa lỗi dịch bằng tắt Cache",
    steps: [
      "Tại màn hình Translate, tìm mục Cache Options.",
      'Bỏ tích "Sử dụng cache khi dịch".',
      "Tiến hành dịch lại file.",
      "Hệ thống bỏ qua kết quả cũ, gửi yêu cầu mới tới AI.",
    ],
  },
  {
    id: "scenario-4",
    icon: Pause,
    title: "Kịch bản 4: Pause / Resume / Retry",
    steps: [
      "Nhấn Pause nếu cần tạm dừng. Nhấn Resume để tiếp tục.",
      "Nếu lỗi mạng/API, job chuyển Failed → Nhấn Retry.",
      "Hệ thống bỏ qua Sheet đã hoàn thành, dịch tiếp từ vị trí lỗi.",
    ],
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: "Dịch thử một Sheet",
    description:
      "Tạo file Excel nhỏ chứa 1 Sheet quan trọng nhất, dịch thử trước. Kiểm tra kết quả, bổ sung Glossary rồi mới dịch file chính — tiết kiệm token tối đa.",
  },
  {
    icon: Layers,
    title: "Dịch bổ sung (Incremental)",
    description:
      "Thêm nội dung mới vào file đã dịch, hệ thống chỉ dịch phần chưa dịch. Tiết kiệm thời gian và token cực lớn.",
  },
];

const GuideSection = () => {
  return (
    <section id="guide" className="py-24 surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Hướng dẫn
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            Bắt đầu sử dụng
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Các kịch bản thực tế giúp bạn làm chủ Comtor ちゃん trong vài phút.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Scenarios accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible defaultValue="scenario-1" className="space-y-3">
              {scenarios.map((scenario) => (
                <AccordionItem
                  key={scenario.id}
                  value={scenario.id}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <scenario.icon className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-card-foreground">
                        {scenario.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ol className="ml-12 space-y-3">
                      {scenario.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Tips */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-foreground font-jp flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-vn-yellow" />
              Mẹo tối ưu
            </h3>
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <tip.icon className="h-4 w-4" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">{tip.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
