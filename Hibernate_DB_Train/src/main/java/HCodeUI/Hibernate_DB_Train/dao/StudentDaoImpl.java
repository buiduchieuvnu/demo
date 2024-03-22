package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Course;
import HCodeUI.Hibernate_DB_Train.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@AllArgsConstructor
public class StudentDaoImpl implements StudentDao{
    private EntityManager entityManager;

    @Override
    @Transactional
    public void save(Student student) {
        entityManager.persist(student);
    }

    @Override
    public Student findStudentById(int id) {
        return entityManager.find(Student.class,id);
    }

    @Override
    public Student findCourseAndStudentByStudentId(int id) {
        String jpql = "select s from Student s join fetch s.courses where s.id = :id";
        TypedQuery<Student> query = entityManager.createQuery(jpql,Student.class);
        query.setParameter("id",id);
        Student student = query.getSingleResult();
        return student;
    }

    @Override
    public List<Student> findStudentsByCourseId(int id) {
        String jpql = "select s from Student s inner join s.courses c where c.id = :id";
//        Muon lay du lieu course cho tung student thi cho them fetch
//        String jpql = "select s from Student s inner join fetch s.courses c where c.id = :id";
        Query query = entityManager.createQuery(jpql);
        query.setParameter("id",id);
        return query.getResultList();
    }
}
