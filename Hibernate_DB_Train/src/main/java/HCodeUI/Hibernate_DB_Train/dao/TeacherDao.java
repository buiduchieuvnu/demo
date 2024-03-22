package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Teacher;
import org.apache.catalina.User;

public interface TeacherDao {
    public void save(Teacher teacher);
    public Teacher findTeacherById(int id);
    public void deleteTeacherById(int id);

    public void update(Teacher teacher);
    public Teacher findTeacherByIdJoinFetch(int id);
}
