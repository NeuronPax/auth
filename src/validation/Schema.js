import * as yup from 'yup'

export const Schema = yup.object().shape({
	userEmail: yup
		.string()
		.email('Email should have correct format')
		.required('Email is a required field'),
	userPassword: yup.string().min(6, 'Minimum password length 6 characters')
})