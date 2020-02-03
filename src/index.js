import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import { library }        from "@fortawesome/fontawesome-svg-core";
import { fab }            from '@fortawesome/free-brands-svg-icons'

import './index.css';
import "./themes/cyborg_theme.css"

library.add(fab);

ReactDOM.render(<App/>, document.getElementById('root'));
