import 'dart:async';
import 'package:flutter/material.dart';
import 'AboutScreen.dart';
import 'DichVuNew1.dart';
import 'DichVuNew2.dart';
import 'ServiceScreen.dart';
import 'DoctorScreen.dart';
import 'SpecialtyScreen.dart';
import 'RecruitmentScreen.dart';
import 'ContactScreen.dart';
import 'HealthScreen.dart';
import 'CalendarScreen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final PageController _pageController = PageController();
  int _currentImageIndex = 0;
  Timer? _timer;

  final List<String> _imageUrls = [
    'assets/images/qc1.jpg',
    'assets/images/qc2.png',
    'assets/images/qc3.jpg',
    'assets/images/qc4.jpg',
  ];

  @override
  void initState() {
    super.initState();
    _startAutoSlide();
  }

  @override // Thời gian chuyển ảnh
  void dispose() {
    _timer?.cancel();
    _pageController.dispose();
    super.dispose();
  }

  void _startAutoSlide() {
    _timer = Timer.periodic(Duration(seconds: 5), (timer) {
      setState(() {
        _currentImageIndex = (_currentImageIndex + 1) % _imageUrls.length;
        _pageController.animateToPage(
          _currentImageIndex,
          duration: Duration(milliseconds: 300),
          curve: Curves.easeIn,
        );
      });
    });
  }

  void _onPageChanged(int index) {
    setState(() {
      _currentImageIndex = index;
    });
    _timer?.cancel();
    _startAutoSlide();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Phần thông tin "HONG NGOC Hospital" ở trên
          Positioned(
            top: 60.0,
            left: 16.0,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "HONG NGOC",
                  style: TextStyle(
                      fontSize: 20, fontWeight: FontWeight.bold, color: Colors.green),
                ),
                Text(
                  "Hospital",
                  style: TextStyle(fontSize: 16, color: Colors.green),
                ),
              ],
            ),
          ),
          // Nút tìm kiếm
          Positioned(
            top: 60.0,
            right: 16.0,
            child: Container(
              width: 45,
              height: 45,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15),
                color: Colors.green,
              ),
              child: Icon(Icons.search, color: Colors.white),
            ),
          ),
          // Nội dung chính cuộn được
          Positioned(
            top: 110.0,
            left: 0,
            right: 0,
            bottom: 0,
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Carousel ảnh
                    SizedBox(height: 12),
                    Container(
                      height: 150,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: PageView.builder(
                        controller: _pageController,
                        onPageChanged: _onPageChanged,
                        itemCount: _imageUrls.length,
                        itemBuilder: (context, index) {
                          return Image.asset(
                            _imageUrls[index],
                            fit: BoxFit.cover,
                          );
                        },
                      ),
                    ),
                    SizedBox(height: 12),
                    // Service 2 với các tiện ích
                    Container(
                      height: 220,
                      padding: const EdgeInsets.all(16.0),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(height: 12),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              _buildFeatureIcon(Icons.receipt, "Giới thiệu", AboutScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.vaccines, "Dịch vụ", ServiceScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.person, "Bác sĩ", DoctorScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.book, "Chuyên khoa", SpecialtyScreen()),
                            ],
                          ),
                          SizedBox(height: 12),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              _buildFeatureIcon(Icons.health_and_safety, "Tư vấn sức khoẻ", HealthScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.book, "Tuyển dụng", RecruitmentScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.phone, "Liên hệ", ContactScreen()),
                              Spacer(),
                              _buildFeatureIcon(Icons.calendar_today, "Lịch hẹn", CalendarScreen()),
                            ],
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 16),
                    // Dịch vụ mới (Đã đưa lên đây)
                    Text(
                      "Dịch vụ mới",
                      style: TextStyle(
                          fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black),
                    ),
                    SizedBox(height: 16),
                    _buildServiceBox(
                      imageUrl: 'assets/images/chamsockhachhang.png',
                      title: 'Cổng chăm sóc khách hàng 24/7',
                      subtitle: 'Nhanh - Tiện - Dễ dàng',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => DichVuNew1()),
                        );
                        // Điều hướng hoặc hành động khi nhấn vào box này.
                      },
                    ),
                    SizedBox(height: 12),
                    _buildServiceBox(
                      imageUrl: 'assets/images/datlichnhanh.png',
                      title: 'Đặt lịch nhanh - Xác nhận lịch tự động',
                      subtitle: 'Xem ngay lịch khám, giờ khám với bác sĩ',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => DichVuNew2()),
                        );
                        // Điều hướng hoặc hành động khi nhấn vào box này.
                      },
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureIcon(IconData icon, String label, Widget nextScreen) {
    return Expanded(
      child: GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => nextScreen),
          );
        },
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.all(12),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.green[300],
              ),
              child: Icon(icon, color: Colors.white, size: 22),
            ),
            SizedBox(height: 5),
            Container(
              width: 60,
              child: Text(
                label,
                style: TextStyle(fontSize: 10, color: Colors.black),
                textAlign: TextAlign.center,
                softWrap: true,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
Widget _buildServiceBox({
  required String imageUrl,
  required String title,
  required String subtitle,
  required VoidCallback onTap,
}) {
  return GestureDetector(
    onTap: onTap,
    child: Container(
      margin: EdgeInsets.symmetric(horizontal: 16),
      padding: EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.grey[200],
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // Hình ảnh góc trái
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Image.asset(
              imageUrl,
              width: 60,
              height: 60,
              fit: BoxFit.cover,
            ),
          ),
          SizedBox(width: 12),
          // Hai dòng văn bản
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  subtitle,
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey[700],
                  ),
                ),
              ],
            ),
          ),
          // Icon mũi tên góc phải
          Icon(
            Icons.arrow_forward_ios,
            size: 16,
            color: Colors.grey[700],
          ),
        ],
      ),
    ),
  );
}

