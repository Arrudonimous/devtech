import { Container, Line, Nav, LogoContainer, HeaderContent, HeaderContainer } from "./styles";
import Logo from '../../assets/images/Logo.svg'
import HeaderImage from '../../assets/images/HeaderImage.svg'
import LinkComponent from "../Link";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <Container id="Home" >
      <Nav>
        <LogoContainer>
          <img src={Logo} alt='Logo' />
          <span>Dev Tech</span>
        </LogoContainer>

        <Link to="Home" smooth={true} offset={-128} spy={true} >Home</Link>
        <Link to="Serviços" smooth={true} offset={-128} spy={true} >Serviços</Link>
        <Link to="About" smooth={true} offset={-128} spy={true} >Sobre</Link>
        <Link to="Contatos" smooth={true} offset={-128} spy={true} >Contatos</Link>
      </Nav>
      <Line />
      <HeaderContainer>
        <HeaderContent>
          <h1>Sua empresa merece reconhecimento e visibilidade!</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</span>
          <LinkComponent as={Link} to="Contatos" smooth={true} offset={-128} spy={true} >Solicitar orçamento</LinkComponent>
        </HeaderContent>
        <img src={HeaderImage} alt="headerImage" />
      </HeaderContainer>
    </Container>
  );
}