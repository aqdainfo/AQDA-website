import data from '../global';

const Contact = () => {
  const contact = data.contact;

  return (
    <div className="contactpage main">
      <section className="banner">
        <div className="banner__content">
          <h2 className="banner__heading">{ contact.heading }</h2>
          <div className="banner__text" dangerouslySetInnerHTML={{ __html: contact.text }}/>
        </div>

        <form className="banner__form form">
          <div className="form__box">
            <input type="text" id="first-name" placeholder="Name" className="form__input form__input--half" />
            <input type="text" id="last-name" placeholder="Surname" className="form__input form__input--half" />
          </div>
          <input type="email" id="email" placeholder="Email Address" className="form__input" />
          <textarea name="message" id="mmessage" cols="30" rows="9" placeholder="Message" className="form__input" />
          <input type="submit" id="submit" className="form__input form__input--submit" value="send" />
        </form>
      </section>
    </div>
  )
}

export default Contact;
