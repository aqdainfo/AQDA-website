import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './header';
import Footer from './footer';
import * as InterviewActions from '../../store/actions/interviews'

const Layout = (props) => {
  const interview = useSelector(state => state);
  const loaded = useSelector(state => state.general.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      await dispatch(InterviewActions.getInterviews());
    }

    if ( !loaded ) {
      init();
    }
    // eslint-disable-next-line
  }, [loaded])
  
  useEffect(() => {
    // console.log(interview);
  }, [interview])

  return (
    <div className="layout">
      <Header />
      { props.children }
      <Footer />
    </div>
  )
}

export default Layout;