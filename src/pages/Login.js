import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Schema} from '../validation/Schema'
import {useIcons} from '../hooks/Icons'
import Input from '../components/Input'
import {data} from '../data/data'
import {useAuth} from '../hooks/Auth'

const Login = () => {
	const {
    register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(Schema)
	})
	const icons = useIcons()
  const {setUser} = useAuth()
	const onFormSubmit = ({userEmail, userPassword}) => {
    (userEmail === data.email) && (userPassword === data.password) ?
      setUser(userEmail)
    :
      alert('Login or password is incorrect')
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
            placeholder='Minimum 6 characters'
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
