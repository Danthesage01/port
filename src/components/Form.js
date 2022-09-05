import React from 'react'
import { useGlobalContext } from '../context/context'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'
const Form = () => {
  const { name, email, message, handleChange } = useGlobalContext()
  const [state, handleSubmit] = useForm("xwkzvkaq");

  if (state.succeeded) {
    return (
      <div className='form form-success'>
        <h3> Hey, {name}😊 </h3>
        <p> Thank you for connecting with me.<br />
          I successfully received your message. <br />
         I will keep in touch.</p>
         <Link to="/" className='btn '>Back Home</Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='form'
    >
      <div className="form-input">
        <input
          type="text"
          name='name'
          value={name}
          placeholder='Name'
          className='name-input'
          onChange={handleChange}
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <input
          type="email"
          name='email'
          value={email}
          placeholder='Email'
          className='email-input'
          onChange={handleChange} />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <textarea
        name='message'
        className='text-input'
        value={message}
        placeholder='Send me a message...'
        onChange={handleChange} />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='btn form-btn'>Let's Connect</button>
    </form>
  )
}

export default Form