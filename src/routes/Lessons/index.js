import React, {PropTypes, Component} from 'react';
import LessonsList from '../../components/LessonsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/modules';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

@connect(
    state => ({lessonsList: state.lessons.get('lessonsList')}),
    dispatch => bindActionCreators({...actionCreators.lessons}, dispatch),
)
class LessonsPage extends Component {

    static propTypes = {
        lessonsList: ImmutablePropTypes.listOf(PropTypes.object)
    }

    render() {
        let {lessonsList} = this.props;

        return (
            <div>
                <Toolbar>
                    <ToolbarTitle text="Lessons"></ToolbarTitle>
                </Toolbar>
                <div className="margin24dpLeft margin24dpRight">
                    <LessonsList lessonsList={lessonsList}/>
                </div>
            </div>
        );
    }
}

export default LessonsPage;
