import 'intl';

export const {format: FORMAT_PRICE} = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
