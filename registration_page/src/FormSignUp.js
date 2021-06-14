import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'


const FormSignUp = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        
        <div className = "form-content-right" >
            <form method="POST" className="form" onSubmit={handleSubmit}>
                <h1><u>Registration Form</u></h1><br/>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        User Name 
                    </label>
                    <input id="name" 
                    type="text" 
                    name="name" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    value={values.name} 
                    onChange={handleChange} />
                </div>
                {errors.name && <p style={ {color:'red'}}>{errors.name}</p>}

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email" 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email"
                    value={values.email} 
                    onChange={handleChange} />
                </div>
                {errors.email && <p style={ {color:'red'}}>{errors.email}</p>}

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id="password" 
                    type="password" 
                    name="password" 
                    className="form-input" 
                    placeholder="Enter your password" 
                    value={values.password} 
                    onChange={handleChange} />
                </div>
                {errors.password && <p style={ {color:'red'}}>{errors.password}</p>}

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input id="password2" 
                    type="password" 
                    name="password2" 
                    className="form-input" 
                    placeholder="Enter your password" 
                    value={values.password2} 
                    onChange={handleChange}/>
                </div>
                {errors.password2 && <p style={ {color:'red'}}>{errors.password2}</p>}

                <div className="form-inputs">
                    <label htmlFor="phone" className="form-label">
                        Phone number
                    </label>
                    <input id="phone" 
                    type="Number" 
                    name="phone" 
                    className="form-input" 
                    placeholder="Enter your phone number" 
                    value={values.phone} 
                    onChange={handleChange}/>
                </div>
                {errors.phone && <p style={ {color:'red'}}>{errors.phone}</p>}

                <div className="form-inputs">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input id="address" 
                    type="text" 
                    name="address" 
                    className="form-input" 
                    placeholder="Enter your address" 
                    value={values.address} 
                    onChange={handleChange}/>
                </div>
                {errors.address && <p style={ {color:'red'}}>{errors.address}</p>}

                <div  className="form-inputs">    
                            <label htmlFor="gender" className="form-label">
                                Gender
                            </label>    
                            <select name="gender" onChange={handleChange}    
                               className="form-input"   
                                value={values.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                </div>  
                        {errors.gender && <p style={ {color:'red'}}>{errors.gender}</p>}  

                <div className="form-inputs">
                    <label htmlFor="dob" className="form-label">
                        Date of birth
                    </label>
                    <input id="dob" 
                    type="date" 
                    name="dob" 
                    className="form-input" 
                    placeholder="Enter your date of birth"
                    value={values.dob} 
                    onChange={handleChange} />
                </div>
                         {errors.dob && <p style={ {color:'red'}}>{errors.dob}</p>}    

                        
                <button className="form-input-btn" type="submit"> Sign Up </button><br></br>
                <span className="form-input-login"> Already have an account? Login <a href='#'>here</a></span>
            </form>
        </div>
        


    )
}

export default FormSignUp
