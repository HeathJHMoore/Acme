import $ from 'jquery';
import getData from '../components/doEverything';

const eventListeners = () => {
  $('#categoryMenu').on('click', getData.gatherProducts);
};

export default { eventListeners };
