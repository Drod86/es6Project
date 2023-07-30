import * as classes from './heading.module.css';

const heading = (type, text) => `<h${type} class="${classes.heading}">${text}</h${type}>`;
export default heading;