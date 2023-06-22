import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { Box } from "@components/atoms/Box";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getProviders } from "@services/api/providers";
import { Table } from "@/components/molecules/Table";
import { headers } from "./settings";
import { useQueryString } from "@/hook/useQueryString";

interface IFormProps {
  name: string
}

export const Providers = () => {
  const navigate = useNavigate();
  const form = useForm<IFormProps>();

  const [params, setParams] = useQueryString<IFormProps>({
    name: 'batata'
  });

  const { data } = useQuery({
    queryKey: ["get_all_providers", params.name],
    queryFn: () =>
      getProviders(params).then((res) => res.data),
  });

  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Button.Default
            text="Novo prestador"
            size="md"
            endIcon="person_add_alt"
            onClick={() => navigate("/providers/new")}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search
            type="text"
            form={form}
            name="filter"
            placeholder="Pesquise por um usuario"
          />
          <Button.Default text="Submit" type="button" onClick={form.handleSubmit((onValid) => setParams(onValid))}/>
        </Grid.Item>
        <Grid.Item column={12}>
          <Box>
            <Table
              columns={headers}
              rows={data ?? []}
              rowsProps={{
                keyExtractor: (item) => item.id,
                rowAction: (item) => navigate(`/providers/${item.id}`),
              }}
            />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </>
  );
};
