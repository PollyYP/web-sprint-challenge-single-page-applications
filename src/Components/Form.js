import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
});

export default function Form() {
  const [form, setForm] = useState({ name: "" });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({ name: "" });

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

  const submit = (event) => {
    event.preventDefault();
    const newUser = {
      name: form.name.trim(),
      email: form.email,
      password: form.password,
      agree: form.agree,
    };
  };

  return (
    <div>
      <div>
        <h2>Build Your Own Pizza</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
        </form>
        <h4>Choice of Size</h4>
        <p>Required</p>
      </div>
      <select>
        <option>Small (10")</option>
        <option>Medium (12")</option>
        <option>Large (14")</option>
        <option>Extra Large (16")</option>
      </select>
      <div>
        <h4>Choice of Sauce</h4>
        <p>Required</p>
      </div>
      <form>
        <input type="radio" id="tomato" name="sauce" value="red" />
        <label for="male">Robust Inspired Tomato Sauce</label>
        <br />
        <input type="radio" id="marinara" name="sauce" value="red" />
        <label for="female">Hearty Marinara Sauce</label>
        <br />
        <input type="radio" id="garlic" name="sauce" value="white" />
        <label for="other">Garlic Parmesan Sauce</label>
        <br />
        <input type="radio" id="alfredo" name="sauce" value="white" />
        <label for="other">Alfredo Sauce</label>
      </form>
      <div>
        <h4>Add Toppings</h4>
        <p>Choose up to 10</p>
      </div>
      <form>
        <input type="checkbox" id="topping1" name="jalapeno" value="Bike" />
        <label for="topping1"> Jalapeno Peppers</label>
        <br />
        <input type="checkbox" id="topping2" name="bnnPeppers" value="Car" />
        <label for="topping2"> Banana Peppers</label>
        <br />
        <input type="checkbox" id="topping3" name="tomatoes" value="Boat" />
        <label for="topping3"> Diced Tomatoes</label>
        <br />
        <input type="checkbox" id="topping4" name="olives" value="Bike" />
        <label for="topping4"> Black Olives</label>
        <br />
        <input type="checkbox" id="topping5" name="mushrooms" value="Car" />
        <label for="topping5"> Mushrooms</label>
        <br />
        <input type="checkbox" id="topping6" name="grnPeppers" value="Boat" />
        <label for="topping6"> Green Peppers</label>
        <br />
      </form>
      <div>
        <h4>Special Instructions</h4>
      </div>
      <form>
        <input type="text" id="special" name="special" />
      </form>
      <button>Add to Order</button>
    </div>
  );
}
