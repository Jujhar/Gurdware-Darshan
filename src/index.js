import domready from 'domready';
import React from 'react';
import Main from './components/main.jsx';
import './stylesheets/main.css';

domready(() => {
  React.render(
<Main />,
    document.body
);
});
