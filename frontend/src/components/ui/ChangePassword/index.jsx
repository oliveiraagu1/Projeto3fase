import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../../contexts/AuthContext";
import styles from "./styles.module.scss";
import globalStyles from "../../../../styles/global.module.scss";
import Button from "../Button";
import * as yup from "yup";

const schema = yup
  .object({
    oldPassword: yup
      .string()
      .min(3,"Digite sua senha atual")
      .required("Campo obrigatório!"),
    newPassword: yup
        .string()
        .min(3, "A senha precisa ter no mínimo 3 caracteres")
        .required("Campo obrigatório!"),
  })
  .required();

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleChangePassword } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handlePassowrd(data) {
    setLoading(true);
    await handleChangePassword(data);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(handlePassowrd)} className={styles.form}>
      <label className={styles.textOldPassword}>Senha Atual:</label>
      <input
        {...register("oldPassword")}
        className={errors.oldPassword?.type === 'required' || errors.oldPassword?.type === 'min'  ? globalStyles.inputError : styles.inputs}
        type="password"
        placeholder="Digite a senha atual"
      />
      <p className={globalStyles.errors}>{errors.oldPassword?.message}</p>

      <label className={styles.textNewPassword}>Nova Senha:</label>
      <input
        {...register("newPassword")}
        className={errors.newPassword?.type === 'required' || errors.newPassword?.type === 'min'  ? globalStyles.inputError : styles.inputs}
        type="password"
        placeholder="Digite a sua nova senha"
      />
      <p className={styles.errors}>{errors.newPassword?.message}</p>

      <Button className={styles.send} loading={loading} type="submit">
        CONFIRMAR
      </Button>
    </form>
  );
}
