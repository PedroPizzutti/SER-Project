import * as qs from "qs";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type IUseQueryStringResponse<T> = [query: T, setQuery: (params: T) => void];

export const useQueryString = <T>(
  defaultValue?: T
): IUseQueryStringResponse<T> => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const query = useMemo(
    () =>
      qs.parse(search, {
        ignoreQueryPrefix: true,
      }) as T,
    [search]
  );

  const setQuery = useCallback(
    (data: T) => {
      const currentyQuery = Object.assign({}, query, data);
      navigate(
        { pathname, search: qs.stringify(currentyQuery) },
        {
          replace: true,
        }
      );
    },
    [search]
  );

  useEffect(() => {
    if (defaultValue) {
      setQuery(defaultValue);
    }
  }, []);

  return [query, setQuery];
};
