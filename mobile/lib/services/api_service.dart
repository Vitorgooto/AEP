import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String _baseUrl = 'http://localhost:3000/api/links';

  // Método para análise de links
  static Future<String> analyzeLink(String url) async {
    final response = await http.post(
      Uri.parse('$_baseUrl/analyze'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'url': url}),
    );
    if (response.statusCode == 201) {
      final data = jsonDecode(response.body);
      return data['isMalicious'] ? 'Malicioso' : 'Seguro';
    } else {
      throw Exception('Erro ao analisar o link');
    }
  }
}
