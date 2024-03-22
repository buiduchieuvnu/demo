package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Teacher;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@AllArgsConstructor
public class TeacherDaoimpl implements TeacherDao{
    private EntityManager entityManager;

    @Override
    @Transactional
    public void save(Teacher teacher) {
        entityManager.persist(teacher);
    }

    @Override
    @Transactional
    public Teacher findTeacherById(int id) {
        return entityManager.find(Teacher.class,id);
    }

    @Override
    @Transactional
    public void deleteTeacherById(int id) {
        Teacher teacher = findTeacherById(id);
        entityManager.remove(teacher);
    }

    @Override
    @Transactional
    public void update(Teacher teacher) {
        entityManager.merge(teacher);
        entityManager.flush();
    }

    @Override
    public Teacher findTeacherByIdJoinFetch(int id) {
        String jpql = "select t from Teacher t " + "join fetch t.teacherDetail " + "join fetch t.listCourse " + "where t.id = :id";
        TypedQuery<Teacher> query = entityManager.createQuery(jpql,Teacher.class);
        query.setParameter("id",id);
        Teacher teacher = query.getSingleResult();
        return teacher;
    }
}
