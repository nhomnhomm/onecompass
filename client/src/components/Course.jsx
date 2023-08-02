import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import SummerCourses from '../assets/2022-2023 Summer 2023 Term.json'
import FallCourses from '../assets/2023-2024 Fall 2023 Term.json'
import {inspect} from "util";
import './Course.scss'

const Course = () => {
  const courseID = useParams().id; 
  const filterCourse = FallCourses.filter(course => {
    return course.id.includes(courseID)})
  if (filterCourse.length < 1) return (<p>Can't find course in this database, we will update soon. Thank you</p>)
  const course = JSON.parse(JSON.stringify(filterCourse[0]))
  // console.log(inspect(course)); 

  // inspired by OneSchedule by NPNKhoi
  const OneStop = () => (
    <a href={course.url}> {course.id} </a>
  )
  const getSchedule = (course) => course.schedule
  .map(({day, start_time, end_time}) => `${day} ${start_time} - ${end_time}`)
  .join('\n')

  const getNotes = (course) => {
    return JSON.parse(JSON.stringify(course.description)).split('---')[0]
  }

  const getCategories = (course) => course.categories.join(', ')

  const getDescription = (course) => {
    const desSplit = JSON.parse(JSON.stringify(course.description)).split('---')
    const des = desSplit[1] + + desSplit[2] + desSplit[3]
    // const split = des.indexOf('---')
    //return des.slice(split + 4)
    return des
  }

  const Row = ({header, content}) => {
    return (
      <tr>
        <td className='fw-bold'> {header} </td>
        <td className='multiple-lines'> {content} </td>
      </tr>
    )
  }

  // title, instructor, onestopURL, description
  return (
    <div className='text-start h-100 pt-5 m-4'>
      <Helmet>
        <title> {course.title} </title>
      </Helmet>
      <div className="d-flex flex-column border-bottom mb-4 align-items-start">
        <div className='d-flex flex-row align-items-end w-100'>
          <h4 className='flex-grow-1'>
            {course.id}  
          </h4>
        </div>

        <h1 className='display-4'>{course.title}</h1>
      </div>
      
      <div className='d-flex flex-column flex-md-row justify-content-around'>
        <div className=' multiple-lines col-md-6 order-2 order-md-1'>
          {getDescription(course)}
        </div>
        <div className='flex-grow-1 pb-4 pt-md-0 ms-md-5 order-1 order-md-2'>

          <table className='table table-hover table-bordered'>
            <tbody>
              <Row header='Instructor' content={course.instructor} />
              <Row header='Schedule' content={getSchedule(course)} />
              <Row header='Location' content={course.location} />
              <Row header='Categories' content={getCategories(course)} />
              <Row header='Credits' content={course.credits} />
              <Row header='OneStop URL' content={<OneStop />} />
              <Row header='Further notes' content={getNotes(course)} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Course 