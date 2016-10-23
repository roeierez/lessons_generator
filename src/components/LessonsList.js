import React, {PropTypes, Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ImmutablePropTypes from 'react-immutable-proptypes';
import FontIcon from 'material-ui/FontIcon';
import styles from './LessonsList.less'
import {browserHistory} from 'react-router'

class LessonsList extends Component {

    static propTypes = {
        lessonsList: ImmutablePropTypes.listOf(PropTypes.object) //name, number of pages, last modified
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    onRowHover(rowNumber) {
        this.setState({hoveredRowNumber: rowNumber});
    }

    onRowHoverExit(rowNumber) {
       // if (this.state.hoveredRowNumber == rowNumber) {
            this.setState({hoveredRowNumber: null});
        //}
    }

    editLessonClicked(lessonID) {
        browserHistory.push(`/lesson/${lessonID}`);
    }

    render() {
        let { lessonsList } = this.props;

        return (
            <Table onRowHover={this.onRowHover.bind(this)} onRowHoverExit={this.onRowHoverExit.bind(this)} hoverable>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Pages</TableHeaderColumn>
                        <TableHeaderColumn className={styles.iconColumn}></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody showRowHover>
                    {
                        lessonsList.map((l, rowNumber) => {
                            return (
                                <TableRow key={l.id}>
                                    <TableRowColumn>{l.id}</TableRowColumn>
                                    <TableRowColumn>{l.name}</TableRowColumn>
                                    <TableRowColumn>{l.pages.length}</TableRowColumn>
                                    <TableRowColumn className={styles.iconColumn}><FontIcon onTouchTap={() => this.editLessonClicked(l.id)} style={{display: rowNumber === this.state.hoveredRowNumber ? "initial" : "none"}} className="material-icons">create</FontIcon></TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        );
    }
}

export default LessonsList;