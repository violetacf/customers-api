export enum ApiResourceStatus {
  Stopped,
  Pending,
  Found,
  NotFound,
  ServerError,
  ClientError,
}

export type CountryInfo = {
  alpha2Code: string;
  i18nKey: string;
  dialingCode: string;
  placeholderVat: string;
  placeholderPostcode: string;
  placeholderCompanyName: string;
  placeholderPhoneNumber: string;
};

const countries: { [key: string]: CountryInfo } = {
  DE: {
    i18nKey: "countries.DE",
    alpha2Code: "DE",
    dialingCode: "+49",
    placeholderVat: "DE000000000",
    placeholderPostcode: "00000",
    placeholderCompanyName: "Musterfirma GmbH",
    placeholderPhoneNumber: "123 456 789",
  },
  AT: {
    i18nKey: "countries.AT",
    alpha2Code: "AT",
    dialingCode: "+43",
    placeholderVat: "ATU0000000",
    placeholderPostcode: "0000",
    placeholderCompanyName: "Musterfirma GmbH",
    placeholderPhoneNumber: "123 456 789",
  },
  BE: {
    i18nKey: "countries.BE",
    alpha2Code: "BE",
    dialingCode: "+32",
    placeholderVat: "BE0000000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Voorbeeld NV",
    placeholderPhoneNumber: "123 456 789",
  },
  BG: {
    i18nKey: "countries.BG",
    alpha2Code: "BG",
    dialingCode: "+359",
    placeholderVat: "BG0000000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Пример ООД",
    placeholderPhoneNumber: "123 456 789",
  },
  HR: {
    i18nKey: "countries.HR",
    alpha2Code: "HR",
    dialingCode: "+385",
    placeholderVat: "HR00000000000",
    placeholderPostcode: "10000",
    placeholderCompanyName: "Primjer d.o.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  CY: {
    i18nKey: "countries.CY",
    alpha2Code: "CY",
    dialingCode: "+357",
    placeholderVat: "CY00000000L",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Παράδειγμα Ltd.",
    placeholderPhoneNumber: "123 456 789",
  },
  CZ: {
    i18nKey: "countries.CZ",
    alpha2Code: "CZ",
    dialingCode: "+420",
    placeholderVat: "CZ000000000",
    placeholderPostcode: "100 00",
    placeholderCompanyName: "Příklad s.r.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  DK: {
    i18nKey: "countries.DK",
    alpha2Code: "DK",
    dialingCode: "+45",
    placeholderVat: "DK00000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Eksempel ApS",
    placeholderPhoneNumber: "123 456 789",
  },
  EE: {
    i18nKey: "countries.EE",
    alpha2Code: "EE",
    dialingCode: "+372",
    placeholderVat: "EE000000000",
    placeholderPostcode: "10123",
    placeholderCompanyName: "Näidis OÜ",
    placeholderPhoneNumber: "123 456 789",
  },
  FI: {
    i18nKey: "countries.FI",
    alpha2Code: "FI",
    dialingCode: "+358",
    placeholderVat: "FI00000000",
    placeholderPostcode: "00000",
    placeholderCompanyName: "Esimerkki Oy",
    placeholderPhoneNumber: "123 456 789",
  },
  FR: {
    i18nKey: "countries.FR",
    alpha2Code: "FR",
    dialingCode: "+33",
    placeholderVat: "FR00000000000",
    placeholderPostcode: "75000",
    placeholderCompanyName: "Exemple SARL",
    placeholderPhoneNumber: "123 456 789",
  },
  EL: {
    i18nKey: "countries.EL",
    alpha2Code: "EL",
    dialingCode: "+30",
    placeholderVat: "EL000000000",
    placeholderPostcode: "100 00",
    placeholderCompanyName: "Παράδειγμα ΑΕ",
    placeholderPhoneNumber: "123 456 789",
  },
  HU: {
    i18nKey: "countries.HU",
    alpha2Code: "HU",
    dialingCode: "+36",
    placeholderVat: "HU00000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Példa Kft.",
    placeholderPhoneNumber: "123 456 789",
  },
  IE: {
    i18nKey: "countries.IE",
    alpha2Code: "IE",
    dialingCode: "+353",
    placeholderVat: "IE0000000X",
    placeholderPostcode: "D01 F1P2",
    placeholderCompanyName: "Example Ltd.",
    placeholderPhoneNumber: "07123 456789",
  },
  IT: {
    i18nKey: "countries.IT",
    alpha2Code: "IT",
    dialingCode: "+39",
    placeholderVat: "IT00000000000",
    placeholderPostcode: "00100",
    placeholderCompanyName: "Esempio S.p.A.",
    placeholderPhoneNumber: "123 456 789",
  },
  LV: {
    i18nKey: "countries.LV",
    alpha2Code: "LV",
    dialingCode: "+371",
    placeholderVat: "LV00000000000",
    placeholderPostcode: "LV-1000",
    placeholderCompanyName: "Piemērs SIA",
    placeholderPhoneNumber: "123 456 789",
  },
  LT: {
    i18nKey: "countries.LT",
    alpha2Code: "LT",
    dialingCode: "+370",
    placeholderVat: "LT000000000",
    placeholderPostcode: "LT-10000",
    placeholderCompanyName: "Pavyzdys UAB",
    placeholderPhoneNumber: "123 456 789",
  },
  LU: {
    i18nKey: "countries.LU",
    alpha2Code: "LU",
    dialingCode: "+352",
    placeholderVat: "LU00000000",
    placeholderPostcode: "L-1000",
    placeholderCompanyName: "Beispill S.à r.l.",
    placeholderPhoneNumber: "123 456 789",
  },
  MT: {
    i18nKey: "countries.MT",
    alpha2Code: "MT",
    dialingCode: "+356",
    placeholderVat: "MT00000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Eżempju Ltd.",
    placeholderPhoneNumber: "123 456 789",
  },
  NL: {
    i18nKey: "countries.NL",
    alpha2Code: "NL",
    dialingCode: "+31",
    placeholderVat: "NL000000000B00",
    placeholderPostcode: "1234 AB",
    placeholderCompanyName: "Voorbeeld B.V.",
    placeholderPhoneNumber: "07123 456789",
  },
  PL: {
    i18nKey: "countries.PL",
    alpha2Code: "PL",
    dialingCode: "+48",
    placeholderVat: "PL0000000000",
    placeholderPostcode: "00-000",
    placeholderCompanyName: "Przykład Sp. z o.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  PT: {
    i18nKey: "countries.PT",
    alpha2Code: "PT",
    dialingCode: "+351",
    placeholderVat: "PT000000000",
    placeholderPostcode: "1000-000",
    placeholderCompanyName: "Exemplo Lda.",
    placeholderPhoneNumber: "123 456 789",
  },
  RO: {
    i18nKey: "countries.RO",
    alpha2Code: "RO",
    dialingCode: "+40",
    placeholderVat: "RO000000000",
    placeholderPostcode: "010000",
    placeholderCompanyName: "Exemplu SRL",
    placeholderPhoneNumber: "123 456 789",
  },
  RS: {
    i18nKey: "countries.RS",
    alpha2Code: "RS",
    dialingCode: "+381",
    placeholderVat: "RS000000000",
    placeholderPostcode: "11000",
    placeholderCompanyName: "Primer d.o.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  SK: {
    i18nKey: "countries.SK",
    alpha2Code: "SK",
    dialingCode: "+421",
    placeholderVat: "SK0000000000",
    placeholderPostcode: "010 01",
    placeholderCompanyName: "Príklad s.r.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  SI: {
    i18nKey: "countries.SI",
    alpha2Code: "SI",
    dialingCode: "+386",
    placeholderVat: "SI00000000",
    placeholderPostcode: "1000",
    placeholderCompanyName: "Primer d.o.o.",
    placeholderPhoneNumber: "123 456 789",
  },
  ES: {
    i18nKey: "countries.ES",
    alpha2Code: "ES",
    dialingCode: "+34",
    placeholderVat: "ESX0000000X",
    placeholderPostcode: "28000",
    placeholderCompanyName: "Ejemplo S.L.",
    placeholderPhoneNumber: "123 456 789",
  },
  SE: {
    i18nKey: "countries.SE",
    alpha2Code: "SE",
    dialingCode: "+46",
    placeholderVat: "SE000000000000",
    placeholderPostcode: "100 00",
    placeholderCompanyName: "Exempel AB",
    placeholderPhoneNumber: "123 456 789",
  },
  GB: {
    i18nKey: "countries.GB",
    alpha2Code: "GB",
    dialingCode: "+44",
    placeholderVat: "GB000000000",
    placeholderPostcode: "EC1A 1BB",
    placeholderCompanyName: "Example Ltd.",
    placeholderPhoneNumber: "07123 456789",
  },
};
export type CountryCode = Extract<keyof typeof countries, string>;
export const COUNTRY_DICT = countries;
export const COUNTRY_LIST = Object.values(countries);
export const DEFAULT_COUNTRY_CODE: CountryCode = "DE";
export const DEFAULT_COUNTRY = COUNTRY_DICT[DEFAULT_COUNTRY_CODE];

/**
 * Transform a float number representing an amount in a currency to equivalent in cents.
 * Alternative could be to use https://mikemcl.github.io/decimal.js/
 * @param x
 */
export function financialCents(x: number): number {
  const inCents = (x * 100).toFixed(0);
  return Number.parseInt(inCents, 10);
}

export type TermsAndConditionsUrls = {
  certifiedDataDeletionService: string;
  certifiedDataDeletionServiceNL: string;
  demoFirstPartyService: string;
  lissa: string;
  privacyPolicy: string;
  privacyPolicyNL: string;
  purchase: string;
  purchaseNL: string;
  rent: string;
  rentNL: string;
  servicesComspot: string;
  servicesComputerhaus: string;
  servicesImplementIt: string;
  servicesInnovazy: string;
  servicesMcshark: string;
  termsOfUse: string;
  termsOfUseNL: string;
  topiCare: string;
  topiCarePlus: string;
  topiCarePlusMichaelAG: string;
  topiCarePlusSynaxon: string;
};
