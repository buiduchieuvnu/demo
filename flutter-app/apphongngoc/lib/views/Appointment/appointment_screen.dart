import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:intl/intl.dart';
import '../../model/appointment_model.dart';

class AppointmentScreen extends StatelessWidget {
  final Box<Appointment> _appointmentBox = Hive.box<Appointment>('appointments');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Đặt lịch'),
      ),
      body: ValueListenableBuilder(
        valueListenable: _appointmentBox.listenable(),
        builder: (context, Box<Appointment> box, _) {
          if (box.isEmpty) {
            return const Center(child: Text('Chưa có lịch hẹn nào.'));
          }

          return ListView.builder(
            itemCount: box.length,
            itemBuilder: (context, index) {
              final appointment = box.getAt(index)!;

              return ListTile(
                title: Text(appointment.name),
                subtitle: Text(
                  '${DateFormat('dd/MM/yyyy').format(appointment.date)} - ${appointment.note}',
                ),
                trailing: IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () {
                    box.deleteAt(index);
                  },
                ),
                onTap: () {
                  _showEditAppointmentDialog(context, appointment, index);
                },
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showAddAppointmentDialog(context),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showAddAppointmentDialog(BuildContext context) {
    final titleController = TextEditingController();
    final descriptionController = TextEditingController();
    final dateController = TextEditingController();
    final statusController = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Thêm lịch hẹn'),
        content: SingleChildScrollView(
          child: Column(
            children: [
              TextField(
                controller: titleController,
                decoration: const InputDecoration(labelText: 'Họ và tên'),
              ),
              TextField(
                controller: descriptionController,
                decoration: const InputDecoration(labelText: 'SĐT'),
              ),
              TextField(
                controller: dateController,
                decoration: const InputDecoration(labelText: 'dd/mm/yyyy'),
              ),
              TextField(
                controller: statusController,
                decoration: const InputDecoration(labelText: 'Ghi chú'),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: const Text('Hủy'),
          ),
          ElevatedButton(
            onPressed: () {
              // Chuyển đổi ngày theo định dạng dd/MM/yyyy
              final dateFormat = DateFormat('dd/MM/yyyy');
              final date = dateFormat.parse(dateController.text);
              final phoneNumber = int.tryParse(descriptionController.text) ?? 0;
              final newAppointment = Appointment(
                id: DateTime.now().millisecondsSinceEpoch,
                name: titleController.text,
                phone: phoneNumber,
                date: date,
                note: statusController.text,
              );
              _appointmentBox.add(newAppointment);
              Navigator.of(context).pop();

              // Hiển thị thông báo thêm lịch hẹn thành công
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Đã thêm lịch hẹn thành công!')),
              );
            },
            child: const Text('Thêm'),
          ),
        ],
      ),
    );
  }

  void _showEditAppointmentDialog(BuildContext context, Appointment appointment, int index) {
    final nameController = TextEditingController(text: appointment.name);
    final phoneController = TextEditingController(text: appointment.phone.toString());
    final dateController = TextEditingController(text: appointment.date.toIso8601String());
    final noteController = TextEditingController(text: appointment.note);

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Chỉnh sửa lịch hẹn'),
        content: SingleChildScrollView(
          child: Column(
            children: [
              TextField(
                controller: nameController,
                decoration: const InputDecoration(labelText: 'Họ và tên'),
              ),
              TextField(
                controller: phoneController,
                decoration: const InputDecoration(labelText: 'SĐT'),
              ),
              TextField(
                controller: dateController,
                decoration: const InputDecoration(labelText: 'dd/mm/yyyy'),
              ),
              TextField(
                controller: noteController,
                decoration: const InputDecoration(labelText: 'Ghi chú'),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: const Text('Hủy'),
          ),
          ElevatedButton(
            onPressed: () {
              final phoneNumber = int.tryParse(phoneController.text) ?? 0;
              final updatedAppointment = Appointment(
                id: appointment.id,
                name: nameController.text,
                phone: phoneNumber,
                date: DateTime.parse(dateController.text),
                note: noteController.text,
              );
              _appointmentBox.putAt(index, updatedAppointment);
              Navigator.of(context).pop();

              // Hiển thị SnackBar thông báo cập nhật lịch hẹn thành công
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Đã cập nhật lịch hẹn!')),
              );
            },
            child: const Text('Cập nhật'),
          ),
        ],
      ),
    );
  }
}
