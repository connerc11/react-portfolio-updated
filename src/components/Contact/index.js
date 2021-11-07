import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./form.css"



function ContactForm() {
    
        
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });
        const { name, email, message } = formState;
        const [errorMessage, setErrorMessage] = useState('');
        
    


function changeHandle(e){
    if (e.target.name === 'email'){
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is does not fit the requirements.');
         
      } else {
        if (!e.target.value.length) {
          console.log('not proper');
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
      
}

function submitHandle(e){
    e.preventDefault();
    if (!errorMessage) {
      // setFormState({ [e.target.name]: e.target.value });
    //   console.log('Form', formState);
    }
  };

return (
    <div className="form-box">
            <h2 className="form-step" style={{margin: "15px"}}> Contact information</h2>
            <p className="text-center" style={{color: "blue"}}>Email: cccochrane1@knights.ucf.edu</p>
            <p className="text-center" style={{color: "blue"}}>Phone: 954-918-3334</p>

        <form id="contact-form" onChange={submitHandle}>
        <div className="field11" >
            <label htmlFor="name" style={{color: "royalblue"}}> Enter Your Name:</label>
            <input placeholder="Name here!"type="text" onChange={changeHandle} defaultValue={name} name="name" ></input>
        </div>
        <div className="text-center" style={{color: "royalblue"}}>
            <label htmlFor="email"> Enter Your Email:</label>
            <input placeholder="Email here!"type="email" onChange={changeHandle} defaultValue={email} name="email" ></input>
        </div>
        <div className="text-center" style={{color: "royalblue"}}>
            <label htmlFor="message"> Please leave a message:</label>
            <textarea placeholder="Message here!" name="message" onChange={changeHandle} rows="5" defaultValue={message}/>
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <br></br>
      <button id="submitBtn" className="submitBtn" type="submit">Send Now!</button>
      <br></br>
      
      <br></br>
      


    
        

</form>
</div>
)


}

export default ContactForm;
