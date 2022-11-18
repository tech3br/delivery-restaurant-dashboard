import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import { Dish } from '@styled-icons/boxicons-solid/Dish';
import { Clock } from '@styled-icons/heroicons-solid/Clock';
import styled from 'styled-components';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

const orders: Order[] = [
  {
    '_id': 'a67ab7ad36da7ff79cd1ad7a7b7c7fa7a',
    'table': '5',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'price': 40,
          'imagePath': 'quatro-queijos.png'
        },
        'quantity': 3,
        '_id': '1237ad36aa64ff79cd1ade32b2c3fa1a'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'price': 40,
          'imagePath': 'quatro-queijos.png'
        },
        'quantity': 3,
        '_id': '1237ad36aa64ff79cd1ade32b2c3fa1a'
      }
    ]
  }
];

export function Orders() {
  const CustomClockIcon = styled(Clock)`
    color: ${({ theme }) => theme.colors.yellow};
  `;

  const CustomDishIcon = styled(Dish)`
    color: ${({ theme }) => theme.colors.blue};
  `;

  const CustomCheckCircleFillIcon = styled(CheckCircleFill)`
    color: ${({ theme }) => theme.colors.green};
  `;

  return (
    <S.Container>
      <OrdersBoard
        icon={<CustomClockIcon width={22} height={22} />}
        boardTitle='Fila de espera'
        countBoardFoodsTitle={1}
        orders={orders}
      />
      <OrdersBoard
        icon={<CustomDishIcon width={22} height={22} />}
        boardTitle='Em preparação'
        countBoardFoodsTitle={2}
        orders={[]}
      />
      <OrdersBoard
        icon={<CustomCheckCircleFillIcon width={22} height={22} />}
        boardTitle='Pronto para retirada'
        countBoardFoodsTitle={3}
        orders={[]}
      />
    </S.Container>
  );
}
