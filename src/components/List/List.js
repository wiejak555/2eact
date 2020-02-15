import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    render() {

        return (
            <section className={styles.component}>

                <Hero titleText={this.props.title} />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    <Column />
                    <Column />
                    <Column />
                </div>
            </section>
        )
    }
}

export default List;