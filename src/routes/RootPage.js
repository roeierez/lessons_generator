import React, {Component} from 'react';
import styles from './RootPage.less';
import AppBar from 'material-ui/AppBar';
import 'codemirror/theme/material.css';


class RootPage extends Component {
    render() {
        return (
            <div className={styles.root}>
                <AppBar title="Lessons Generator"/>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default RootPage;
