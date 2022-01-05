import { createTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const styles= createTheme({
    palette: {
        primary: {
          main: blue[500],
        }
    }
})

export default styles;