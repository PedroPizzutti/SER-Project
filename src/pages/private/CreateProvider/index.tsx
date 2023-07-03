import { Box } from "@components/atoms/Box";
import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { useForm } from "react-hook-form";
import { useToast } from "@/hook/useToast";
import { yupResolver } from "@hookform/resolvers/yup";
import { form_validation } from "./schema";
import { convertFileToBase64 } from "@utils/convertFileToBase64";
import { TCreateProviderData, createProvider, findProviderById, updateProvider } from "@services/api/providers";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { IErrorResponse } from "@interfaces/api";
import { useParams } from "react-router-dom";

export const CreateProvider = () => {
  const { addToast } = useToast();
  const { id_provider } = useParams();
  const isNewRecord = id_provider === 'new';

  const form = useForm<TCreateProviderData>({
    resolver: yupResolver(form_validation),
  });

  const {} = useQuery({
    queryKey: ['query_key_provider', id_provider],
    queryFn: () => findProviderById(id_provider ?? '').then(({data}) => {
      data.id === undefined;
      form.reset(data)
      return data;
    }),
    refetchOnMount: false,
    enabled: !isNewRecord,
  })

  const { mutate } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return createProvider(body);
    },
    onSuccess: (success) => {
      form.reset();
      addToast({ title: success.data.success, type: "success", toastOption: {
        autoClose: 5000,
      }});
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      addToast({ title: error.response?.data.error as string, type: "error", toastOption: {
        autoClose: 5000,
      }});
    },
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return updateProvider(body, id_provider ?? '');
    },
    onSuccess: (success) => {
      form.reset();
      addToast({ title: success.data.success, type: "success", toastOption: {
        autoClose: 5000,
      }});
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      addToast({ title: error.response?.data.error as string, type: "error", toastOption: {
        autoClose: 5000,
      }});
    },
  });

  const handleSubmit = async (onValid: TCreateProviderData) => {
    const profilePicBase64 = await convertFileToBase64(
      onValid.profilePic[0] as File
    );
    onValid.profilePic = profilePicBase64;
    isNewRecord ? mutate(onValid) : updateMutation(onValid);
  };

  return (
    <>
      <Box>
        <Grid.Container columns={12}>
          <Grid.Item column={12}>
            <h4>Informacoes pessoais</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              deserunt maiores deleniti fugit beatae laboriosam nemo, quaerat id
              et possimus obcaecati dolorum assumenda libero veritatis tempora
              eum illum, unde est.
            </p>
          </Grid.Item>
          <Grid.Item column={12}>
            <Inputs.File
              label="foto de perfil"
              isRequired
              form={form}
              name="profilePic"
            />
          </Grid.Item>
          <Grid.Item column={12}>
            <Inputs.Text
              type="text"
              label="nome completo"
              placeholder="Ex: Jhon Doe"
              isRequired
              form={form}
              name="name"
            />
          </Grid.Item>
          <Grid.Item column={6}>
            <Inputs.Text
              type="text"
              label="numero de telefone"
              placeholder="43 999999999"
              isRequired
              form={form}
              name="phone"
            />
          </Grid.Item>
          <Grid.Item column={6}>
            <Inputs.Text
              type="text"
              label="e-mail"
              placeholder="jhonDoe@email.com"
              isRequired
              form={form}
              name="email"
            />
          </Grid.Item>
          <Grid.Item column={6}>
            <Inputs.Text
              type="text"
              label="cpf"
              placeholder="000.000.000-00"
              isRequired
              form={form}
              name="cpf"
            />
          </Grid.Item>
          <Grid.Item column={12}>
            <Inputs.TextArea
              label="Bio"
              placeholder="escreva algo interessante sobre voce aqui..."
              isRequired
              rows={5}
              form={form}
              name="bio"
            />
          </Grid.Item>
          <Grid.Item column={2}>
            <Button.Default
              text="Criar prestador"
              onClick={form.handleSubmit(handleSubmit)}
            />
          </Grid.Item>
        </Grid.Container>
      </Box>
    </>
  );
};
