import { useForm } from "react-hook-form";

const SignUpForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const handleClearClick = () => {
        reset()
    }

    const handleSubmitForm = (data) => {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Nombre
                <input 
                    {...register("name", {required: true})} />
            </label>
            <br />
            <label>
                Edad
                <input 
                    {...register("edad", {required: true})} />
            </label>
            <br />
            <label>
                Dirección
                <input 
                    {...register("direccion", {required: true})} />
            </label>
            <br />
            <label>
                Código postal
                <input 
                    {...register("codPostal", {required: true})} />
            </label>
            <br />
            <label>
                Teléfono
                <input 
                    {...register("telefono", {required: true})} />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Limpiar</button>
                <button type="submit">Guardar</button>
            </div>
        </form>
    )
}

export default SignUpForm