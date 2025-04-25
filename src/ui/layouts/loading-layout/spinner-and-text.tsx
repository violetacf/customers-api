import { FC } from "react";
import { Spinner } from "$/ui/components/spinner/spinner";
import { Text } from "$/ui/components/text/text";

export const SpinnerAndText: FC = () => {
  return (
    <>
      <Spinner />
      <Text>{"Loading"}</Text>
    </>
  );
};
