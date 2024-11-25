import 'package:hive/hive.dart';
part 'appointment_model.g.dart';

@HiveType(typeId: 2)
class Appointment extends HiveObject {
  @HiveField(0)
  final int id;

  @HiveField(1)
  final String name;

  @HiveField(2)
  final int phone;

  @HiveField(3)
  final DateTime date;

  @HiveField(4)
  final String note;

  Appointment({
    required this.id,
    required this.name,
    required this.phone,
    required this.date,
    required this.note,
  });
}
