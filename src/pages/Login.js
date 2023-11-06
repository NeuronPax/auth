import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useIcons} from '../assets/Icons'

const Schema = yup.object().shape({
  userEmail: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  userPassword: yup
    .string()
    .min(6, 'Minimum password length 8 characters')
})

const Login =() => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
      userEmail: '',
      userPassword: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(Schema)
  })
  const icons = useIcons()
  const onFormSubmit = ({userEmail, userPassword}) => {
    alert(`Login: ${userEmail} Password: ${userPassword}`)
    reset()
  }
  const errorEmail = errors.userEmail?.message
  const errorPassword = errors.userPassword?.message
  return (
    <div className='flex flex-col items-center'>
      {icons.signIn('text-blue-500 h-12')}
      <span className='text-3xl font-bold mt-6'>Welcome back</span>
      <div className='rounded-xl bg-white/70 backdrop-blur-md shadow-xl max-w-md w-full mt-10 p-10'>
        <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4'>
          <div>
            <label htmlFor='email' className='text-sm font-medium'>Email</label>
            <div className='relative flex items-center shadow-sm mt-1'>
              {icons.email(`absolute ${!errorEmail ? 'text-gray-400' : 'text-red-400'} h-5 pl-3`)}
              <input
                {...register('userEmail')}
                type='email'
                id='email'
                placeholder='john@example.com'
                className={`${errorEmail && 'input_error'} w-full pl-10`} />
                {errorEmail && icons.validError('absolute text-red-500 h-5 right-0 pr-3')}
            </div>
            <span className='block text-sm text-red-600 mt-1'>{errorEmail}</span>
          </div>
          <div>
            <label htmlFor='password' className='text-sm font-medium'>Password</label>
            <div className='relative flex items-center shadow-sm mt-1'>
              {icons.password(`absolute ${!errorPassword ? 'text-gray-400' : 'text-red-400'} h-5 pl-3`)}
              <input
                {...register('userPassword')}
                type='password'
                id='password'
                placeholder='Password'
                className={`${errorPassword && 'input_error'} w-full pl-10`} />
                {errorPassword && icons.validError('absolute text-red-500 h-5 right-0 pr-3')}
            </div>
            <span className='block text-sm text-red-600 mt-1'>{errorPassword}</span>
          </div>
          <button className='w-full'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login