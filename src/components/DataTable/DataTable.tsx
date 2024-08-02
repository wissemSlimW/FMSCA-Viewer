import { DataGrid, GridFilterModel } from "@mui/x-data-grid";
import { useCallback } from "react";
import { columns } from "./columns.cnst";
import { useTableDataApi } from "./hook";
import { style } from "./style";

export const DataTable = () => {
  const { data, actions } = useTableDataApi();
  const onFilterChange = useCallback((filterModel: GridFilterModel) => {
    actions.setFilter({ ...filterModel });
  }, []);
  return (
    <div style={{ height: "70dvh" }}>
      <DataGrid
        disableColumnSorting
        rowCount={data.totalCount}
        columns={columns}
        rows={data.list}
        sx={style}
        loading={data.loading}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        paginationMode="server"
        paginationMeta={{ hasNextPage: data.list.length < data.totalCount }}
        paginationModel={{ page: data.page, pageSize: data.limit }}
        onPaginationModelChange={(props) => {
          actions.setPage(props.page);
          actions.setLimit(props.pageSize);
        }}
      />
    </div>
  );
};
