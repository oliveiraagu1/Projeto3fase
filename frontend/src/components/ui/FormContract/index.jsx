import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import styles from "./styles.module.scss";
import globalStyles from "../../../../styles/global.module.scss";
import Button from "../Button";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório!"),
    registration: yup
      .string()
      .min(3, "A matrícula precisa ter no mínimo 3 caracteres")
      .required("Campo obrigatório!"),
    contractDate: yup.string().required("Campo obrigátorio!"),
    propertyCode: yup.string().required("Campo obrigátorio!"),
    typeProperty: yup.string().required("Campo obrigátorio!"),
    typeAgreement: yup.string().required("Campo obrigátorio!"),
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

  const { createContract, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  console.log(errors);

  async function handleContract(data) {
    setLoading(true);
    await createContract(data);
    setLoading(false);
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>Registre um contrato</h1>
      </div>

      <form onSubmit={handleSubmit(handleContract)} className={styles.form}>
        <div className={styles.content}>
          <label className={styles.textLogin}>Nome:</label>
          <input
            {...register("name")}
            className={
              errors.name?.type === "required" || errors.name?.type === "name"
                ? globalStyles.inputError
                : globalStyles.input
            }
            type="text"
            placeholder="Nome do contrato"
          />
          <p className={styles.errors}>{errors.name?.message}</p>
        </div>

        <div className={styles.content}>
          <label className={styles.textLogin}>Matrícula funcionário:</label>
          <input
            {...register("registration")}
            className={
              errors.registration?.type === "min"
                ? globalStyles.inputError
                : globalStyles.input
            }
            type="number"
            value={user.registration}
            disabled
          />
          <p className={styles.errors}>{errors.registration?.message}</p>
        </div>

        <div className={styles.content}>
          <label className={styles.textLogin}>Data:</label>
          <input
            {...register("contractDate")}
            className={
              errors.contractDate?.type === "required"
                ? globalStyles.inputError
                : globalStyles.input
            }
            type="date"
          />
          <p className={styles.errors}>{errors.contractDate?.message}</p>
        </div>
        <div className={styles.content}>
          <label className={styles.textLogin}>Código do imóvel:</label>
          <input
            {...register("propertyCode")}
            className={
              errors.propertyCode?.type === "required"
                ? globalStyles.inputError
                : globalStyles.input
            }
            type="number"
            placeholder="Digite o código do imóvel"
          />
          <p className={styles.errors}>{errors.propertyCode?.message}</p>
        </div>
        <div className={styles.content}>
          <label className={styles.textLogin}>Tipo de imóvel:</label>
          <select
            {...register("typeProperty")}
            className={
              errors.typeProperty?.type === "required"
                ? globalStyles.inputError
                : styles.inputSelect
            }
          >
            <option value="">Selecione</option>
            <option value="1">Casa</option>
            <option value="2">Apartamento</option>
          </select>

          <p className={styles.errors}>{errors.typeProperty?.message}</p>
        </div>
        <div className={styles.content}>
          <label className={styles.textLogin}>Tipo de contrato:</label>
          <select
            {...register("typeAgreement")}
            className={
              errors.typeAgreement?.type === "required"
                ? globalStyles.inputError
                : styles.inputSelect
            }
          >
            <option value="">Selecione</option>
            <option value="1">Venda</option>
            <option value="2">Aluguel</option>
          </select>
          <p className={styles.errors}>{errors.typeAgreement?.message}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={globalStyles.button} loading={loading} type="submit">
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  );
}
