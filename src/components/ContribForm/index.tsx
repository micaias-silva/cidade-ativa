import * as yup from "yup";
import { GenericButton } from "../../styles/Buttons";
import { Form, Input, TextArea } from "../../styles/Form";
import { FormError, Label, Span } from "../../styles/Text";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { formatPhone } from "../../tools/format.tools";
import { useState } from "react";
import { emailJsConfig } from "../../config/contactData";
import { toast } from "react-toastify";

const ContribForm = () => {
  const contribSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("insira um email válido"),
    subject: yup.string().required("Campo obrigatório"),
    institution: yup.string(),
    phone: yup
      .string()
      .matches(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        "Deve estar no formato (xx) xxxxx-xxxx"
      ),
    message: yup.string().required("Campo obrigatório"),
  });

  const [isSendingEmail, setIsSending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contribSchema),
  });

  const onSubmitFunction = (data: any) => {
    setIsSending(true);
    emailjs
      .send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_representative: ", " + data.institution || "",
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          phone: data.phone,
          subject: data.subject,
        },
        emailJsConfig.publicKey
      )
      .then((res) => {
        setIsSending(false);
        toast.success("Email foi enviado com sucesso!");
        reset();
      })
      .catch((res) => {
        setIsSending(false);
        toast.error("Falha ao enviar email. Tente novamente mais tarde");
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <Label htmlFor="name">Nome *</Label>
      <Input
        {...register("name")}
        placeholder="Nome completo..."
        disabled={isSendingEmail}
      />
      <FormError>{errors.name?.message as string}</FormError>

      <Label htmlFor="email">E-mail *</Label>
      <Input
        {...register("email")}
        type="email"
        placeholder="exemplo@email.com"
        disabled={isSendingEmail}
      />
      <FormError>{errors.email?.message as string}</FormError>

      <Label htmlFor="subject">Assunto *</Label>
      <Input
        {...register("subject")}
        placeholder="Com o que contribuir"
        disabled={isSendingEmail}
      />
      <FormError>{errors.subject?.message as string}</FormError>

      <Label htmlFor="institution">Nome da Instituição</Label>
      <Input
        {...register("institution")}
        placeholder="Instituição"
        disabled={isSendingEmail}
      />
      <FormError>{errors.institution?.message as string}</FormError>

      <Label htmlFor="phone">Nº de Telefone *</Label>
      <Input
        {...register("phone")}
        type="tel"
        placeholder="(00) 00000-0000"
        onChange={(e) => {
          let value = e.target.value;
          e.target.value = formatPhone(value);
        }}
        disabled={isSendingEmail}
      />
      <FormError>{errors.phone?.message as string}</FormError>

      <Label htmlFor="Message">Mensagem</Label>
      <TextArea
        {...register("message")}
        placeholder="Gostaria de ajudar..."
        disabled={isSendingEmail}
      />
      <FormError>{errors.message?.message as string}</FormError>

      <GenericButton
        css={{ marginTop: "$3" }}
        type="submit"
        size="full"
        disabled={isSendingEmail}
      >
        Enviar uma mensagem
      </GenericButton>
    </Form>
  );
};

export default ContribForm;
