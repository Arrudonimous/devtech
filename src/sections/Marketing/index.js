import { FiTrendingUp, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-scroll';
import {
  Container,
  MarkContainer,
  MarkContent,
  MarkCard,
  IconContainer,
  CardContainer,
} from './styles';
import LinkComponent from '../../Components/Link';

export default function Marketing() {
  return (
    <Container>
      <MarkContainer id="Serviços">
        <MarkContent>
          <h1>Levamos a sua empresa a outro nível.</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum.

          </span>
          <LinkComponent as={Link} to="Contatos" smooth offset={-128} spy>Fazer orçamento</LinkComponent>
        </MarkContent>
        <CardContainer>
          <MarkCard className="card1">
            <IconContainer className="iconC1">
              <FiTrendingUp className="icon1" />
            </IconContainer>
            <span>Fazemos toda gestao de marketing.</span>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.

            </small>
          </MarkCard>
          <MarkCard className="card2">
            <IconContainer className="iconC2">
              <FiBriefcase className="icon2" />
            </IconContainer>
            <span>Gerenciamos todo trafego pago.</span>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.

            </small>
          </MarkCard>
        </CardContainer>
      </MarkContainer>
    </Container>
  );
}
