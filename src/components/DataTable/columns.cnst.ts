import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef<any[number]>[] = [
  {
    field: "created_dt",
    headerName: "Created_DT",
    filterable: true,
    width: 150,
    valueFormatter: (value: string) => value.slice(0, 10),
  },
  {
    field: "data_source_modified_dt",
    headerName: "Modifed_DT",
    width: 150,
    filterable: true,
    valueFormatter: (value: string) => value.slice(0, 10),
  },
  {
    field: "entity_type",
    headerName: "Entity",
    filterable: true,
    width: 150,
  },
  {
    field: "operating_status",
    headerName: "Operating status",
    filterable: true,
    width: 200,
  },
  {
    field: "legal_name",
    headerName: "Legal name",
    filterable: true,
    width: 170,
  },
  {
    field: "dba_name",
    headerName: "DBA name",
    filterable: true,
    width: 150,
  },
  {
    field: "physical_address",
    headerName: "Physical address",
    filterable: true,
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    filterable: true,
    width: 200,
  },
  {
    field: "usdot_number",
    headerName: "DOT",
    filterable: true,
    width: 120,
  },
  {
    field: "mc_mx_ff_number",
    headerName: "MC/MX/FF",
    filterable: true,
    width: 200,
  },
  {
    field: "power_units",
    headerName: "Power units",
    filterable: true,
    width: 160,
  },
  {
    field: "out_of_service_date",
    headerName: "Out of service date",
    filterable: true,
    width: 250,
  },
];
