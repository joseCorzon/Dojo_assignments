import React, { useState } from  'react';

const HookForm = ()=>{
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    return (
        <form>
            <div claseName='form-group'>
                <label htmlFor=''>First Name</label>
                <input type='text' clasName='form-control' onChange={(e)=>setFirstName(e.target.value)}></input>
                {
                    firstName.length<2 && firstName.length>0? <p className='text-danger'>First Name must be at least 2 characters</p> : null
                }
            </div>
            <div claseName='form-group'>
                <label htmlFor=''>Last Name</label>
                <input type='text' clasName='form-control' onChange={(e)=>setLastName(e.target.value)}></input>
                {
                    lastName.length<2 && lastName.length>0? <p className='text-danger'>last Name must be at least 2 characters</p> : null
                }
            </div>
            <div claseName='form-group'>
                <label htmlFor=''>Email</label>
                <input type='email' clasName='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                {
                    email.length<5 && email.length>0? <p className='text-danger'>First Name must be at least 5 characters</p> : null
                }
            </div>
            <div claseName='form-group'>
                <label htmlFor=''>Password</label>
                <input type='password' clasName='form-control' onChange={(e)=>setPassword(e.target.value)}></input>
                {
                    password.length<8 && password.length>0? <p className='text-danger'>Password must be at least 8 characters</p> : null
                }
            </div>
            <div claseName='form-group'>
                <label htmlFor=''>Confirm Password</label>
                <input type='password' clasName='form-control' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                {
                    password != confirmPassword && confirmPassword.length>0? <p className='text-danger'>password must match</p> : null
                }
            </div>
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            
        </form>
    )
}

export default HookForm;