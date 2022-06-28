import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import globalStyles from "../../../../styles/global.module.scss";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../../contexts/AuthContext";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Precisa ser um e-mail válido!")
      .required("Campo obrigatório!"),
    password: yup
        .string()
        .min(3, "A senha precisa ter no mínimo 3 caracteres")
        .required("Campo obrigatório!"),
  })
  .required();

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleLogin(data) {
    setLoading(true);
    await signIn(data);
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
      <label className={styles.textLogin}>Email:</label>
      <input
        {...register("email")}
        className={errors.email?.type === 'required' || errors.email?.type === 'email'  ? styles.inputError : globalStyles.input}
        type="text"
        placeholder="Digite o seu e-mail"
      />
      <p className={styles.errors}>{errors.email?.message}</p>

      <label className={styles.textLogin}>Senha:</label>
      <input
        {...register("password")}
        className={errors.email?.password === 'required' || errors.password?.type === 'min'  ? styles.inputError : globalStyles.input}
        type="password"
        placeholder="Digite a sua senha"
      />
      <p className={styles.errors}>{errors.password?.message}</p>

      <Button className={styles.button} loading={loading} type="submit">
        ENTRAR
      </Button>
    </form>
  );
}
