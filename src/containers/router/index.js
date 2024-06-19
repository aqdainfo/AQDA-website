import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home';
import AboutPage from '../../pages/about';
import Explore from '../../pages/explore';
import NewsDetail from '../../pages/newsDetail';
import Contact from '../../pages/contact';
import Error from '../../pages/error';
import Layout from '../layout/layout';
import SearchList from '../../pages/search';
import Popup from '../../components/popup';

const AppRouter = () => {
  return (
    <Layout>
      <Popup />
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/about' element={ <AboutPage/> } />
        <Route path="explore" >
          <Route path=":id" element={ <NewsDetail /> } />
          <Route exact path="" element={ <Explore /> } />
        </Route>
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/search' element={ <SearchList/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </Layout>
  )
}

export default AppRouter;