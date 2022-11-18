import { Order } from '../../types/Order';
import { OrderCard } from '../OrderCard';
import * as S from './styles';
import { OrdersBoardProps } from './types';

export function OrdersBoard ({ icon, boardTitle, countBoardFoodsTitle, orders }: OrdersBoardProps) {
  function handleOpenModal(){
    alert('Modal aberto');
  }
  return (
    <S.BoardContainer>
      <S.BoardHeader>
        <span>
          { icon ?? icon }
        </span>
        <S.CountTableTitle>
          <strong>
            { boardTitle }
          </strong>
        </S.CountTableTitle>
        <S.CountFoodTitle>
          ({ countBoardFoodsTitle })
        </S.CountFoodTitle>
      </S.BoardHeader>
      {orders.length > 0 && (
        <S.BoardOrdersContainer>
          {orders.length > 0 && orders.map((order: Order) =>(
            <OrderCard key={order._id}
              _id={order._id}
              products={order.products}
              status={order.status}
              table={order.table}
              handleOpenModal={handleOpenModal}
            />))}
        </S.BoardOrdersContainer>
      )}
    </S.BoardContainer>
  );
}
