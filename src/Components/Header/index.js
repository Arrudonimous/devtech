import { Link } from 'react-scroll';
import {
  Container, Line, Nav, LogoContainer, HeaderContent, HeaderContainer,
} from './styles';
import Logo from '../../assets/images/Logo.svg';
import HeaderImage from '../../assets/images/HeaderImage.svg';
import LinkComponent from '../Link';

export default function Header() {
  return (
    <Container id="Home">
      <Nav>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
          <span>Dev Tech</span>
        </LogoContainer>

        <Link to="Home" smooth offset={-128} spy>Home</Link>
        <Link to="Serviços" smooth offset={-128} spy>Serviços</Link>
        <Link to="About" smooth offset={-128} spy>Sobre</Link>
        <Link to="Contatos" smooth offset={-128} spy>Contatos</Link>
      </Nav>
      <Line />
      <HeaderContainer>
        <HeaderContent>
          <h1>Sua empresa merece reconhecimento e visibilidade!</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum, ac aliquet odio mattis.
          </span>
          <LinkComponent as={Link} to="Contatos" smooth offset={-128} spy>Solicitar orçamento</LinkComponent>
        </HeaderContent>
        <img src={HeaderImage} alt="headerImage" />
      </HeaderContainer>
    </Container>
  );
}
