import { MY_SERVER } from '../../app/env'
import axios from 'axios'

export function getStudents() {
    console.log("getttt")
    return new Promise((resolve) =>
        axios.get(MY_SERVER  ).then(res => resolve({ data: res.data }))
    );
}
export function addStudents(sName,Email,mGrade,eGrade,cGrade) {
    console.log(sName,Email,mGrade,eGrade,cGrade)
    // console.log("add",desc,sName)
    return new Promise((resolve) =>
        axios.post(MY_SERVER + "/add",{
            sName:sName ,
             Email:Email ,
              mGrade:mGrade ,
               eGrade:eGrade ,
                cGrade:cGrade },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => resolve({ data: res.data }))
    );
}
export function delStudent(id) {
    // console.log("add",desc,sName)
    return new Promise((resolve) =>
        axios.delete(MY_SERVER+ "/" + id).then(res => resolve({ data: res }))
    );
}

export function updStudent(desc,sName,id) {
    console.log(desc,sName,id)
    
    return new Promise((resolve) =>
        axios.put(MY_SERVER+"/"+ id,{"description":desc,"name":sName}).then(res => resolve({ data: res.data }))
    );
}