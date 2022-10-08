import {
  Container,
  MarkContainer,
  MarkContent,
  MarkCard,
  IconContainer,
} from './styles';
import LinkComponent from '../../Components/Link';
import { FiTrendingUp, FiBriefcase } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Marketing() {
  return (
    <Container>
      <MarkContainer id="Serviços">
        <MarkContent>
          <h1>Levamos a sua empresa a outro nível.</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</span>
          <LinkComponent as={Link} to="Contatos" smooth={true} offset={-128} spy={true} >Fazer orçamento</LinkComponent>
        </MarkContent>
        <MarkCard className='card1' >
          <IconContainer className='iconC1' >
            <FiTrendingUp className='icon1' />
          </IconContainer>
          <span>Fazemos toda gestao de marketing.</span>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</small>
        </MarkCard>
        <MarkCard className='card2' >
          <IconContainer className='iconC2' >
            <FiBriefcase className='icon2' />
          </IconContainer>
          <span>Gerenciamos todo trafego pago.</span>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</small>
        </MarkCard>
      </MarkContainer>
    </Container>
  )
}