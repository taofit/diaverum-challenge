import React from 'react';
import FileProcess from './components/fileProcess';
import logoUrl from './assets/diaverum-logo-primary.svg';
import { Header, GlobalWrapper, GlobalStyle } from './app.styles';
import LocalHospital from '@material-ui/icons/LocalHospital';

function App() {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      <Header>
          <img src={logoUrl} alt="Tesla" />
          <h1>Patients test results</h1>
          <LocalHospital />
      </Header>
      <FileProcess />
    </GlobalWrapper>
  );
}

export default App;
