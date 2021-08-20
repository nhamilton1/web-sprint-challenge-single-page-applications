import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OrderForm from './components/OrderForm'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instructions: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  cheese: false,
  sausage: false,
  peppers: false,
  pepperoni: false,
}

// const initialFormErrors = {
//   ///// TEXT INPUTS /////
//   name: '',
//   instructions: '',
//   ///// DROPDOWN /////
//   size: '',

// }

const initialUsers = []
// const initialDisabled = true

const App = () => {

  const [ user, setUser ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  // const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  // const [ disabled, setDisabled ] = useState(initialDisabled)


  const postNewUser = newFriend => {
    axios.post('https://reqres.in/api/orders', newFriend)
      .then(res => {
        setUser([res.data, ...user]);
      }).catch(err => console.error(err));

    setFormValues(initialFormValues);
  }


  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      size: formValues.size.trim(),
      toppings: ['cheese', 'sausage', 'pepers', 'pepperoni'].filter(toppings => !!formValues[toppings]),
    }
    postNewUser(newUser)
  }



  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </div>
      </nav>
      <OrderForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
};
export default App;
