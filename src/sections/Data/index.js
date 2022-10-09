import {
  DataBackground,
  DataContainer,
  DataInfo,
} from './styles';

export default function Data() {
  return (
    <DataBackground>
      <DataContainer>
        <DataInfo>
          <h1>2 Mil</h1>
          <span>Usuários online</span>
        </DataInfo>
        <DataInfo>
          <h1>15 Mil</h1>
          <span>Já usaram nosso sistema</span>
        </DataInfo>
        <DataInfo>
          <h1>700+</h1>
          <span>Desafios online</span>
        </DataInfo>
      </DataContainer>
    </DataBackground>
  );
}
