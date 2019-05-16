import 'bootstrap';
import '../styles/main.scss';
import doEverything from './components/doEverything';

const init = () => {
  console.error('yo yo');
  doEverything.initCategories();
};

init();
