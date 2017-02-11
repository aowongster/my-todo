import {Template} from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'This is a todo 1'},
    { text: 'This is a todo 2'},
    { text: 'This is a todo 3'},
  ]
});
