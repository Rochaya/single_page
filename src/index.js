import './style/index.scss';
import routes from './routes';
import './components/pageDetail';
import './components/pageList';
import './components/search';
import searchForm from './components/search';


// console.log(process.env.API_KEY);
const callRoute = () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
  
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
  
    if (pageFunction !== undefined) {
      pageFunction(pageArgument);
    }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());

searchForm();

