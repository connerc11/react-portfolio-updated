import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";



function ContactForm() {
    
        
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });
        const { name, email, message } = formState;
        const [errorMessage, setErrorMessage] = useState('');
        
    


const changeHandle = (e) => {
    if (e.target.name === 'email'){
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is does not fit the requirements.');
         
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
}

const submitHandle = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    //   console.log('Form', formState);
    }
  };

return (
    <section>
            <h2> Contact information!</h2>
            <p>Email: cccochrane1@knights.ucf.edu</p>
            <p>Phone: 954-918-3334</p>

        <form id="contact-form" onSubmit={submitHandle}>
        <div>
            <label htmlFor="name"> Enter Your Name:</label>
            <input type="text" onBlur={changeHandle} name="name" defaultValue={name} ></input>
        </div>
        <div>
            <label htmlFor="email"> Enter Your Email:</label>
            <input type="email" onBlur={changeHandle} name="email" defaultValue={email} ></input>
        </div>
        <div>
            <label htmlFor="message"> Please leave a message:</label>
            <textarea name="message" onBlur={changeHandle} rows="8" defaultValue={message}/>
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
