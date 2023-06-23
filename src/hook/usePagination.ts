import { useCallback, useEffect, useMemo } from "react";
import { useQueryString } from "./useQueryString";
import { IPaginationRequest } from "@interfaces/api";

interface IUsePaginationResponse<T = any> {
  limit: number; // limit of registers
  page: number; // current page
  pages: number; // amount of pages by total registers
  nextPage: () => void;
  prevPage: () => void;
  setSkip: (skip: number) => void;
  setLimit: (limit: number) => void;
  currentPageList: <T>(list: T[], page: number, limit: number) => T[];
}

export const usePagination = <T = any>(
  total: number
): IUsePaginationResponse<T> => {
  const [query, setQueryString] = useQueryString<IPaginationRequest>();

  const limit = Number(query.limit ?? 15);
  const page = Number(query.page! >= 1 ? query.page : 1);

  useEffect(() => {
    setQueryString({
      ...query,
      limit,
      page,
    });
  }, []);

  const nextPage = useCallback(() => {
    setQueryString({
      ...query,
      limit,
      page: Math.max(page + 1, Math.ceil(total / limit)),
    });
  }, [query]);

  const prevPage = useCallback(() => {
    setQueryString({ ...query, page: Math.max(page - 1, 1), limit });
  }, [query]);

  const setLimit = useCallback(
    (limit: number) => {
      setQueryString({ ...query, limit });
    },
    [query]
  );

  const setSkip = useCallback(
    (skip: number) => {
      setQueryString({ ...query, page: skip || 1 });
    },
    [query]
  );

  const currentPageList = useCallback(
    <T>(list: T[], page: number, limit: number) => {
      const begin = Number(page - 1) * Number(limit);
      const end = begin + Number(limit);
      return list?.slice(begin, end) ?? list;
    },
    [query]
  );

  return {
    limit: limit - 1,
    page,
    pages: Math.ceil(total / limit),
    currentPageList,
    nextPage,
    prevPage,
    setLimit,
    setSkip,
  };
};
