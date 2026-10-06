import { GivingPayload, GivingCategoryType } from '../types';

export interface CheckoutResponse {
  reference: string;
  checkoutUrl?: string;
  status: 'pending' | 'success' | 'failed';
  amount: number;
  category: GivingCategoryType;
  date: string;
}

/**
 * Giving Service Layer
 * Designed to interface with the future Express.js API (POST /api/giving/checkout)
 * and Bachs payment gateway.
 */
export const givingService = {
  /**
   * Prepares and initiates a giving checkout transaction.
   * Currently simulates the response payload that the future Bachs integration will provide.
   */
  async createCheckoutSession(payload: GivingPayload): Promise<CheckoutResponse> {
    const randomHex = Math.random().toString(36).substring(2, 9).toUpperCase();
    const reference = `HCCF-BACH-${new Date().getFullYear()}-${randomHex}`;

    // If future backend endpoint is configured, we can fetch:
    // const res = await fetch('/api/giving/checkout', { method: 'POST', body: JSON.stringify(payload) });
    // return res.json();

    return {
      reference,
      status: 'success',
      amount: payload.amount,
      category: payload.category,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };
  },

  /**
   * Queries payment status for a specific reference (for future webhook verification).
   */
  async getPaymentStatus(reference: string): Promise<CheckoutResponse> {
    // Simulated status check
    return {
      reference,
      status: reference.toLowerCase().includes('fail') ? 'failed' : 'success',
      amount: 5000,
      category: 'Offering',
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };
  },
};
