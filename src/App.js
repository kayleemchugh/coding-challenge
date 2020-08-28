import React from 'react';
import Header from './components/utils/Header'
import CandidateLanding from './components/candidate/CandidateLanding'

function App() {

  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <React.Fragment>
      <Header />
      <CandidateLanding />
    </React.Fragment>
  );
}

export default App;
