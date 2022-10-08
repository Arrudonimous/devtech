import GlobalStyles from '../../assets/themes/global';
import {
  Footer
} from './styles';
import Header from '../Header';
import Data from '../../sections/Data';
import Marketing from '../../sections/Marketing';
import About from '../../sections/About';
import Budget from '../../sections/Budget';

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Data />
      <Marketing />
      <About />
      <Budget />
      <Footer>
        <span>Todos direitos reservados @2022 - Diego Arruda</span>
      </Footer>
    </>
  );
}

