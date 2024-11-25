import 'package:flutter/material.dart';

class DoctorScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Bác sĩ ")),
      body: Center(child: Text("Thông tin giới thiệu")),
    );
  }
}