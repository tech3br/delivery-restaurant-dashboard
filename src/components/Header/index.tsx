import * as S from './styles';
import Logo from '../../assets/images/ilustra.svg';

export function Header () {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.LogoImage width={140} height={140} src={Logo} alt="Logo WaiterApp" />
          <S.LogoContainerTitles>
            <S.TextLogoTitle>
              <strong>Waiter</strong>App
            </S.TextLogoTitle>
            <S.TextLogoSubtitle>
              O App do Garçom
            </S.TextLogoSubtitle>
          </S.LogoContainerTitles>
        </S.LogoContainer>
        <S.TitlesContainer>
          <S.Title>Pedidos</S.Title>
          <S.Subtitle>Acompanhe os pedidos dos clientes</S.Subtitle>
        </S.TitlesContainer>
      </S.Content>
    </S.Container>
  );
}
