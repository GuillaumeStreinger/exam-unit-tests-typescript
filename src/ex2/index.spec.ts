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

  it('Retourne une erreur si la commande a déjà été livré', () => {
    const order = { id: '1', isSubmitted: true };
    expect(() => submitOrder(order)).toThrow('Order has already been submitted');
  });

  it('Gère correctement les ids de commande volumineux', () => {
    const order = { id: '12345678901234567890', isSubmitted: false };
    const result = submitOrder(order);
    expect(result.isSubmitted).toBe(true);
    expect(emailLib.sendOrderEmail).toHaveBeenCalledWith('12345678901234567890');
  });
  
  it('Gère correctemet les ids de commande vide', () => {
    const order = { id: '', isSubmitted: false };
    const result = submitOrder(order);
    expect(result.isSubmitted).toBe(true);
    expect(emailLib.sendOrderEmail).toHaveBeenCalledWith('');
  });

});
