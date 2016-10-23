import React, {PropTypes, Component} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
let SelectableList = makeSelectable(List);
import ImmutablePropTypes from 'react-immutable-proptypes';

class LessonPagesList extends Component {

    static propTypes = {
        pages: ImmutablePropTypes.listOf(PropTypes.object), //array of pages, name
        selectedPageID: PropTypes.string,
        selectPage: PropTypes.func,
    }

    onChange = (event, value) => {
        this.props.selectPage(this.props.pages.find(p => p.id == value).id);
    };

    render() {
        let {pages, selectedPageID} = this.props;

        return (
            <SelectableList onChange={this.onChange.bind(this)} value={selectedPageID}>
                {pages.map((page, pageNumber) => {
                    return (
                        <ListItem key={page.id} value={page.id} primaryText={`${pageNumber}. ${page.name}`}/>
                    )
                })}
            </SelectableList>
        );
    }
}


export default LessonPagesList;
