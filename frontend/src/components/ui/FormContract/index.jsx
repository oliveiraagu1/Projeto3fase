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
    password: yup
      .string()
      .min(3, "A senha precisa ter no mínimo 3 caracteres")
      .required("Campo obrigatório!"),
  })
  .required();

export function FormContract() {
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
      <label className={styles.textLogin}>Nome:</label>
      <input
        {...register("name")}
        className={
          errors.name?.type === "required" || errors.name?.type === "name"
            ? styles.inputError
            : styles.input
        }
        type="text"
        placeholder="Nome do contrato"
      />
      <p className={styles.errors}>{errors.name?.message}</p>

      <label className={styles.textLogin}>Matrícula funcionário:</label>
      <input
        {...register("registration")}
        className={
          errors.email?.password === "required" ||
          errors.password?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="number"
        placeholder="Digite sua matrícula"
      />
      <p className={styles.errors}>{errors.password?.message}</p>

      <label className={styles.textLogin}>Data:</label>
      <input
        {...register("date")}
        className={
          errors.email?.password === "required" ||
          errors.password?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="date"
      />
      <p className={styles.errors}>{errors.password?.message}</p>

      <label className={styles.textLogin}>Código do imóvel:</label>
      <input
        {...register("date")}
        className={
          errors.email?.password === "required" ||
          errors.password?.type === "min"
            ? styles.inputError
            : styles.input
        }
        type="number"
      />
      <p className={styles.errors}>{errors.password?.message}</p>

      <label className={styles.textLogin}>Tipo de imóvel:</label>
      <select {...register("date")} className={styles.input}>
        <option value="1">Casa</option>
        <option value="2">Apartamento</option>
      </select>

      <p className={styles.errors}>{errors.password?.message}</p>

      <label className={styles.textLogin}>Tipo de contrato:</label>
      <select {...register("date")} className={styles.input}>
        <option value="1">Venda</option>
        <option value="2">Aluguel</option>
      </select>
      <p className={styles.errors}>{errors.password?.message}</p>

      <Button className={styles.button} loading={loading} type="submit">
        CADASTRAR
      </Button>
    </form>
  );
}
