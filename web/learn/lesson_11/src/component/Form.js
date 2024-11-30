import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Enter a name bro..."),
        email: yup.string().email("dodgy email bro").required("Give us your email bro"),
        age: yup.number().positive().integer("Enter a number bro").min(18, "You are too young!").required(),
        password: yup.string().min(6, "Too short bro").max(20, "Too long bro").required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("fullName")} /><br></br>
            <p class={"error"}>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} /><br></br>
            <p class={"error"}>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")} /><br></br>
            <p class={"error"}>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} /><br></br>
            <p class={"error"}>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} /><br></br>
            <p class={"error"}>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    )
}