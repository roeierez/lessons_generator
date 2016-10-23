import React, {PropTypes, Component} from 'react';
import LessonPagesList from '../../components/LessonPagesList';
import LessonPageConfig from '../../components/LessonPageConfig';
import styles from './Lesson.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/modules';
import LessonSelector from './LessonSelector';

@connect(
    (state, props) => ({lesson: LessonSelector(state, props), selectedPageID: state.lessons.get("selectedPageID")}),
    dispatch => bindActionCreators({...actionCreators.lessons}, dispatch),
)
class Lesson extends Component {

    static propTypes = {
        lesson: PropTypes.object,
        // pages: ImmutablePropTypes.listOf(PropTypes.object),
        // name: PropTypes.string,
        // id: PropTypes.string,
        selectedPageID: PropTypes.string,
        selectPage: PropTypes.func
    }

    render() {
        let {lesson, selectedPageID, selectPage} = this.props,
            selectedPage = lesson.pages.find(p => p.id === selectedPageID);

        return (
            <div className={styles.root}>
                <LessonPagesList selectedPageID={selectedPageID} selectPage={selectPage} pages={lesson.pages}/>
                {selectedPage &&
                    <LessonPageConfig page={selectedPage}/>
                }
            </div>
        );
    }
}

export default Lesson;
