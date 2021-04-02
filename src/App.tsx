import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import ImageGallery from './containers/ImageGallery/ImageGallery'
import Products from './containers/Products/Products'
import PersonalPage from './containers/PersonalPage/PersonalPage'
import { APP_NAME } from './utils/constants'

function App() {

  const menuOptions = [
    {
      text: 'Personal Page',
      path: 'personal-page'
    },
    {
      text: 'Products',
      path: 'products'
    },
    {
      text: 'Image Gallery',
      path: 'image-gallery'
    }
  ]

  return (
    <div className="App">
      <Header options={menuOptions} appName={APP_NAME} />
      <Switch>
        <Route exact path="/personal-page" component={PersonalPage} />
        <Route path="/products" component={Products} />
        <Route path="/image-gallery" component={ImageGallery} />
        <Redirect to="/personal-page" />
      </Switch>
    </div>
  );
}

export default App;
