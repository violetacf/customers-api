import { FC } from "react";

import AddressBook from "$/ui/assets/svgs/icons/address-book.svg?react";
import ArrowClockwise from "$/ui/assets/svgs/icons/arrow-clockwise.svg?react";
import ArrowElbowRightUp from "$/ui/assets/svgs/icons/arrow-elbow-right-up.svg?react";
import ArrowFatLinesUp from "$/ui/assets/svgs/icons/arrow-fat-lines-up.svg?react";
import ArrowLeft from "$/ui/assets/svgs/icons/arrow-left.svg?react";
import ArrowRight from "$/ui/assets/svgs/icons/arrow-right.svg?react";
import ArrowsClockwise from "$/ui/assets/svgs/icons/arrows-clockwise.svg?react";
import ArrowsOut from "$/ui/assets/svgs/icons/arrows-out.svg?react";
import ArrowUpRight from "$/ui/assets/svgs/icons/arrow-up-right.svg?react";
import Bank from "$/ui/assets/svgs/icons/bank.svg?react";
import BellRinging from "$/ui/assets/svgs/icons/bell-ringing.svg?react";
import Blank from "$/ui/assets/svgs/icons/blank.svg?react";
import Barcode from "$/ui/assets/svgs/icons/barcode.svg?react";
import Book from "$/ui/assets/svgs/icons/book.svg?react";
import Bookmark from "$/ui/assets/svgs/icons/bookmark.svg?react";
import CalendarBlank from "$/ui/assets/svgs/icons/calendar-blank.svg?react";
import CalendarCheck from "$/ui/assets/svgs/icons/calendar-check.svg?react";
import CaretDown from "$/ui/assets/svgs/icons/caret-down.svg?react";
import CaretLeft from "$/ui/assets/svgs/icons/caret-left.svg?react";
import CaretRight from "$/ui/assets/svgs/icons/caret-right.svg?react";
import CaretUp from "$/ui/assets/svgs/icons/caret-up.svg?react";
import Chat from "$/ui/assets/svgs/icons/chat.svg?react";
import Check from "$/ui/assets/svgs/icons/check.svg?react";
import CheckCircle from "$/ui/assets/svgs/icons/check-circle.svg?react";
import XCircle from "$/ui/assets/svgs/icons/x-circle.svg?react";
import Copy from "$/ui/assets/svgs/icons/copy.svg?react";
import Cross from "$/ui/assets/svgs/icons/cross.svg?react";
import DotsThreeOutline from "$/ui/assets/svgs/icons/dots-three-outline.svg?react";
import Download from "$/ui/assets/svgs/icons/download.svg?react";
import DotsThreeOutlineVertical from "$/ui/assets/svgs/icons/dots-three-outline-vertical.svg?react";
import ExternalLink from "$/ui/assets/svgs/icons/external-link.svg?react";
import Eye from "$/ui/assets/svgs/icons/eye.svg?react";
import FallbackImage from "$/ui/assets/svgs/icons/fallback-image.svg?react";
import FileText from "$/ui/assets/svgs/icons/file-text.svg?react";
import Flag from "$/ui/assets/svgs/icons/flag.svg?react";
import Info from "$/ui/assets/svgs/icons/info.svg?react";
import InfoRounded from "$/ui/assets/svgs/icons/info-rounded.svg?react";
import Laptop from "$/ui/assets/svgs/icons/laptop.svg?react";
import Link from "$/ui/assets/svgs/icons/link.svg?react";
import List from "$/ui/assets/svgs/icons/list.svg?react";
import ListDashes from "$/ui/assets/svgs/icons/list-dashes.svg?react";
import Lock from "$/ui/assets/svgs/icons/lock.svg?react";
import Logout from "$/ui/assets/svgs/icons/logout-icon.svg?react";
import MagnifyingGlass from "$/ui/assets/svgs/icons/magnifying-glass.svg?react";
import Medal from "$/ui/assets/svgs/icons/medal.svg?react";
import NumberCircleOne from "$/ui/assets/svgs/icons/number-circle-one.svg?react";
import NumberCircleTwo from "$/ui/assets/svgs/icons/number-circle-two.svg?react";
import NumberCircleThree from "$/ui/assets/svgs/icons/number-circle-three.svg?react";
import NumberCircleFour from "$/ui/assets/svgs/icons/number-circle-four.svg?react";
import NumberCircleFive from "$/ui/assets/svgs/icons/number-circle-five.svg?react";
import PencilSimple from "$/ui/assets/svgs/icons/pencil-simple.svg?react";
import Performance from "$/ui/assets/svgs/icons/performance.svg?react";
import Plus from "$/ui/assets/svgs/icons/plus.svg?react";
import Prohibit from "$/ui/assets/svgs/icons/prohibit.svg?react";
import Question from "$/ui/assets/svgs/icons/question.svg?react";
import Receipt from "$/ui/assets/svgs/icons/receipt.svg?react";
import SepaIcon from "$/ui/assets/svgs/icons/sepa_icon.svg?react";
import ShoppingCart from "$/ui/assets/svgs/icons/shopping-cart.svg?react";
import SpinnerGap from "$/ui/assets/svgs/icons/spinner-gap.svg?react";
import Tag from "$/ui/assets/svgs/icons/tag.svg?react";
import Trash from "$/ui/assets/svgs/icons/trash.svg?react";
import TrashSimple from "$/ui/assets/svgs/icons/trash-simple.svg?react";
import Truck from "$/ui/assets/svgs/icons/truck.svg?react";
import User from "$/ui/assets/svgs/icons/user.svg?react";
import WarningCircle from "$/ui/assets/svgs/icons/warning-circle.svg?react";
import Warning from "$/ui/assets/svgs/icons/warning.svg?react";
import { Svg } from "./icon.styles";

export const iconTypes = {
  addressBook: AddressBook,
  arrowClockwise: ArrowClockwise,
  arrowElbowRightUp: ArrowElbowRightUp,
  arrowFatLinesUp: ArrowFatLinesUp,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowsClockwise: ArrowsClockwise,
  arrowsOut: ArrowsOut,
  arrowUpRight: ArrowUpRight,
  bank: Bank,
  bellRinging: BellRinging,
  blank: Blank,
  barcode: Barcode,
  book: Book,
  bookmark: Bookmark,
  calendarBlank: CalendarBlank,
  calendarCheck: CalendarCheck,
  caretLeft: CaretLeft,
  caretRight: CaretRight,
  caretDown: CaretDown,
  caretUp: CaretUp,
  chat: Chat,
  check: Check,
  checkCircle: CheckCircle,
  copy: Copy,
  cross: Cross,
  dotsThreeOutline: DotsThreeOutline,
  download: Download,
  dotsThreeOutlineVertical: DotsThreeOutlineVertical,
  externalLink: ExternalLink,
  eye: Eye,
  fallbackImage: FallbackImage,
  fileText: FileText,
  flag: Flag,
  info: Info,
  infoRounded: InfoRounded,
  laptop: Laptop,
  link: Link,
  listDashes: ListDashes,
  list: List,
  lock: Lock,
  logout: Logout,
  magnifyingGlass: MagnifyingGlass,
  medal: Medal,
  numberCircleOne: NumberCircleOne,
  numberCircleTwo: NumberCircleTwo,
  numberCircleThree: NumberCircleThree,
  numberCircleFour: NumberCircleFour,
  numberCircleFive: NumberCircleFive,
  pencilSimple: PencilSimple,
  performance: Performance,
  plus: Plus,
  prohibit: Prohibit,
  question: Question,
  receipt: Receipt,
  sepa: SepaIcon,
  shoppingCart: ShoppingCart,
  spinnerGap: SpinnerGap,
  tag: Tag,
  trash: Trash,
  trashSimple: TrashSimple,
  truck: Truck,
  user: User,
  warning: Warning,
  warningCircle: WarningCircle,
  xCircle: XCircle,
} as const;

export type IconName = keyof typeof iconTypes;

export interface IconProps {
  title?: string;
  className?: string;
  name: IconName;
}

export const Icon: FC<IconProps> = ({ title, className, name }: IconProps) => {
  const IconType = name && iconTypes[name];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Svg as={IconType as FC<any>} className={className} title={title} />;
};
