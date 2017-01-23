import domready from 'domready';
import React from 'react';
import Main from './components/main.jsx';
import './stylesheets/main.css';
import './stylesheets/ribbons.css';

domready(() => {
  React.render(
<Main />,
    document.body
);
});
