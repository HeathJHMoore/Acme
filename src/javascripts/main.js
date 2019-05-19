import 'bootstrap';
import '../styles/main.scss';
import doEverything from './components/doEverything';
import events from './helpers/eventListeners';

const init = () => {
  console.error('yo yo');
  doEverything.initCategories();
  events.eventListeners();
};

init();
