import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useIcons} from '../assets/Icons'
import Input from '../components/Input'

const Schema = yup.object().shape({
	userEmail: yup
		.string()
		.email('Email should have correct format')
		.required('Email is a required field'),
	userPassword: yup.string().min(6, 'Minimum password length 8 characters')
})

const Login = () => {
	const {
    register,
		handleSubmit,
		formState: {errors},
		reset
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(Schema)
	})
	const icons = useIcons()
	const onFormSubmit = ({userEmail, userPassword}) => {
		alert(`Login: ${userEmail} Password: ${userPassword}`)
		reset()
	}
	return (
		<div className='flex flex-col items-center'>
			{icons.signIn('text-blue-500 h-12')}
			<span className='text-3xl font-bold mt-6'>Welcome back</span>
			<div className='rounded-xl bg-white/70 backdrop-blur-md shadow-xl max-w-md w-full mt-10 p-10'>
				<form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4'>
          <Input
            {...register('userEmail')}
            type='email'
            placeholder='john@example.com'
            error={errors.userEmail?.message}
            label='Email'
            icon={icons.email}
          />
          <Input
            {...register('userPassword')}
            type='password'
            placeholder='Minimum 8 characters'
            error={errors.userPassword?.message}
            label='Password'
            icon={icons.password}
          />
					<button className='w-full'>Sign In</button>
				</form>
			</div>
		</div>
	)
}

export default Login
