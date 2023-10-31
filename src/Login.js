import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

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
  const onFormSubmit = ({userEmail, userPassword}) => {
    alert(`Login: ${userEmail} Password: ${userPassword}`)
    reset()
  }
  const errorEmail = errors.userEmail?.message
  const errorPassword = errors.userPassword?.message
  return (
    <div className='flex flex-col items-center'>
      <svg className='text-blue-500 h-12' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
      <span className='text-3xl font-bold mt-6'>Welcome back</span>
      <div className='rounded-xl bg-white/70 backdrop-blur-md shadow-xl max-w-md w-full mt-10 p-10'>
        <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4'>
          <div>
            <label htmlFor='email' className='text-sm font-medium'>Email</label>
            <div className='relative flex items-center shadow-sm mt-1'>
              <svg className={`absolute ${errorEmail ? 'text-red-400' : 'text-gray-400'} h-5 pl-3`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
                {...register('userEmail')}
                type='email'
                id='email'
                placeholder='john@example.com'
                className={`${errorEmail && 'input_error'} w-full pl-10`} />
                {
                  errorEmail && <svg className='absolute text-red-500 h-5 right-0 pr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                }
            </div>
            <span className='block text-sm text-red-600 mt-1'>{errorEmail}</span>
          </div>
          <div>
            <label htmlFor='password' className='text-sm font-medium'>Password</label>
            <div className='relative flex items-center shadow-sm mt-1'>
              <svg className={`absolute ${errorPassword ? 'text-red-400' : 'text-gray-400'} h-5 pl-3`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <input
                {...register('userPassword')}
                type='password'
                id='password'
                placeholder='Password'
                className={`${errorPassword && 'input_error'} w-full pl-10`} />
                {
                  errorPassword && <svg className='absolute text-red-500 h-5 right-0 pr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                }
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