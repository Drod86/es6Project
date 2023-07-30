import * as classes from './header.module.css';

const header = (type, text) => `<h${type} class="${classes.header}">${text}</${type}>`;
export default header;