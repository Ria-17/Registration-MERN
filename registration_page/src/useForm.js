import {useState, useEffect} from 'react'

const useForm = validate => {
   const [values, setvalue] = useState({
       name:"",
       email:"",
       password:"",
       password2:"",
       phone:"",
       gender: 'select',
       dob: '',
       address: ""
   })

   const [errors, seterrors] = useState({})

   const handleChange = e => {
       const {name, value} = e.target
       setvalue({
           ...values,
           [name] : value
       });
   };

   const handleSubmit = async e => {
       e.preventDefault();
       seterrors(validate(values));

       const name1= values.name ;
       const email1= values.email ;
       const password1= values.password ;
       const password21= values.password2 ;
       const phone1= values.phone;
       const address1= values.address ;
       const gender1 = values.gender;
       const dob1 = values.dob;
       const res=await fetch("/signup",{
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           
           body:JSON.stringify({
             name:name1, email:email1, password:password1, password2:password21, phone:phone1, address:address1, gender:gender1, dob:dob1      
           })
         });
         const data=await res.json();
         if(data.status===400||!data){
           window.alert('Cannot register');
           console.log('Cannot register');
         }
         else{
           window.alert("Registration Successfull!!");
         }
   };

   return {handleChange, values, handleSubmit, errors};
}

export default useForm;