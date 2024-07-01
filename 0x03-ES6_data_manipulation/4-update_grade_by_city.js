export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => student.id === grade.studentId);
      const grade = studentGrade ? studentGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
