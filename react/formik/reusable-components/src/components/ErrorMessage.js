import {ErrorMessage} from 'formik'

function ErrorMessage_(props){
  return (
    <div className='error'>
      <ErrorMessage {...props} />
    </div>
  )
}

export default ErrorMessage_