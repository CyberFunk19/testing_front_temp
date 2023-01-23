import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getStudents } from './sampAPI';
import {addStudentsAsync, getStudentsAsync,selectStudents} from './sampSlice';
import { useSelector } from 'react-redux'

const AddStudent = () => {
  const dispatch = useDispatch();
  const [sName, setsName] = useState("")
  const [Email, setEmail] = useState("")
  const [mGrade, setMgrade] = useState("")
  const [eGrade, setEgrade] = useState("")
  const [cGrade, setCgrade] = useState("")
  
    const students = useSelector(selectStudents)
  
      
  
  
  return (
    
    
    <div>
      <div>
        {students.map(student => (
          <div>
            {student.sName}, {student.Email}, Math: {student.mGrade}, English: {student.eGrade}, Computers: {student.cGrade}
          </div>
        ))}
      </div>
      <h2>Add A Student: </h2>
      <br></br>
      

Name: <input onChange={(e)=>setsName(e.target.value)}/>
Email: <input onChange={(e)=>setEmail(e.target.value)} />
<br></br>
Math Grade: <input onChange={(e)=>setMgrade(e.target.value)}/>
English Grade: <input onChange={(e)=>setEgrade(e.target.value)}/>
Computer Grade: <input onChange={(e)=>setCgrade(e.target.value)}/>
<button onClick={()=>dispatch(addStudentsAsync({sName,Email,mGrade,eGrade,cGrade}))} >Add</button>
<br></br>
<button onClick={()=>dispatch(getStudentsAsync())}>Show Students</button>
    </div>

  )
}

export default AddStudent