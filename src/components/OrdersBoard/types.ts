import React from 'react';
import { Order } from '../../types/Order';

export interface OrdersBoardProps {
  icon?: React.ReactNode;
  boardTitle: string;
  countBoardFoodsTitle: string | number;
  orders: Order[];
}
