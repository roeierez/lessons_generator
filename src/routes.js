import RootPage from './routes/RootPage';
import Lessons from './routes/Lessons';
import Lesson from './routes/Lesson';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={RootPage}>
            <IndexRoute component={Lessons}/>
            <Route path="/lessons" component={Lessons} />
            <Route path="/lesson/:lessonID" component={Lesson} />
        </Route>
    </Router>
);
