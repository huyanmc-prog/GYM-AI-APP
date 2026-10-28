# GymAI handoff

## Chạy dự án

Mở PowerShell trong thư mục dự án và chạy:

```powershell
python -m http.server 4173
```

Sau đó mở `http://127.0.0.1:4173/index.html`.

## Cấu trúc

- `index.html`: shell giao diện PWA.
- `styles.css`, `enhancements.css`, `auto-sync.css`: giao diện responsive.
- `app.js`: dữ liệu mẫu cho các màn hình tổng quan/chương trình/phân tích/hồ sơ.
- `assets-manifest.js`: danh sách tĩnh 1.324 cặp asset, giúp thư viện hoạt động ngay cả khi server không hỗ trợ liệt kê thư mục.
- `exercise-metadata.js`: tên và loại dụng cụ cho 1.324 bài từ ExerciseDB; dùng để hiển thị và phân loại thư viện.
- `app3.js`: thư viện bài tập dùng manifest, và chỉ quét thư mục như phương án dự phòng.
- `images/`: 1.324 ảnh bài tập.
- `videos/`: 1.324 GIF minh họa tương ứng.

## Trạng thái hiện tại

Thư viện đã tự động đồng bộ 1.324 cặp ảnh + GIF. Toàn bộ 1.324 asset đã được đối chiếu với metadata ExerciseDB bằng mã media trong tên file, nên mỗi bài có tên gốc và loại dụng cụ chính xác.

Các luồng sử dụng chính đã hoạt động và lưu trên trình duyệt bằng `localStorage`:

- Thêm bài từ thư viện vào kế hoạch buổi tập.
- Ghi set (kg, số lần), xóa bài và hoàn thành buổi tập.
- Xem tổng khối lượng, số buổi, số set và nhật ký gần đây.
- Cập nhật hồ sơ/mục tiêu cá nhân.
- Phân loại đầy đủ thư viện theo máy tập, tạ đơn, thanh đòn, xà, dây cáp, không dụng cụ và dụng cụ khác.

## Việc nên làm tiếp

Nếu muốn đồng bộ nhiều thiết bị, bước tiếp theo là thay `localStorage` bằng một backend có tài khoản.
