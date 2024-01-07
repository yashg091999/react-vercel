function ContactME(){
  return(
    <div className="contact-container">
      <div className="contact-content">
      <h1>Contact Me</h1>
      </div>
      <form action="" className="form">
      <div className="cont">
        <label htmlFor="label" className="label">
          <span>First Name</span>
          <input type="text" />
        </label>
        <label htmlFor="label" className="label">
          <span>last Name</span>
          <input type="text" />
        </label>
        <label htmlFor="label" className="label">
          <span>E-Mail</span>
          <input type="text" />
        </label>
        <label htmlFor="label" className="label">
          <span>Phone No.</span>
          <input type="text" />
        </label>
      </div>
      <button className="btn btn-primary btn1">Submit</button>
      </form>
    </div>
  )
}

export default ContactME;