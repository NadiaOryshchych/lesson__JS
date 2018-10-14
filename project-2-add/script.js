'use strict';

let week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let i = 0; i < 7; i++) {
      document.write('<div>' + week[i] + '</div>');

      if (i == 6 || i == 7) {
            console.log('hi');
            document.write('<style> div { font-weight: bold } </style>');
      };
      if (i == 0) {
            document.write('<style> div { font-style: italic } </style>');
      };
}
