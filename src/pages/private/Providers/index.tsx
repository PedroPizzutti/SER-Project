import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { Box } from "@components/atoms/Box";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { IGetProviderRequest, getProviders } from "@services/api/providers";
import { Table } from "@/components/molecules/Table";
import { headers } from "./settings";
import { useQueryString } from "@/hook/useQueryString";
import { IPaginationRequest } from "@/interfaces/api";
import { usePagination } from "@/hook/usePagination";

export const Providers = () => {
  const navigate = useNavigate();
  const form = useForm<IPaginationRequest<IGetProviderRequest>>();

  const [params, setParams] = useQueryString<IPaginationRequest<IGetProviderRequest>>();

  const { data } = useQuery({
    queryKey: ["get_all_providers", JSON.stringify(params)],
    queryFn: () =>
      getProviders(params).then((res) => res.data),
  });

  const { nextPage, prevPage } = usePagination(data?.total ?? 0);

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
            handleClick={(text) => setParams({ filterName: text})}
          />
          <Button.Default text="voltar" onClick={prevPage}/>
          <Button.Default text="proximo" onClick={nextPage}/>
        </Grid.Item>
        <Grid.Item column={12}>
          <Box>
            <Table
              columns={headers}
              rows={data?.docs ?? []}
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
