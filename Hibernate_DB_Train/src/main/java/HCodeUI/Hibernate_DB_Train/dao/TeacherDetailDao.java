package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.TeacherDetail;

public interface TeacherDetailDao {
    public void save(TeacherDetail teacherDetail);

    public TeacherDetail findTeacherDetailById(int id);

    public void deleteTeacherById(int id);
}
