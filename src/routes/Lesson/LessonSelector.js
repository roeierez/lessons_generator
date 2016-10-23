import { createSelector } from 'reselect';

const LessonSelector = createSelector(
    (state, props) => {
        let lessonID = props.params.lessonID,
            lesson = state.lessons.get('lessonsList').find(l => l.id === lessonID);

        return lesson;
    },
    lesson => lesson
);

export default LessonSelector;