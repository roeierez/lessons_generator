import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, blue700, blue400, deepOrange500, deepOrange100} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue400,

        pickerHeaderColor: blue500,
    },
    toolbar: {

    }
});

export default muiTheme;
