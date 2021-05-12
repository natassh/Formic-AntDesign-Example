import React from 'react';
import { useFormik } from 'formik';
import validate from './validateRules/validateRules';
 
 const FormExample = () => {
  
   const formik = useFormik({
     initialValues: {
       registrationPlate: '',
       email: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
         <div>
            <label htmlFor="registrationPlate">Matrícula</label>
            <input
                id="registrationPlate"
                name="registrationPlate"
                type="registrationPlate"
                onChange={formik.handleChange}
                value={formik.values.registrationPlate}
            />
            {formik.errors.registrationPlate ? <div>{formik.errors.registrationPlate}</div> : null}
         </div>
         <div>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
         </div>
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default FormExample;