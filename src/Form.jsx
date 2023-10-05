import { useState } from "react";
import React from "react";

function Form({ cardData, setCardData }) {
  const initialValues = {
    cardholdername: "",
    cardnumber: "",
    month: "",
    year: "",
    cardcvc: "",
  };
  const [formValues, setFormValues] = useState(" ");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === "cardholdername") {
      const formattedValue = value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setFormValues({ ...formValues, [name]: formattedValue });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    setCardData({ ...cardData, [name]: value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.cardholdername) {
      errors.cardholdername = "Cardholder name required";
    }
    if (!values.cardnumber) {
      errors.cardnumber = "Card number required";
    } else if (values.cardnumber.length < 19) {
      errors.cardnumber = "Card number must be 19 characters";
    }
    if (!values.month) {
      errors.month = "Card month & year required";
    }
    if (!values.cardcvc) {
      errors.cardcvc = "CVC must be numeric";
    } else if (values.cardcvc.length < 3) {
      errors.cardcvc = "Card CVC must be 3 characters";
    } else if (values.cardcvc.length > 3) {
      errors.cardcvc = "Card CVC less than 4 characters";
    }
    return errors;
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholdername"
            placeholder="e.g. Jane Appleseed"
            value={formValues.cardholdername}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.cardholdername}</p>
        <div className="field">
          <label>CARD NUMBER</label>
          <input
            type="text"
            name="cardnumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            value={formValues.cardnumber}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.cardnumber}</p>
        <div className="field">
          <div>
            <div className="field-2">
              <label>EXP.DATE (MM/YY)</label>
              <div className="input">
                <input
                  type="number"
                  name="month"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={formValues.month}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="year"
                  placeholder="YY"
                  min="2023"
                  max="2055"
                  value={formValues.year}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.month}</p>
            </div>
            <div className="field-3">
              <label>CVC</label>
              <input
                type="number"
                name="cardcvc"
                placeholder="e.g. 123"
                value={formValues.cardcvc}
                onChange={handleChange}
              />
              <p>{formErrors.cardcvc}</p>
            </div>
          </div>
        </div>
        <button className="button">Confirm</button>
      </form>
    </div>
  );
}

export default Form;