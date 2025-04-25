import { Currency } from "$/checkout-app/features/offer/models";

export const EmptyPricingOverview = {
  insteadOfAmount: {
    net: 0,
    gross: 0,
    currency: Currency.Eur,
  },
  shouldShowInsteadOfAmount: false,
  totalAmountFirstPayment: {
    net: 0,
    gross: 0,
    currency: Currency.Eur,
  },
  totalAmountFirstPaymentWithoutShipping: {
    net: 0,
    gross: 0,
    currency: Currency.Eur,
  },
  totalPurchaseAmount: {
    net: 0,
    gross: 0,
    currency: Currency.Eur,
  },
  rentInfo: {
    rentOnlyAmount: {
      gross: 0,
      net: 0,
      currency: Currency.Eur,
    },
    totalRent: {
      net: 0,
      gross: 0,
      currency: Currency.Eur,
    },
    tenureLines: [],
  },
};
