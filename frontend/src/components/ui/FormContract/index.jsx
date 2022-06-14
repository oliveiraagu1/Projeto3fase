import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../../contexts/AuthContext";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório!"),
    registration: yup
      .string()
      .min(3, "A matrícula precisa ter no mínimo 3 caracteres")
      .required("Campo obrigatório!"),
    date: yup
      .date()
      .required("Campo obrigátorio!")
      .default(() => new Date()),
    propertyCode: yup.string().required("Campo obrigátorio!"),
    typeProperty: yup.string().required("Campo obrigátorio!"),
    typeAgreemnet: yup.string().required("Campo obrigátorio!"),
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

  console.log(errors);

  async function handleLogin(data) {
    // setLoading(true);
    // await signIn(data);
    // setLoading(false);
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
          errors.registration?.type === "min" ? styles.inputError : styles.input
        }
        type="number"
        placeholder="Digite sua matrícula"
      />
      <p className={styles.errors}>{errors.registration?.message}</p>

      <label className={styles.textLogin}>Data:</label>
      <input
        {...register("date")}
        className={
          errors.date?.type === "required" ? styles.inputError : styles.input
        }
        type="date"
      />
      <p className={styles.errors}>{errors.date?.message}</p>

      <label className={styles.textLogin}>Código do imóvel:</label>
      <input
        {...register("propertyCode")}
        className={
          errors.propertyCode?.type === "required"
            ? styles.inputError
            : styles.input
        }
        type="number"
        placeholder="Digite o código do imóvel"

      />
      <p className={styles.errors}>{errors.propertyCode?.message}</p>

      <label className={styles.textLogin}>Tipo de imóvel:</label>
      <select
        {...register("typeProperty")}
        className={
          errors.typeProperty?.type === "required"
            ? styles.inputError
            : styles.input
        }
      >
        <option value="">Selecione</option>
        <option value="1">Casa</option>
        <option value="2">Apartamento</option>
      </select>

      <p className={styles.errors}>{errors.typeProperty?.message}</p>

      <label className={styles.textLogin}>Tipo de contrato:</label>
      <select
        {...register("typeAgreemnet")}
        className={
          errors.typeAgreemnet?.type === "required"
            ? styles.inputError
            : styles.input
        }
      >
        <option value="">Selecione</option>
        <option value="1">Venda</option>
        <option value="2">Aluguel</option>
      </select>
      <p className={styles.errors}>{errors.typeAgreemnet?.message}</p>

      <Button className={styles.button} loading={loading} type="submit">
        CADASTRAR
      </Button>
    </form>
  );
}
