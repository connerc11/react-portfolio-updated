import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";



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
    <section>
            <h2> Contact information!</h2>
            <p>Email: cccochrane1@knights.ucf.edu</p>
            <p>Phone: 954-918-3334</p>

        <form id="contact-form" onChange={submitHandle}>
        <div>
            <label htmlFor="name"> Enter Your Name:</label>
            <input type="text" onChange={changeHandle} defaultValue={name} name="name" ></input>
        </div>
        <div>
            <label htmlFor="email"> Enter Your Email:</label>
            <input type="email" onChange={changeHandle} defaultValue={email} name="email" ></input>
        </div>
        <div>
            <label htmlFor="message"> Please leave a message:</label>
            <textarea name="message" onChange={changeHandle} rows="8" defaultValue={message}/>
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button type="submit">Send Now!</button>

</form>
</section>
)


}

export default ContactForm;
