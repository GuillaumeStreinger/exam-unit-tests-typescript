import { submitOrder } from './index';
import * as emailLib from './lib/email';

jest.mock('./lib/email', () => ({
  sendOrderEmail: jest.fn()
}));

describe("submitOrder", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Passe isSubmitted à True et appelle senOrderEmail si la commande n\'est pas encore livré', () => {
    const order = { id: '1', isSubmitted: false };
    const result = submitOrder(order);
    expect(result.isSubmitted).toBe(true);
    expect(emailLib.sendOrderEmail).toHaveBeenCalledWith('1');
  });

});
