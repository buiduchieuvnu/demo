package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Course;

import java.util.List;

public interface CourseDao {
    public void save(Course course);
    public List<Course> findCourseByTeacherId(int i);
    public Course findCourseById(int id);
    public Course findCourseAndStudentByCourseId(int id);
//    Truy cap bang thu 3 trung gian de lay du lieu
    public List<Course> findCoursesByStudentId(int id);
}
