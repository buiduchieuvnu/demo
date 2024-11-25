import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'model/appointment_model.dart';
import 'views/Homes/home_screen.dart';
import 'views/Appointment/appointment_screen.dart';
import 'views/Notification/notification_screen.dart';
import 'views/Account/profile_account.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized(); //Khởi tạo Flutter
  await _initHive(); // Chờ Hive khởi tạo
  final loginBox = Hive.box("login"); // Mở box login
  final String username =
      loginBox.get("userName", defaultValue: "Khách"); // Lấy username
  runApp(MyApp(username: username)); // Truyền username vào MyApp
}

Future<void> _initHive() async {
  await Hive.initFlutter();
  await Hive.openBox("login");
  await Hive.openBox("accounts");
  await Hive.initFlutter();
  Hive.registerAdapter(AppointmentAdapter()); // Đăng ký adapter
  await Hive.openBox<Appointment>('appointments');
}

class MyApp extends StatelessWidget {
  final String username;

  const MyApp({Key? key, required this.username}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.green),
        useMaterial3: false,
      ),
      home: MainTabBar(username: username), // Truyền username vào MainTabBar
    );
  }
}

class MainTabBar extends StatefulWidget {
  final String username;

  const MainTabBar({Key? key, required this.username}) : super(key: key);

  @override
  _MainTabBarState createState() => _MainTabBarState();
}

class _MainTabBarState extends State<MainTabBar> {
  int _currentIndex = 0;

  late final List<Widget> _screens;

  @override
  void initState() {
    super.initState();
    _screens = [
      HomeScreen(),
      AppointmentScreen(),
      NotificationScreen(),
      ProfileAccount(username: widget.username), // Truyền username
    ];
  }

  void _onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.green,
        unselectedItemColor: Colors.grey,
        currentIndex: _currentIndex,
        onTap: _onTabTapped,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Trang chủ",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.calendar_today),
            label: "Đặt lịch",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            label: "Thông báo",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Tài khoản",
          ),
        ],
      ),
    );
  }
}
