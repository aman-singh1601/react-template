import React, { useState } from 'react'
import {Row, Col, Button, Input} from 'reactstrap';
import { registerUser } from '../../fakebackend/auth';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = registerUser(email, password, navigate);
  }

  return (
    <React.Fragment>
        <Row className='signup-body '>
          <Col className='signup-form' sm="12">
            <div className='heading'>Welcome !</div>
            <div className='sub-heading'>Create your account</div>
           
              <label  className='text'>Email</label><br/>  
              <Input name='email' type='email' onChange={(e) => setEmail(e.target.value)} className='form-input'/>
              <br />
              <label  className='text'>Password</label><br/>  
              <Input name='password' type='text' onChange={(e) => setPassword(e.target.value)} className='form-input'/>
     
            <Button className='btn' onClick={(e) => handleSubmit(e)}>Sign Up</Button><br/>
            <span className='text'>Already Have An Account? Login</span>
          </Col>
        </Row>
    </React.Fragment>
  )
}

export default Signup