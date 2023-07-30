'use strict';
import heading from "./components/heading.js";
const BODY = document.querySelector('body');
BODY.innerHTML = heading(1,'I Hope this works');
BODY.appendChild(heading);