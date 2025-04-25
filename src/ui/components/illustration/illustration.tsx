import { FC } from "react";

import Billing from "$/ui/assets/illustrations/billing.svg";
import CashFlow from "$/ui/assets/illustrations/cashflow.svg";
import Delivery from "$/ui/assets/illustrations/delivery.svg";
import Devices from "$/ui/assets/illustrations/devices.svg";
import Done from "$/ui/assets/illustrations/done.svg";
import Empty from "$/ui/assets/illustrations/empty.svg";
import Error from "$/ui/assets/illustrations/error.svg";
import ErrorCircle from "$/ui/assets/illustrations/error_circle.svg";
import Feedback from "$/ui/assets/illustrations/feedback.svg";
import IdCheck from "$/ui/assets/illustrations/id_check.svg";
import Mail from "$/ui/assets/illustrations/mail.svg";
import Monthly from "$/ui/assets/illustrations/monthly.svg";
import NotFound from "$/ui/assets/illustrations/not-found.svg";
import Payment from "$/ui/assets/illustrations/payment.svg";
import Relax from "$/ui/assets/illustrations/relax.svg";
import Sent from "$/ui/assets/illustrations/sent.svg";
import SignUp from "$/ui/assets/illustrations/signup.svg";
import Success from "$/ui/assets/illustrations/success.svg";
import SuccessCircle from "$/ui/assets/illustrations/success_circle.svg";
import Transparency2 from "$/ui/assets/illustrations/transparency2.svg";
import Transparency from "$/ui/assets/illustrations/transparency.svg";
import WarningCircle from "$/ui/assets/illustrations/warning-circle.svg";
import WarningCircleRed from "$/ui/assets/illustrations/warning-circle-red.svg";
import Warranty from "$/ui/assets/illustrations/warranty.svg";

export const IllustrationTypes = {
  billing: Billing,
  cashFlow: CashFlow,
  delivery: Delivery,
  devices: Devices,
  done: Done,
  empty: Empty,
  error: Error,
  errorCircle: ErrorCircle,
  feedback: Feedback,
  idCheck: IdCheck,
  mail: Mail,
  monthly: Monthly,
  notFound: NotFound,
  payment: Payment,
  relax: Relax,
  sent: Sent,
  signUp: SignUp,
  success: Success,
  successCircle: SuccessCircle,
  transparency: Transparency,
  transparency2: Transparency2,
  warningCircle: WarningCircle,
  warningCircleRed: WarningCircleRed,
  warranty: Warranty,
};

export type IllustrationNames = keyof typeof IllustrationTypes;
export interface IllustrationProps {
  name: IllustrationNames;
  className?: string;
}

export const Illustration: FC<IllustrationProps> = ({
  name,
  className,
}: IllustrationProps) => {
  const Svg = name && IllustrationTypes[name];
  return <img src={Svg} className={className} loading="lazy" alt="" />;
};
