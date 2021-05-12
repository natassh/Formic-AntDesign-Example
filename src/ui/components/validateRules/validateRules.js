const validate = values => {
    const errors = {};
   
    if (!values.registrationPlate) {
      errors.registrationPlate = 'Required';
    } else if (!/^$|^([ce]?\d{4}[bcdfghjklmnpqrstvwxyz0-9]{3})$|^([a-z0-9]{1,2}\d{4}[a-z0-9]{1,2})$/i.test(values.registrationPlate)) {
      errors.registrationPlate = 'La matrícula debe ser válida.';
      
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  export default validate;