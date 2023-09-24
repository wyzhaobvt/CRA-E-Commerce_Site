const ContactUs = () => {
  return (
    <>
      <h1 className="text-center display-5 mt-3">Contact Us</h1>
      <div className="contact container-fluid w-75 mt-4 px-3 py-5 border rounded-4">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
              aria-describedby="helpId"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelpId"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
