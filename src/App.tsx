import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import ImageGallery from './containers/ImageGallery/ImageGallery'
import Products from './containers/Products/Products'
import PersonalPage from './containers/PersonalPage/PersonalPage'

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
      <Header options={menuOptions} />
      <Switch>
        <Route exact path="/personal-page" component={PersonalPage} />
        <Route path="/products" component={Products} />
        <Route path="/image-gallery" component={ImageGallery} />
      </Switch>
    </div>
  );
}

export default App;
