package HCodeUI.Hibernate_DB_Train.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name="teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "first_name",length = 256)
    private String firstName;
    @Column(name = "last_name",length = 256)
    private String lastName;
    @Column(name = "email",length = 256)
    private String email;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teacher_detail_id")
    private TeacherDetail teacherDetail;
    @OneToMany(mappedBy = "teacher",
            cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REMOVE},fetch = FetchType.LAZY)
    private List<Course> listCourse;

    public void addCourse(Course course){
        if(this.listCourse == null){
            this.listCourse = new ArrayList<>();
        }
        this.listCourse.add(course);
        course.setTeacher(this);
    }

}
