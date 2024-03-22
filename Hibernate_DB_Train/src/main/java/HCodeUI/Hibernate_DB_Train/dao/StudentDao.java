package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Course;
import HCodeUI.Hibernate_DB_Train.entity.Student;

import java.util.List;

public interface StudentDao {
    public void save(Student student);
    public Student findStudentById(int id);
    public Student findCourseAndStudentByStudentId(int id);
    public List<Student> findStudentsByCourseId(int id);
}
