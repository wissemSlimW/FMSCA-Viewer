import { Grid } from "@mui/material";
import { DataTable } from "./components/DataTable";
import { style } from "./style";
const App = () => {
  return (
    <Grid sx={style.main}>
      <Grid component="h1" sx={style.header}>
        FMSCA Viewer
      </Grid>
      <DataTable />
    </Grid>
  );
};

export default App;
