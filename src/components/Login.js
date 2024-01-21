import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push('/dashboard')
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
       <section class="hero is-success is-fullheight is-fullwidth">
         <div class="hero-body">
           <div class="container">
                <div className='columns is-centered'>
                    <div className='column is-4-desktop'>
                        <form onSubmit={Auth} className='box'>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field mt-5">
                                <label className="label">Email or Username</label>
                                <div className="controls">
                                    <input type="text" value={email} onChange={(e)=> {setEmail(e.target.value)}} className='input' placeholder='Username' />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} className='input' placeholder='*******' />
                                </div>
                            </div>
                            <div className="field">
                                <button className='button is-success is-full-width'>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
           </div>
         </div>
       </section>
    
  )
}

export default Login
