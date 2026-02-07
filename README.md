# HƯỚNG DẪN CÀI ĐẶT ỨNG DỤNG COMTORちゃん (macOS & Windows)

> **Lưu ý quan trọng**
> Ứng dụng này **chưa được ký chứng chỉ bảo mật (code signing)**, vì vậy hệ điều hành macOS và Windows có thể hiển thị cảnh báo an toàn. Đây là hành vi **bình thường** đối với các ứng dụng nội bộ, ứng dụng thử nghiệm hoặc ứng dụng chưa phát hành chính thức.

---

## I. HƯỚNG DẪN CÀI ĐẶT TRÊN macOS (FILE DMG)

### 1. Tải file cài đặt

* Tải file: `Comtor.dmg`

---

### 2. Mở file DMG

1. Double-click vào file `Comtor.dmg`
2. Một cửa sổ cài đặt sẽ hiện ra
3. Kéo biểu tượng **Comtor.app** vào thư mục **Applications**

---

### 3. Cảnh báo bảo mật có thể gặp

Khi mở ứng dụng lần đầu từ thư mục **Applications**, macOS có thể hiển thị thông báo:

> "Comtor.app cannot be opened because it is from an unidentified developer"

Đây là cảnh báo mặc định do ứng dụng chưa được ký chứng chỉ bảo mật.

---

### 4. Cách cho phép mở ứng dụng (Khuyến nghị)

#### Cách 1: Mở bằng chuột phải (đơn giản & an toàn nhất)

1. Mở **Applications**
2. Chuột phải vào **Comtor.app**
3. Chọn **Open**
4. Khi hộp thoại cảnh báo hiện ra → chọn **Open**

➡️ Sau thao tác này, **Comtorちゃん** sẽ mở bình thường ở các lần sau.

---

#### Cách 2: Cho phép trong System Settings

1. Mở **System Settings**
2. Vào **Privacy & Security**
3. Kéo xuống phần **Security**
4. Tại thông báo chặn **Comtor.app** → bấm **Allow Anyway**
5. Mở lại ứng dụng từ **Applications**

---

#### (Tuỳ chọn – dành cho người dùng kỹ thuật)

Mở **Terminal** và chạy lệnh sau:

```bash
xattr -rd com.apple.quarantine /Applications/Comtor.app
```

---

#### Cách 2: Cho phép trong System Settings

1. Mở **System Settings**
2. Vào **Privacy & Security**
3. Kéo xuống phần **Security**
4. Tại dòng chặn ứng dụng → bấm **Allow Anyway**
5. Mở lại ứng dụng

---

#### (Tuỳ chọn nâng cao – dành cho user kỹ thuật)

Mở Terminal và chạy:

```bash
xattr -rd com.apple.quarantine Comtor.app
```

---

## II. HƯỚNG DẪN CÀI ĐẶT TRÊN WINDOWS

### 1. Tải file cài đặt

* Tải file: `Comtorちゃん.msi`

### 2. Cảnh báo bảo mật có thể gặp

Windows có thể hiển thị:

> "Windows protected your PC"

### 3. Cách cho phép cài đặt

1. Click **More info**
2. Click **Run anyway**
3. Tiếp tục quá trình cài đặt như bình thường

---

### 4. Trường hợp bị chặn tải trên trình duyệt

* Chrome / Edge có thể hiển thị cảnh báo
* Chọn **Keep** hoặc **Keep anyway** để tiếp tục tải

---

## III. CÂU HỎI THƯỜNG GẶP (FAQ)

### ❓ Ứng dụng có an toàn không?

✔ Có. Ứng dụng được phát triển nội bộ và **không chứa mã độc**. Cảnh báo xuất hiện do ứng dụng chưa được ký chứng chỉ bảo mật.

### ❓ Vì sao các ứng dụng khác không bị cảnh báo?

✔ Các ứng dụng thương mại thường được ký và xác thực bởi Apple / Microsoft. Việc này có chi phí và thường được thực hiện khi phát hành chính thức.

### ❓ Cảnh báo này có xuất hiện lại không?

✔ Không. Sau khi cho phép chạy lần đầu, hệ điều hành sẽ ghi nhớ và không chặn lại.
