import { GridFilterModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/config";

export const useTableDataApi = () => {
  const [filter, setFilter] = useState<GridFilterModel>({ items: [] });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(50);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [list, setList] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const query = filter.items.reduce(
      (prev, curr) => prev + `&${curr.field}=${curr.value || ""}`,
      ""
    );
    fetch(API_URL + `?page=${page}&limit=${limit}` + query).then((res) => {
      res
        .json()
        .then((res) => {
          setTotalCount(res?.total);
          setList(res?.data);
        })
        .finally(() => setLoading(false));
    });
  }, [filter, page, limit]);
  return {
    data: { filter, page, limit, totalCount, list, loading },
    actions: { setFilter, setPage, setLimit },
  };
};
