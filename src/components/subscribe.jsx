import { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import global from '../global';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });

  }

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }


  return (
    <>
      <h3 className="mc__title">{status === "success" ? "Success!" : "Stay In touch"}</h3>

      {status === "sending" && <div className="mc__alert mc__alert--sending">sending...</div>}

      {status === "error" && <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />}
      
      {status === "success" && <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: message }} />}

      <form className="mc__form" onSubmit={(e) => handleSubmit(e)} >
        {status !== "success" ? (
          <>
            <div className="mc__field-container">
              <label for="newsletter" className='is--hidden'>Subscribe</label>
              <input type="email" id="newsletter" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type="submit" value="Subscribe" className='mc__submit' />
          </>
        ) : null}

      </form>
    </>
  );
};


const MailchimpForm = props => {
  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=${global.mc.u}&id=${global.mc.id}`;

  return (

    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>

  )
}

export default MailchimpForm;