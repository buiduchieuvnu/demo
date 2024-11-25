import 'package:flutter/material.dart';

class BuildBoxSetting {
  final IconData icon;
  final String title;
  final Color iconColor;
  final VoidCallback onTap;

  BuildBoxSetting({
    required this.icon,
    required this.title,
    required this.iconColor,
    required this.onTap,
  });
}
