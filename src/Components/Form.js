import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  special: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
});

export default function Form(props) {
  const [form, setForm] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: false,
    special: "",
  });

  const [disabled, setDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors }));
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

  let history = useHistory();
  const submitOrder = (event) => {
    event.preventDefault();
    props.setNewOrder([...props.newOrder, form]);
  };

  return (
    <div>
      <div>
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={submitOrder}>
          <div>
            <p className="error-message">{errors.name}</p>
          </div>
          <label htmlFor="name">Name:</label>
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
        <p className="error-message">{errors.size}</p>
      </div>
      <select onChange={handleChange} value={form.size} name="size">
        <option value="">Please select</option>
        <option value="small">Small (10")</option>
        <option value="medium">Medium (12")</option>
        <option value="large">Large (14")</option>
        <option value="extra large">Extra Large (16")</option>
      </select>
      <div>
        <h4>Choice of Sauce</h4>
        <p>Required</p>
        <p className="error-message">{errors.sauce}</p>
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
        <label htmlFor="male">Robust Inspired Tomato Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Hearty Marinara Sauce"}
          type="radio"
          id="marinara"
          name="sauce"
          value="Hearty Marinara Sauce"
        />
        <label htmlFor="female">Hearty Marinara Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Garlic Parmesan Sauce"}
          type="radio"
          id="garlic"
          name="sauce"
          value="Garlic Parmesan Sauce"
        />
        <label htmlFor="other">Garlic Parmesan Sauce</label>
        <br />
        <input
          onChange={handleChange}
          checked={form.sauce === "Alfredo Sauce"}
          type="radio"
          id="alfredo"
          name="sauce"
          value="Alfredo Sauce"
        />
        <label htmlFor="other">Alfredo Sauce</label>
      </form>
      <div>
        <h4>Add Toppings</h4>
      </div>
      <form>
        <input onChange={handleChange} type="checkbox" id="topping1" />
        <label htmlFor="topping1"> Jalapeno Peppers</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping2" />
        <label htmlFor="topping2"> Banana Peppers</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping3" />
        <label htmlFor="topping3"> Diced Tomatoes</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping4" />
        <label htmlFor="topping4"> Mushrooms</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping5" />
        <label htmlFor="topping5"> Ham</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping6" />
        <label htmlFor="topping6">Bacon</label>
        <br />
        <input onChange={handleChange} type="checkbox" id="topping7" />
        <label htmlFor="topping7">Pepperoni</label>
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
      <button
        className="btn"
        disabled={disabled}
        onClick={() => history.push("/completedOrder")}
      >
        Add to Order
      </button>
    </div>
  );
}
