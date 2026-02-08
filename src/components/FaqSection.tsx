import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comtor ちゃん hỗ trợ những định dạng file nào?",
    a: "Hiện tại Comtor ちゃん hỗ trợ file Excel (.xlsx). Hệ thống xử lý tất cả các thành phần trong file bao gồm cells, shapes, drawings và flowcharts.",
  },
  {
    q: "Tôi có cần API Key để sử dụng không?",
    a: "Có. Bạn có thể sử dụng API Key miễn phí từ Google (Gemini) để bắt đầu ngay lập tức. Ngoài ra, bạn cũng có thể dùng API Key trả phí từ OpenAI để có chất lượng dịch cao hơn. Lấy key của bản thân ở https://aistudio.google.com/app/apikey",
  },
  {
    q: "Glossary hoạt động như thế nào?",
    a: "Glossary là bảng thuật ngữ riêng cho từng Project. Bạn thêm các cặp từ JP-VN, và AI sẽ ưu tiên sử dụng thuật ngữ của bạn khi dịch. Hỗ trợ Import/Export CSV để quản lý nhanh.",
  },
  {
    q: "Nếu mất mạng giữa chừng hoặc hết quota API giữa chừng thì sao?",
    a: "Làm cốc nước, uống chén trà, rồi đợi một chút. Comtor ちゃん có cơ chế Checkpoint. Khi gặp lỗi, đợi chút rồi nhấn Retry — hệ thống sẽ tự động bỏ qua các Sheet đã dịch xong và tiếp tục từ vị trí bị gián đoạn.",
  },
  {
    q: "Smart Cache là gì? Khi nào nên tắt?",
    a: "Smart Cache lưu lại kết quả dịch của các nội dung đã dịch trước đó để tiết kiệm token. Bạn nên tắt Cache khi đã cập nhật Glossary và muốn AI dịch lại với thuật ngữ mới.",
  },
  {
    q: "App có chạy trên macOS và Windows không?",
    a: "Có! Comtor ちゃん hỗ trợ cả macOS và Windows. Bạn có thể tải bản cài đặt phù hợp từ phần Download ở đầu trang.",
  },
  {
    q: "File dịch xong bị lỗi font hoặc vỡ layout?",
    a: "Comtor ちゃん giữ nguyên 100% định dạng gốc. Nếu gặp vấn đề, hãy đảm bảo file nguồn không bị hỏng và thử mở kết quả bằng Microsoft Excel thay vì các phần mềm thay thế.",
  },
  {
    q: "Làm sao để dịch nhanh hơn với file lớn?",
    a: 'Sử dụng phương pháp "Dịch thử một Sheet" — dịch thử 1 sheet nhỏ trước, hoàn thiện Glossary rồi mới dịch file chính. Kết hợp Smart Cache để tránh dịch lại nội dung trùng lặp.',
  },
  {
    q: "Nếu vẫn lỗi mà không biết vì sao thì phải làm sao?",
    a: 'Thì sao ạ ???? thì phải chịu chứ sao! Hoặc là liên hệ với tôi qua email tonytung.work@gmail.com, rảnh thì tôi fix.',
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Giải đáp nhanh các thắc mắc phổ biến và troubleshooting.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left font-semibold text-card-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
