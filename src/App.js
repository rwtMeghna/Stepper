import React, { useState } from 'react'
import "./App.css"

// import FormDetail from './FormDetail';
import Userform from './UserForm';
import FormDetail from './FormDetail';
const App = () => {

const data=[
  {
    id:"name",
    label:"Name",
    inputType:"text",
    buttonName:"Next",
    placeholder:"Enter Your Name..."
  },
  {
    id:"email",
    label:"Email",
    inputType:"email",
    buttonName:"Next",
    placeholder:"Enter Your Email..."
  },
  {
    id:"dob",
    label:"Date of Birth",
    inputType:"date",
    buttonName:"Next",
    placeholder:""
  },
  {
    id:"password",
    label:"Password",
    inputType:"password",
    buttonName:"Submit",
    placeholder:"Enter your Password..."
  }
]


const[forms , setForms]=useState(data);
const [index , setIndex]=useState(0);
const[isFormSubmitted , setIsFormSubmitted]=useState(false);


const[formData , setFormData]=useState({
  name:"",
  email:"",
  dob:"",
  password:"",
})


const handleSubmit=(e)=>{
  e.preventDefault();

  if(index===forms.length-1)  {console.log("form Submitted")
    setIsFormSubmitted(true);
  }
    else{
      setIndex((index)=>index+1);
  }
}

const handleBack=(e)=>{
  e.preventDefault();
   setIndex((index)=>index-1);
}

const handleInputChange=(e)=>{
  e.preventDefault();
  const id=e.target.id;
  const val=e.target.value;
  // console.log(id , val)
  const copyFormData={...formData};
  copyFormData[id]=val;
  setFormData(copyFormData);
}


console.log(formData);

  return (
    <div className='App'>
      
      {!isFormSubmitted ? 
//       <form className='container' onSubmit={handleSubmit}> 
//       <label type="text">{forms[index].label}</label>

//       <input
//       value={formData[forms[index].id]}
//       id={forms[index].id}
//        onChange={handleInputChange}
//       type={forms[index].inputType}  
//       placeholder={forms[index].placeholder}/>
      
//       { index>0 &&
//         <div className='but'>
//       <button onClick={handleBack}><a href="/">Back</a></button>
//       <button>{forms[index].buttonName}</button>
//       </div>
// }
// {index===0 && <button>{forms[index].buttonName}</button>}

//       </form>

<Userform
handleSubmit={handleSubmit} 
 forms={forms} 
  index ={index}
   formData={formData}
   handleInputChange={handleInputChange} 
   handleBack={handleBack}
/>

:
<FormDetail formData={formData}/>
      // <div>
      //   <h1>Success!</h1>
      //   <hr/>
      //   <span>Name:{formData.name}</span><br/>
      //   <span>Email:{formData.email}</span><br/>
      //   <span>DOB:{formData.dob}</span><br/>
      //   <span>Password:{formData.password}</span><br/>
      // </div>

}
    </div>
    
  )
}

export default App