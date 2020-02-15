import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image} src="./src/components/Hero/space.png"></img>
    </header>
);
Hero.propTypes = {
    titleText: PropTypes.node,
};
export default Hero;