package HCodeUI.Hibernate_DB_Train.dao;

import HCodeUI.Hibernate_DB_Train.entity.Course;
import HCodeUI.Hibernate_DB_Train.entity.Teacher;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Repository
@AllArgsConstructor
public class CourseDaoImpl implements CourseDao{
    private EntityManager entityManager;



    @Override
    @Transactional
    public void save(Course course) {
        this.entityManager.persist(course);
    }

    @Override
    public List<Course> findCourseByTeacherId(int i) {
        String jpql = "select c from Course c where teacher.id =:id";
        TypedQuery<Course> query = entityManager.createQuery(jpql,Course.class);
        query.setParameter("id",i);
        List<Course> courses = query.getResultList();
        return courses;
    }

    @Override
    public Course findCourseById(int id) {
        return entityManager.find(Course.class,id);
    }

    @Override
    public Course findCourseAndStudentByCourseId(int id) {
        String jpql = "select c from Course c join fetch c.stuents where c.id = :id";
        TypedQuery<Course> query = entityManager.createQuery(jpql,Course.class);
        query.setParameter("id",id);
        Course course = query.getSingleResult();
        return course;
    }

    @Override
    public List<Course> findCoursesByStudentId(int id) {
        String jpql = "select c from Course c inner join c.stuents s where s.id = :id";
        //        Muon lay du lieu student cho tung course thi cho them fetch
//        String jpql = "select c from Course c inner join fetch c.stuents s where s.id = :id";
        Query query = entityManager.createQuery(jpql);
        query.setParameter("id",id);
        return query.getResultList();
    }
}
