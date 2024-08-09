const Userform=(props)=>{

    const {handleSubmit , forms , index , formData , handleInputChange , handleBack}=props;
    return(
        <form className='container' onSubmit={handleSubmit}>
            {/* <h1> Multi-Step Form</h1>  */}
      <label type="text">{forms[index].label}</label>

      <input
      required
      value={formData[forms[index].id]}
      id={forms[index].id}
       onChange={handleInputChange}
      type={forms[index].inputType}  
      placeholder={forms[index].placeholder}/>
      
      { index>0 &&
        <div className='but'>
      <button onClick={handleBack}><a href="/">Back</a></button>
      <button>{forms[index].buttonName}</button>
      </div>
}
{index===0 && <button>{forms[index].buttonName}</button>}

      </form>

    )
}

export default Userform;