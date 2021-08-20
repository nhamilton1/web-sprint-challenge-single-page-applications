import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'XL'], 'Please Select Your Pizza Size'),
    instructions: yup
        .string()
        .trim(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    garlic: yup.boolean()
})

export default formSchema