package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Teacher;
import HCodeUI.Hibernate_DB_Train.entity.TeacherDetail;
import jakarta.persistence.EntityManager;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@AllArgsConstructor
public class TeacherDetailDaoImpl implements TeacherDetailDao{
    private EntityManager entityManager;


    @Override
    @Transactional
    public void save(TeacherDetail teacherDetail) {
        entityManager.persist(teacherDetail);
    }

    @Override
    @Transactional
    public TeacherDetail findTeacherDetailById(int id) {
        return entityManager.find(TeacherDetail.class,id);
    }

    @Override
    @Transactional
    public void deleteTeacherById(int id) {
        TeacherDetail teacherDetail = findTeacherDetailById(id);
        entityManager.remove(teacherDetail);
    }
}
