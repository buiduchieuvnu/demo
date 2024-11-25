import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Giới thiệu về Hồng Ngọc"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Image.asset(
              'assets/images/benhvienhn.png', // Đường dẫn hình ảnh logo hoặc ảnh bệnh viện
              height: 200,
              fit: BoxFit.cover,
            ),
            const SizedBox(height: 16),
            const Text(
              "Về Bệnh viện Đa khoa Hồng Ngọc",
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              "Năm 2003, Bệnh viện Đa khoa Hồng Ngọc được thành lập, là bệnh viện tư nhân tại miền Bắc tiên phong trong mô hình \"bệnh viện - khách sạn\" với cơ sở vật chất đạt tiêu chuẩn quốc tế. Hơn 20 năm hình thành và phát triển, Hồng Ngọc đã trở thành một trong những bệnh viện tư nhân khu vực miền Bắc Việt Nam, được nhiều khách hàng tin tưởng lựa chọn.",
              style: TextStyle(fontSize: 16),
              textAlign: TextAlign.justify,
            ),
            const SizedBox(height: 16),
            const Card(
              elevation: 4,
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Thành tựu nổi bật",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      "- Hơn 250 chuyên gia y tế chuyên môn cao, giàu kinh nghiệm, được đào tạo chuyên sâu trong và ngoài nước.",
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 8),
                    Text(
                      "- Bệnh viện ở miền Bắc được xây dựng theo mô hình Bệnh viện xanh – thông minh.",
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 8),
                    Text(
                      "- Đơn vị được chứng nhận đạt tiêu chuẩn chăm sóc sức khỏe theo EQuIP6 từ ACHS International.",
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 8),
                    Text(
                      "- Được công nhận là Trung tâm đào tạo chuẩn toàn cầu về ngoại khoa (được công nhận bởi Hiệp hội Phẫu thuật Hoàng gia Anh - RCS).",
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 8),
                    Text(
                      "- Được Bộ Y tế trao chứng nhận \"Bệnh viện thực hành nuôi con bằng sữa mẹ xuất sắc\".",
                      style: TextStyle(fontSize: 16),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              "Hợp tác quốc tế",
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              "Hồng Ngọc thường xuyên liên kết, hợp tác với nhiều đối tác, tổ chức y tế uy tín trên thế giới; nhằm học hỏi, tiếp cận những kiến thức và kỹ thuật y học tiên tiến; giúp các bác sĩ của viện có cơ hội và môi trường để thường xuyên học tập, nâng cao tay nghề.",
              style: TextStyle(fontSize: 16),
              textAlign: TextAlign.justify,
            ),
          ],
        ),
      ),
    );
  }
}
