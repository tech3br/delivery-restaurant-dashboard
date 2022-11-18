import { Pushpin } from '@styled-icons/icomoon/Pushpin';
import { OrderCardProps } from '../../types/Order';
import * as S from './styles';

export function OrderCard ({ table, products, handleOpenModal }: OrderCardProps) {
  return (
    <S.OrderCardContainer type='button' onClick={handleOpenModal}>
      <S.IconPinContainer>
        <Pushpin width={24} height={24} />
      </S.IconPinContainer>
      <S.OrderContainerTitles>
        <S.TextLogoTitle>
          <strong>
            Mesa {table}
          </strong>
        </S.TextLogoTitle>
        <S.TextLogoSubtitle>
          {products.length} ite{products.length > 1 ? 'ns' : 'm'}
        </S.TextLogoSubtitle>
      </S.OrderContainerTitles>
    </S.OrderCardContainer>
  );
}
