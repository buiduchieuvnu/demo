import 'dart:io';
import 'package:apphongngoc/views/Account/voucher.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:hive_flutter/hive_flutter.dart'; // Để lưu trạng thái đăng nhập
import '../../model/BuildBoxSetting.dart';
import '../../viewmodel/BuildBoxSettingVM.dart';
import 'ChinhSachGQKN.dart';
import 'ChinhSachQRT.dart';
import 'QuyDinhSuDung.dart';
import 'login.dart';

class ProfileAccount extends StatefulWidget {
  final String? username;

  const ProfileAccount({Key? key, this.username}) : super(key: key);

  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileAccount> {
  String? _imagePath; // Biến lưu ảnh
  bool _isLoggedIn = false; // Biến để kiểm tra trạng thái đăng nhập

  @override
  void initState() {
    super.initState();
    _checkLoginStatus(); // Kiểm tra trạng thái đăng nhập
  }

  Future<void> _checkLoginStatus() async {
    final loginBox = Hive.box("login");
    final username = loginBox.get("userName");
    setState(() {
      _isLoggedIn = username != null;
    });
  }

  Future<void> _pickImage() async {
    final picker = ImagePicker();
    final pickedFile = await picker.pickImage(source: ImageSource.gallery);

    if (pickedFile != null) {
      setState(() {
        _imagePath = pickedFile.path;
      });
    }
  }

  void _handleLogout() {
    final loginBox = Hive.box("login");
    loginBox.delete("userName");
    setState(() {
      _isLoggedIn = false;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text("Đã đăng xuất thành công")),
    );
  }

  @override
  Widget build(BuildContext context) {
    final List<BuildBoxSetting> boxes = [
      BuildBoxSetting(
        icon: Icons.local_offer,
        title: "Ưu đãi của tôi",
        iconColor: Colors.yellow,
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => Voucher()),
          );
        },
      ),
      BuildBoxSetting(
        icon: Icons.book,
        title: "Quy định sử dụng",
        iconColor: Colors.green,
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => quydinhsudung()),
          );
        },
      ),
      BuildBoxSetting(
        icon: Icons.warning,
        title: "Chính sách giải quyết khiếu nại",
        iconColor: Colors.red,
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => chinhsachqkn()),
          );
        },
      ),
      BuildBoxSetting(
        icon: Icons.person_2,
        title: "Chính sách quyền riêng tư",
        iconColor: Colors.blue,
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => chinhsachqrt())
          );
        },
      ),
      // Để box Đăng xuất nằm dưới phần các tính năng khác
      if (_isLoggedIn)
        BuildBoxSetting(
          icon: Icons.logout,
          title: "Đăng xuất",
          iconColor: Colors.redAccent,
          onTap: _handleLogout,
        ),
    ];

    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          return Column(
            children: [
              SizedBox(height: constraints.maxHeight * 0.1),
              Align(
                alignment: Alignment.topCenter,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    GestureDetector(
                      onTap: _pickImage,
                      child: CircleAvatar(
                        radius: 60,
                        backgroundColor: Colors.grey[300],
                        backgroundImage: _imagePath != null
                            ? FileImage(File(_imagePath!))
                            : null,
                        child: _imagePath == null
                            ? const Icon(Icons.person, size: 50, color: Colors
                            .white)
                            : null,
                      ),
                    ),
                    const SizedBox(height: 15),
                    Text(
                      _isLoggedIn ? widget.username ?? "Người dùng" : "Khách",
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    const SizedBox(height: 10),
                    if (!_isLoggedIn)
                      GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const Login(),
                            ),
                          ).then((_) => _checkLoginStatus());
                        },
                        child: const Text(
                          "Đăng nhập",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.normal,
                            color: Colors.blue,
                          ),
                        ),
                      ),
                    const SizedBox(height: 30),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: const Text(
                          "Quản lý yêu cầu và ưu đãi",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    ),
                    // Hiển thị các hộp "Ưu đãi của tôi"
                    ...boxes.where((box) =>
                    box.title != "Quy định sử dụng" && box.title != "Đăng xuất" && box.title != "Chính sách giải quyết khiếu nại" && box.title != "Chính sách quyền riêng tư")
                        .map((box) => BuildBoxSettingVM(model: box))
                        .toList(),

                    const SizedBox(height: 20),
                    // Thêm một dòng text nữa dưới phần "Ưu đãi của tôi"
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: const Text(
                          "Điều khoản & quy định",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(height: 5),
                    // Hiển thị box "Quy định sử dụng"
                    BuildBoxSettingVM(model: boxes[1]),
                    BuildBoxSettingVM(model: boxes[2]),
                    BuildBoxSettingVM(model: boxes[3]),

                    const SizedBox(height: 20),

                    // Hiển thị box "Đăng xuất" sau phần "Điều khoản & quy định"
                    if (_isLoggedIn) BuildBoxSettingVM(model: boxes.last),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}