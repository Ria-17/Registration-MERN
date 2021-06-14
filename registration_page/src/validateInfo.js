export default function validateInfo(values){
    let errors = {};

    if(!values.name.trim()){
        errors.name = 'Username required'
    }

    if(!values.email){
        errors.email = 'Email required'
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    { 
        errors.email = 'Email address is invalid'
    }

    if(!values.password){
        errors.password = 'Password required'
    } else if(values.password.length < 6) {
        errors.password = 'Password need to be 6 character or more'
    }

    if(!values.password2){
        errors.password2 = 'Password required'
    } else if(values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    if(!values.phone){
        errors.phone = 'Phone required'
    } else if(values.phone.length < 10 || values.phone.length >10) {
        errors.phone = 'Phone number invalid'
    }

    if (values.gender === '' || values.gender === "select") {    
        //formIsValid = false;    
        errors.gender = "Select gender.";    
    }

    if (!values.dob) {    
        errors.dob = "Date of birth is required.";    
    }    
        
    if(!values.address.trim()){
        errors.address = 'Address required'
    }
    
    
    return errors;
}