import React from 'react'

export default function OrderForm(props) {
    const { values, submit, change } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <label>
                Name:
                <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'  
                    id='name-input'
                />
            </label>
            <label>
                Select your pizza size:
                <select 
                    onChange={onChange}
                    value={values.toppings}
                    name='size'
                    id='size-dropdown'
                >
                    <option value=''>- Select a Size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='XL'>Extra Large</option>
                </select>
            </label>
            <label>
                Cheese
                <input 
                    type="checkbox"
                    name="cheese"
                    checked={values.cheese}
                    onChange={onChange}
                />
            </label>
            <label>
                sausage
                <input 
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>
            <label>
                peppers
                <input 
                    type="checkbox"
                    name="peppers"
                    checked={values.peppers}
                    onChange={onChange}
                />
            </label>
            <label>
                pepperoni
                <input 
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                />
            </label>
            <label>
                Everything
                <input 
                    type="checkbox"
                    name="everything"
                    checked={values.everything}
                    onChange={onChange}
                />
            </label>
            <label>
                Special Intructions:
                <input 
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'  
                    id='special-text'
                />
            </label>
            <button id='order-button'>submit</button>
        </form>
    )
}