import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/base.css';
import configureStore from './redux/store';
import {Map, List} from 'immutable';
import {Provider} from 'react-redux';
import routes from './routes';

injectTapEventPlugin();
const store = configureStore(
    {
        lessons: Map({
            networkError: null,
            isNetworkLoading: false,
            selectedPageID: null,
            lessonsList: List([{
                id: '1',
                name: "C++ Security",
                pages: List([{id: '100', name: "Introduction to Stack"}, {id: '101', name: "Push Pop"}, {
                    id: '102',
                    name: "Calling Functions"
                }])
            }, {
                id: '2',
                name: "Javascript",
                pages: List([{id: '200', name: "Everything is a function"}, {id: '201', name: "The prototype"}, {
                    id: '202',
                    name: "Type Safety?"
                }])
            }, {
                id: '3',
                name: "C#",
                pages: List([{id: '300', name: "Object Oriented Basics"}, {id: '301', name: "The bytecode"}, {
                    id: '302',
                    name: "The Virtual Machine"
                }])
            }]),
            currentPage: null
        })
    }
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={theme}>
            {routes}
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
