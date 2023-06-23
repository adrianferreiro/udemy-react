import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value//existe en javascript las propiedades computadas de los objetos
        });
    }

    return {
        ...formState, //para exportar usuario correo y pass
        formState,
        onInputChange,
    }
}
