import StudentItem from "./StudentItem";


function StudentList() {

  const students = [
    {name: 'Ryan', color: 'lightblue'},
    {name: 'Essie', color: 'yellow'},
    {name: 'Marcos', color: 'beige'},
    {name: 'Brian', color: 'blueviolet'},
    {name: 'Jacob', color: 'fuchsia'}
  ]

  // let mappedStudents = students.map((student) => {
  //   return <StudentItem name={student.name} color={student.color}/>
  // })

  // console.log('mappedStudents is:', mappedStudents)


  return (
    <ul>
      {
        students.map((student) => {
          return <StudentItem name={student.name} color={student.color}/>
        })
      }
    </ul>
  )
}

export default StudentList;
