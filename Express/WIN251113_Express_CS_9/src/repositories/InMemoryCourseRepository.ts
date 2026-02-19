import { ICourseRepository } from "./interfaces/ICourseRepository";
import { Course } from "../models/Course";

export class InMemoryCourseRepository implements ICourseRepository {
  // Mock data for testing
  private courses: Course[] = [
    { id: "1", name: "C", capacity: 100, students: [] },
    { id: "2", name: "Python", capacity: 60, students: [] },
  ];

  // 1. Implement a delete(courseId: string) method in the repository.
  async delete(courseId: string): Promise<Course> {
    const idx = this.courses.findIndex((course) => course.id === courseId);
    return this.courses.splice(idx, 1)[0];
  }

  async findAll(): Promise<Course[]> {
    return this.courses;
  }

  async findById(id: string): Promise<Course | null> {
    return this.courses.find((course) => course.id === id) || null;
  }

  async save(course: Course): Promise<void> {
    const idx = this.courses.findIndex((c) => c.id === course.id);
    if (idx >= 0) {
      this.courses[idx] = course;
    } else {
      this.courses.push(course);
    }
  }

  async enrollStudent(courseId: string, studentId: string): Promise<void> {
    const course = await this.findById(courseId);
    if (course && !course.students.includes(studentId)) {
      course.students.push(studentId);
      await this.save(course);
    }
  }

  async findByStudentId(studentId: string): Promise<Course[]> {
    return this.courses.filter((course) => course.students.includes(studentId));
  }
}
