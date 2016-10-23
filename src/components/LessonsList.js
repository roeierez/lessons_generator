import React, {PropTypes, Component} from 'react';

class LessonsList extends Component {

    static propTypes = {
        lessons: PropTypes.arrayOf(PropTypes.object) //name, number of pages, last modified
    }

    render() {
        return (
            <div />
        );
    }
}

export default LessonsList;