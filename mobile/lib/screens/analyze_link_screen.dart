import 'package:flutter/material.dart';
import '../services/api_service.dart';

class AnalyzeLinkScreen extends StatefulWidget {
  @override
  _AnalyzeLinkScreenState createState() => _AnalyzeLinkScreenState();
}

class _AnalyzeLinkScreenState extends State<AnalyzeLinkScreen> {
  final TextEditingController _urlController = TextEditingController();
  String? _resultMessage;

  void _analyzeLink() async {
    final url = _urlController.text;
    setState(() {
      _resultMessage = 'Analisando...';
    });

    try {
      final result = await ApiService.analyzeLink(url);
      setState(() {
        _resultMessage = 'Resultado: $result';
      });
    } catch (e) {
      setState(() {
        _resultMessage = 'Erro ao analisar o link';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Analisar Link')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _urlController,
              decoration: InputDecoration(labelText: 'Insira o link para análise'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _analyzeLink,
              child: Text('Analisar'),
            ),
            SizedBox(height: 20),
            if (_resultMessage != null)
              Text(
                _resultMessage!,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
          ],
        ),
      ),
    );
  }
}
