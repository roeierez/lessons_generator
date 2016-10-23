import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div style={{position: "relative"}}>



                    <AppBar title="Title"/>
                    <FlatButton secondary={true} label="Login"/>
                    <RaiseButton primary={true} label="logout" />
                    <RaiseButton disabled={true} label="logout" />

                    <Card>
                        <CardHeader style={{zIndex: 2000}}
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="images/jsa-128.jpg"
                        />
                        <CardTitle title="Card title" subtitle="Card subtitle" style={{zIndex: 2000}} />
                        <CardText style={{zIndex: 2000, backgroundColor: "white"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>

                    <Paper style={{zIndex: 2000}} zDepth={1}>
                        <BottomNavigation selectedIndex={0}>
                            <BottomNavigationItem
                                label="Recents"
                                icon={recentsIcon}
                                onTouchTap={() => {}}
                            />
                            <BottomNavigationItem
                                label="Favorites"
                                icon={favoritesIcon}
                                onTouchTap={() => {}}
                            />
                            <BottomNavigationItem
                                label="Nearby"
                                icon={nearbyIcon}
                                onTouchTap={() => {}}
                            />
                        </BottomNavigation>
                    </Paper>

                    <TextField
                        hintText="Hint Text"
                    />
                    <TextField
                        errorText="This field is required"
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                    />

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
