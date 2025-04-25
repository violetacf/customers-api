import type { TermsAndConditionsResult } from "topi-api-client";

import { TermsAndConditionsUrls } from "$/common/models";

export function mapTermsAndConditions(
  response: TermsAndConditionsResult
): TermsAndConditionsUrls {
  // The backend returns a `TermsAndConditionsResult` object containing arrays for each supported language (e.g., `de`, `nl`).
  // Each array contains entries with a `type` and a `url`.
  // The `type` defines the category of the document (e.g., "privacy_policy", "terms_of_use", "rental", "purchase", etc.).
  //
  // This function iterates over the German (`de`) and Dutch (`nl`) arrays and maps each document URL into the correct
  // field in a `TermsAndConditionsUrls` object. We map both German and Dutch versions for each relevant type.
  // Some types (e.g., `topi_care`) are used in multiple fields (like `topiCare` and `demoFirstPartyService`).
  //
  // If the backend provides additional `type` entries not currently mapped, they will be ignored by default.

  const urls: TermsAndConditionsUrls = {
    certifiedDataDeletionService: "",
    certifiedDataDeletionServiceNL: "",
    demoFirstPartyService: "",
    lissa: "",
    privacyPolicy: "",
    privacyPolicyNL: "",
    purchase: "",
    purchaseNL: "",
    rent: "",
    rentNL: "",
    servicesComspot: "",
    servicesComputerhaus: "",
    servicesImplementIt: "",
    servicesInnovazy: "",
    servicesMcshark: "",
    termsOfUse: "",
    termsOfUseNL: "",
    topiCare: "",
    topiCarePlus: "",
    topiCarePlusMichaelAG: "",
    topiCarePlusSynaxon: "",
  };

  response.de.forEach((element) => {
    switch (element.type) {
      case "privacy_policy":
        urls.privacyPolicy = element.url;
        break;
      case "terms_of_use":
        urls.termsOfUse = element.url;
        break;
      case "rental":
        urls.rent = element.url;
        break;
      case "purchase":
        urls.purchase = element.url;
        break;
      case "topi_care":
        urls.topiCare = element.url;
        urls.demoFirstPartyService = element.url;
        break;
      case "topi_care_plus":
        urls.topiCarePlus = element.url;
        break;
      case "topi_care_synaxon":
        urls.topiCarePlusSynaxon = element.url;
        break;
      case "topi_care_michael_ag":
        urls.topiCarePlusMichaelAG = element.url;
        break;
      case "data_deletion":
        urls.certifiedDataDeletionService = element.url;
        break;
      case "comspot_services":
        urls.servicesComspot = element.url;
        break;
      case "implement_it_services":
        urls.servicesImplementIt = element.url;
        break;
      case "computerhaus_gdd_sales_point_services":
        urls.servicesComputerhaus = element.url;
        break;
      case "mcshark_services":
        urls.servicesMcshark = element.url;
        break;
      case "innovazy_services":
        urls.servicesInnovazy = element.url;
        break;
      default:
    }
  });

  response.nl.forEach((element) => {
    switch (element.type) {
      case "privacy_policy":
        urls.privacyPolicyNL = element.url;
        break;
      case "terms_of_use":
        urls.termsOfUseNL = element.url;
        break;
      case "rental":
        urls.rentNL = element.url;
        break;
      case "purchase":
        urls.purchaseNL = element.url;
        break;
      case "data_deletion":
        urls.certifiedDataDeletionServiceNL = element.url;
        break;
      default:
    }
  });

  return urls;
}
