import React from 'react'
import classes from './ContactUs.module.css'
import Call from '../../assets/call.png'
import Email from '../../assets/email.png'
import Location from '../../assets/location.png'
import Form from '../../components/Form/Form'
const ContactUs = () => {

  const handleSubmit = (values) => {
    console.log(values);
  }
  return (
    <div className={classes.MainContainer}>
      Get in touch
      <h1 className={classes.Header}>CONTACT</h1>
      <div className={classes.Container}>
        <div className={classes.Social}>
          <div className={classes.SocialIcon}>
            <img src={Call} className={classes.Images} />+91 8934523456
          </div>
          <div className={classes.SocialIcon}>
            <img src={Email} className={classes.Images} />test@gmail.com
          </div>
          <div className={classes.SocialIcon}>
            <img src={Location} className={classes.Images} />500/A, Test Place, 110049
          </div>
        </div>

        <div className={classes.Vl}></div>
        <div className={classes.FormContainer}>
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default ContactUs