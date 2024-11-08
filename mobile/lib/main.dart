import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(LinkGuardApp());
}

class LinkGuardApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'LinkGuard',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: LoginScreen(),
    );
  }
}
