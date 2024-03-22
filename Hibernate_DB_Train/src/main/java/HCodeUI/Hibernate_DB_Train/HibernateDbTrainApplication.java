package HCodeUI.Hibernate_DB_Train;

import HCodeUI.Hibernate_DB_Train.dao.CourseDao;
import HCodeUI.Hibernate_DB_Train.dao.StudentDao;
import HCodeUI.Hibernate_DB_Train.dao.TeacherDao;
import HCodeUI.Hibernate_DB_Train.dao.TeacherDetailDao;
import HCodeUI.Hibernate_DB_Train.entity.Course;
import HCodeUI.Hibernate_DB_Train.entity.Student;
import HCodeUI.Hibernate_DB_Train.entity.Teacher;
import HCodeUI.Hibernate_DB_Train.entity.TeacherDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class HibernateDbTrainApplication {

	public static void main(String[] args) {
		SpringApplication.run(HibernateDbTrainApplication.class, args);
	}

	@Bean
	@Autowired
	public CommandLineRunner commandLineRunner(TeacherDao teacherDao, TeacherDetailDao teacherDetailDao, CourseDao courseDao, StudentDao studentDao){
		return runner -> {
//			One to one,one to many,unidirectional,bidirectional
			createTeacher(teacherDao);
//			findTeacherById(teacherDao,1);
//			findTeacherDetailById(teacherDetailDao,1);
//			createCourse(courseDao,teacherDao);
//			findTeacherWithCourses(teacherDao,1);
//			Fethtype lazy,eager,join fetch
//			findTeacherWithCourses_Lazy(teacherDao,courseDao,1);
//
//			Many to many
//			createCourseAndStudent(courseDao);
//			Truy cap bang doi tuong binh thuong de lay du lieu
//			findCourseAndStudent(courseDao,13);
//			Truy cap bang trung gian lay giu lieu doi tuong
//			findCoursesByStudentId_Lazy(courseDao,1);
//			findStudentsByCourseId_Lazy(studentDao,13);
		};
	}
	public void findStudentsByCourseId_Lazy(StudentDao studentDao,int id){
		List<Student> students = studentDao.findStudentsByCourseId(id);
		Student student = students.get(0);
		System.out.println(student.getCourses());
		System.out.println(students);
	}
	public void findCoursesByStudentId_Lazy(CourseDao courseDao,int id){
		List<Course> courses = courseDao.findCoursesByStudentId(id);
		System.out.println(courses);
	}
	private void findCourseAndStudent(CourseDao courseDao,int id) {
		Course course = courseDao.findCourseAndStudentByCourseId(id);
		System.out.println("Course infomation :");
		System.out.println(course);
		System.out.println("Students infomation");
		System.out.println(course.getStuents());
	}

	private void createCourseAndStudent(CourseDao courseDao) {
		Course course = new Course();
		course.setTitle("Lap trinh huong doi tuong");
		Student student1 = new Student();
		student1.setFirstName("Duong");
		student1.setLastName("Tuan Nam");
		Student student2 = new Student();
		student2.setFirstName("Tran");
		student2.setLastName("Trung Kien");
		Student student3 = new Student();
		student3.setFirstName("Tran");
		student3.setLastName("Duc Quan");
		course.addStudent(student1);
		course.addStudent(student2);
		course.addStudent(student3);
		courseDao.save(course);
	}

	private void findTeacherWithCourses_JoinFetch(TeacherDao teacherDao, int i) {
		Teacher teacher = teacherDao.findTeacherByIdJoinFetch(i);
		System.out.println(teacher);
	}

	private void findTeacherWithCourses_Lazy(TeacherDao teacherDao,CourseDao courseDao, int i) {
		Teacher teacher = teacherDao.findTeacherById(i);
		List<Course> listCourse = courseDao.findCourseByTeacherId(i);
		teacher.setListCourse(listCourse);
		System.out.println(teacher);
	}

	//	@Transactional
	private void findTeacherWithCourses(TeacherDao teacherDao, int id) {
		Teacher teacher1 = teacherDao.findTeacherById(id);
		System.out.println(teacher1);
		System.out.println("Course is infomation" + teacher1.getListCourse());
	}
	private void createCourse(CourseDao courseDao, TeacherDao teacherDao) {
//		Teacher teacher = teacherDao.findTeacherById(1);
		Teacher teacher = new Teacher();
		teacher.setFirstName("Pham");
		teacher.setLastName("Hoang Trung");
		teacher.setEmail("HT@gmail.com");

		Course course = new Course();
		Course c1 = new Course("Spring","Good",null,null,teacher);
		Course c2 = new Course("Fullstack","Good",null,null,teacher);
		Course c3 = new Course(".Net","Good",null,null,teacher);
		teacher.addCourse(c1);
		teacher.addCourse(c2);
		teacher.addCourse(c3);

		TeacherDetail teacherDetail = new TeacherDetail();
		teacherDetail.setGender(true);
		teacherDetail.setAddress("206 Truong Dinh");
		teacherDetail.setYoutubeChannel("Le Huy");
		teacher.setTeacherDetail(teacherDetail);

		System.out.println("Updating teacher ... ");
		teacherDao.update(teacher);
		System.out.println("Done");


	}

	public void findTeacherById(TeacherDao teacherDao,int id){
		Teacher teacher = teacherDao.findTeacherById(id);
		System.out.println(teacher);
		System.out.println(teacher.getTeacherDetail());
	}
	public void findTeacherDetailById(TeacherDetailDao teacherDetailDao,int id){
		TeacherDetail teacherDetail = teacherDetailDao.findTeacherDetailById(id);
		System.out.println(teacherDetail.getTeacher());
		System.out.println(teacherDetail);
	}
	private void createTeacher(TeacherDao teacherDao) {
		Teacher teacher = new Teacher();
		teacher.setFirstName("Le");
		teacher.setLastName("Gia Huy");
		teacher.setEmail("LHuy1902003@gmail.com");

		TeacherDetail teacherDetail = new TeacherDetail();
		teacherDetail.setGender(true);
		teacherDetail.setAddress("206 Truong Dinh");
		teacherDetail.setYoutubeChannel("Le Huy");

//		associate
		teacher.setTeacherDetail(teacherDetail);
		teacherDao.save(teacher);
		System.out.println("Save teacher .... " + teacher);
	}
}
