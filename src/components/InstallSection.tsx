import { motion } from "framer-motion";
import { Apple, Monitor, ShieldAlert, MousePointerClick, Settings, Terminal, Download, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const InstallSection = () => {
  return (
    <section id="install" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Cài đặt
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-jp">
            Hướng dẫn cài đặt
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Cài đặt Comtor ちゃん trên macOS và Windows chỉ trong vài bước đơn giản.
          </p>
        </motion.div>

        {/* Security notice */}
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Alert className="border-accent/30 bg-accent/5">
            <ShieldAlert className="h-5 w-5 text-accent" />
            <AlertTitle className="text-foreground font-semibold">Lưu ý quan trọng</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Ứng dụng <strong>chưa được ký chứng chỉ bảo mật (code signing)</strong>, vì vậy hệ điều hành có thể hiển thị cảnh báo an toàn. Đây là hành vi <strong>bình thường</strong> đối với các ứng dụng nội bộ hoặc ứng dụng chưa phát hành chính thức.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* OS Tabs */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="macos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-12 bg-muted/50">
              <TabsTrigger value="macos" className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Apple className="h-4 w-4" />
                macOS
              </TabsTrigger>
              <TabsTrigger value="windows" className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm">
                <Monitor className="h-4 w-4" />
                Windows
              </TabsTrigger>
            </TabsList>

            {/* macOS Tab */}
            <TabsContent value="macos" className="mt-6 space-y-6">
              {/* Step 1 */}
              <StepCard
                step={1}
                icon={Download}
                title="Tải file cài đặt"
              >
                <p className="text-sm text-muted-foreground">
                  Tải file: <code className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground">Comtorちゃん.dmg</code>
                </p>
              </StepCard>

              {/* Step 2 */}
              <StepCard
                step={2}
                icon={MousePointerClick}
                title="Mở file DMG"
              >
                <ol className="space-y-2">
                  <StepItem>Double-click vào file <code className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground">Comtorちゃん.dmg</code></StepItem>
                  <StepItem>Một cửa sổ cài đặt sẽ hiện ra</StepItem>
                  <StepItem>Kéo biểu tượng <strong>Comtorちゃん.app</strong> vào thư mục <strong>Applications</strong></StepItem>
                </ol>
              </StepCard>

              {/* Step 3 - Warning */}
              <StepCard
                step={3}
                icon={ShieldAlert}
                title="Cảnh báo bảo mật có thể gặp"
              >
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground italic">
                  "Comtorちゃん.app cannot be opened because it is from an unidentified developer"
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Đây là cảnh báo mặc định do ứng dụng chưa được ký chứng chỉ bảo mật.
                </p>
              </StepCard>

              {/* Step 4 - Solutions */}
              <StepCard
                step={4}
                icon={Settings}
                title="Cách cho phép mở ứng dụng"
              >
                <div className="space-y-5">
                  {/* Method 1 */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">1</span>
                      Mở bằng chuột phải (đơn giản & an toàn nhất)
                    </h5>
                    <ol className="space-y-1.5 ml-7">
                      <StepItem>Mở <strong>Applications</strong></StepItem>
                      <StepItem>Chuột phải vào <strong>Comtorちゃん.app</strong></StepItem>
                      <StepItem>Chọn <strong>Open</strong></StepItem>
                      <StepItem>Khi hộp thoại cảnh báo hiện ra → chọn <strong>Open</strong></StepItem>
                    </ol>
                    <p className="mt-2 ml-7 text-xs text-accent font-medium">
                      ➡️ Sau thao tác này, ứng dụng sẽ mở bình thường ở các lần sau.
                    </p>
                  </div>

                  <div className="border-t border-border" />

                  {/* Method 2 */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">2</span>
                      Cho phép trong System Settings
                    </h5>
                    <ol className="space-y-1.5 ml-7">
                      <StepItem>Mở <strong>System Settings</strong></StepItem>
                      <StepItem>Vào <strong>Privacy & Security</strong></StepItem>
                      <StepItem>Kéo xuống phần <strong>Security</strong></StepItem>
                      <StepItem>Tại thông báo chặn ứng dụng → bấm <strong>Allow Anyway</strong></StepItem>
                      <StepItem>Mở lại ứng dụng từ <strong>Applications</strong></StepItem>
                    </ol>
                  </div>

                  <div className="border-t border-border" />

                  {/* Terminal option */}
                  <div>
                    <h5 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Tuỳ chọn nâng cao (dành cho người dùng kỹ thuật)
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2 ml-6">Mở Terminal và chạy lệnh:</p>
                    <div className="ml-6 rounded-lg bg-[hsl(220,20%,12%)] p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-[hsl(140,60%,70%)]">
                        xattr -rd com.apple.quarantine /Applications/Comtorちゃん.app
                      </code>
                    </div>
                  </div>
                </div>
              </StepCard>
            </TabsContent>

            {/* Windows Tab */}
            <TabsContent value="windows" className="mt-6 space-y-6">
              {/* Step 1 */}
              <StepCard
                step={1}
                icon={Download}
                title="Tải file cài đặt"
              >
                <p className="text-sm text-muted-foreground">
                  Tải file: <code className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-foreground">Comtorちゃん.msi</code>
                </p>
              </StepCard>

              {/* Step 2 - Warning */}
              <StepCard
                step={2}
                icon={ShieldAlert}
                title="Cảnh báo bảo mật có thể gặp"
              >
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground italic">
                  "Windows protected your PC"
                </div>
              </StepCard>

              {/* Step 3 - Allow */}
              <StepCard
                step={3}
                icon={MousePointerClick}
                title="Cách cho phép cài đặt"
              >
                <ol className="space-y-1.5">
                  <StepItem>Click <strong>More info</strong></StepItem>
                  <StepItem>Click <strong>Run anyway</strong></StepItem>
                  <StepItem>Tiếp tục quá trình cài đặt như bình thường</StepItem>
                </ol>
              </StepCard>

              {/* Step 4 - Browser block */}
              <StepCard
                step={4}
                icon={ShieldAlert}
                title="Trường hợp bị chặn tải trên trình duyệt"
              >
                <p className="text-sm text-muted-foreground mb-2">
                  Chrome / Edge có thể hiển thị cảnh báo khi tải file.
                </p>
                <ol className="space-y-1.5">
                  <StepItem>Chọn <strong>Keep</strong> hoặc <strong>Keep anyway</strong> để tiếp tục tải</StepItem>
                </ol>
              </StepCard>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Sub-components ── */

interface StepCardProps {
  step: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const StepCard = ({ step, icon: Icon, title, children }: StepCardProps) => (
  <div className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
        {step}
      </div>
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h4 className="font-semibold text-card-foreground">{title}</h4>
      </div>
    </div>
    <div className="ml-12">{children}</div>
  </div>
);

const StepItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm text-muted-foreground">
    <ChevronRight className="h-4 w-4 shrink-0 text-primary/60 mt-0.5" />
    <span>{children}</span>
  </li>
);

export default InstallSection;
