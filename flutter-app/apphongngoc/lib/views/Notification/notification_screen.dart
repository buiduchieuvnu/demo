import 'package:flutter/material.dart';


class NotificationScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Thông báo"),
        automaticallyImplyLeading: false, // Tắt nút back
      ),
      body: Center(child: Text("Bạn chưa có thông báo nào")),
    );
  }
}
