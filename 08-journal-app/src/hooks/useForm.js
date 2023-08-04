import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({
        // name: 'nombre no valido'
    });
    useEffect(() => {
      createValidators();  
    }, [formState]) //se dispara cada vez que el formstate cambia y llama el createValidators();

    //vamos a memorizar el valor
    //va a cambiar solamente cuando cambia el [formState] 
    const isFormValid = useMemo( ()=> {
        //vamos a barrer las propiedades del formValidations para saber si todas son 'null'
        for (const formValue of Object.keys( formValidation )) {
            if (formValidation[formValue] !== null) return false;
        }

        //tengo que retornar true o false dependiendo si el formulario es válido
        return true;
    }, [ formValidation ]);  
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        //va a tomar el objeto que le enviamos para validar y crearse un nuevo estado para saber si
        //los inputs son válidos o no
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            // console.log(formField);
            //ahora vamos a desestructurar el objeto que le pasamos con las validaciones
            const [ fn, errorMessage ] = formValidations[formField];

            //creamos una propiedad computada - por eso pusimos los mismos nombres en los objetos del archivo
            //RegisterPage: formData y formValidations
            //esto va a ser igual a la ejecución de la función que estoy recibiendo
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField]) ? null : errorMessage;            
        }
        //ahora establecemos que éste objeto va a ser el nuevo valor del setFormValidation
        setformValidation( formCheckedValues );
        console.log(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}