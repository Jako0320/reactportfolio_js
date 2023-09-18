import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
    } else {
      setFormErrors(validationErrors);
    }
  };

  return (
    <section>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-1">
            <label htmlFor="name" className="form-label font-weight-bold">
              Name
            </label>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-1">
            <label htmlFor="email" className="form-label font-weight-bold">
              Email
            </label>
          </div>
          <div className="col-md-10">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-1">
            <label htmlFor="message" className="form-label font-weight-bold">
              Message
            </label>
          </div>
          <div className="col-md-10">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-control ${
                formErrors.message ? "is-invalid" : ""
              }`}
              rows="6"
            />
            {formErrors.message && (
              <div className="invalid-feedback">{formErrors.message}</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-8 offset-md-1">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
