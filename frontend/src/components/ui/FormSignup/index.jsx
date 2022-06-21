import { useState, useContext } from "react";
import styles from "./styles.module.scss";
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
    name: yup
      .string()
      .min(3, "O nome precisa ter no mínimo 3 caracteres")
      .required("Campo é obrigatório!"),
    password: yup
      .string()
      .min(3, "A senha precisa ter no mínimo 3 caracteres")
      .required("Campo é obrigatório!"),
    registration: yup
      .number()
      .typeError("Campo é obrigatório!")
      .min(1, "A matrícula tem que ser maior que 0")
      .required(),
    idRole: yup.string().required("Campo obrigatório!"),
  })
  .required();

export function FormSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleSignup(data) {
    setLoading(true);
    await signUp(data);
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit(handleSignup)} className={styles.form}>
      <label className={styles.textLogin}>Email:</label>
      <input
        {...register("email")}
        className={
          errors.email?.type === "required" || errors.email?.type === "email"
            ? styles.inputError
            : styles.input
        }
        type="text"
        placeholder="Digite o seu e-mail"
      />
      <p className={styles.errors}>{errors.email?.message}</p>

      <label className={styles.textLogin}>Nome:</label>
      <input
        {...register("name")}
        className={
          errors.name?.type === "required" || errors.name?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="text"
        placeholder="Digite o seu nome completo"
      />
      <p className={styles.errors}>{errors.name?.message}</p>

      <label className={styles.textLogin}>Senha:</label>
      <input
        {...register("password")}
        className={
          errors.password?.type === "required" ||
          errors.password?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="password"
        placeholder="Digite a sua senha"
      />
      <p className={styles.errors}>{errors.password?.message}</p>

      <label className={styles.textLogin}>Matrícula:</label>
      <input
        {...register("registration")}
        className={
          errors.registration?.type === "typeError" ||
          errors.registration?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="number"
        placeholder="Digite a sua matrícula"
      />
      <p className={styles.errors}>{errors.registration?.message}</p>

      <label className={styles.textLogin}>Cargo:</label>
      <select
        {...register("idRole")}
        className={
          errors.idRole?.type === "required" ? styles.inputError : styles.input
        }
      >
        <option value="">Selecione</option>
        <option value="1">Administrador</option>
        <option value="2">Funcionário</option>
        <option value="3">Visitante</option>
      </select>
      <p className={styles.errors}>{errors.idRole?.message}</p>

      <Button className={styles.button} loading={loading} type="submit">
        CADASTRAR
      </Button>
    </form>
  );
}
