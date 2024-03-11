import React, { useState } from 'react'
import {Row, Col, Button, Input} from 'reactstrap';
import { loginUser } from '../../fakebackend/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginUser(email, password, navigate);
  }

  return (
    <React.Fragment>
    <Row className='signup-body '>
      <Col className='signup-form' sm="12">
        <div className='heading'>Welcome Back!</div>
        <div className='sub-heading'>LogIn To Your Account</div>
       
          <label  className='text'>Email</label><br/>  
          <Input name='email' type='email' onChange={(e) => setEmail(e.target.value)} className='form-input'/>
          <br />
          <label  className='text'>Password</label><br/>  
          <Input name='password' type='text' onChange={(e) => setPassword(e.target.value)} className='form-input'/>
 
        <Button className='btn' onClick={(e) => handleSubmit(e)}>Login</Button><br/>
        <span className='text'>Donit Have An Account? SignUp!</span>
      </Col>
    </Row>
</React.Fragment>
  )
}

export default Login