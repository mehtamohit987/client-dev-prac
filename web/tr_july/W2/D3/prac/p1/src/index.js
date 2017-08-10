import _ from 'lodash';
// import '../less/main.less';
import '../css/styles.css';

function component() {
    var element = document.createElement('div');
    var greet, from;
    [greet='Hello', from='Dude'] = [undefined, 'webSSSsscck'];
    // Lodash, now imported by this script
    element.innerHTML = _.join([greet, from], ' ');
    // element.classList.add('alpha');

    return element;
  }

  document.body.appendChild(component());