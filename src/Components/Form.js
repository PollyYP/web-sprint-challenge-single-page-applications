import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra large"],
      "Size must be selected"
    ),
  sauce: yup
    .string()
    .oneOf([
      "Robust Inspired Tomato Sauce",
      "Hearty Marinara Sauce",
      "Garlic Parmesan Sauce",
      "Alfredo Sauce",
    ]),
  toppings: yup
    .string()
    .required("Name is required")
    .max(10, "Choose up to 10 toppings"),
});

export default function Form(props) {
  const [form, setForm] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    special: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    special: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleChange = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  const submit = () => {
    props.setNewOrder({
      name: form.name,
      size: form.size,
      sauce: form.sauce,
      toppings: form.toppings,
      special: form.special,
    });
  };

  return (
    <div>
      <div>
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={submit}>
          <div className="error-message">
            <p>{errors.name}</p>
            <p>{errors.size}</p>
            <p>{errors.sauce}</p>
            <p>{errors.toppings}</p>
          </div>
          <label for="name">Name:</label>
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            id="name"
            name="name"
          />
        </form>
        <h4>Choice of Size</h4>
        <p>Required</p>
      </div>
      <select onChange={handleChange} value={form.size} name="size">
        <option value="small">Small (10")</option>
        <option value="medium">Medium (12")</option>
        <option value="large">Large (14")</option>
        <option value="extra large">Extra Large (16")</option>
      </select>
      <div>
        <h4>Choice of Sauce</h4>
        <p>Required</p>
      </div>
      <form>
        <input
          onChange={handleChange}
          checked={form.sauce === "Robust Inspired Tomato Sauce"}
          type="radio"
          id="tomato"
          name="sauce"
          value="Robust Inspired Tomato Sauce"
        />
        <label for="male">Robust Inspired Tomato Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Hearty Marinara Sauce"}
          type="radio"
          id="marinara"
          name="sauce"
          value="Hearty Marinara Sauce"
        />
        <label for="female">Hearty Marinara Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Garlic Parmesan Sauce"}
          type="radio"
          id="garlic"
          name="sauce"
          value="Garlic Parmesan Sauce"
        />
        <label for="other">Garlic Parmesan Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Alfredo Sauce"}
          type="radio"
          id="alfredo"
          name="sauce"
          value="Alfredo Sauce"
        />
        <label for="other">Alfredo Sauce</label>
      </form>
      <div>
        <h4>Add Toppings</h4>
        <p>Choose up to 10</p>
      </div>
      <form>
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping1"
          name="toppings"
        />
        <label for="topping1"> Jalapeno Peppers</label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping2"
          name="toppings"
        />
        <label for="topping2"> Banana Peppers</label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping3"
          name="toppings"
        />
        <label for="topping3"> Diced Tomatoes</label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping4"
          name="toppings"
        />
        <label for="topping4"> Black Olives</label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping5"
          name="toppings"
        />
        <label for="topping5"> Mushrooms</label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="topping6"
          name="toppings"
        />
        <label for="topping6"> Green Peppers</label>
        <br />
      </form>
      <div>
        <h4>Special Instructions</h4>
      </div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          id="special"
          name="special"
          value={form.special}
        />
      </form>
      <Link to="/completedOrder">
        <button disabled={disabled} type="submit">
          Add to Order
        </button>
      </Link>
    </div>
  );
}
