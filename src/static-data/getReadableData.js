import { currencyFormatter } from './currencyFormatter';

export const getReadableQuantity = (quantity) => quantity.toLocaleString();

export const getReadablePrice = (price) => currencyFormatter.format(price);
