import { SecondaryButton } from "$/ui/components/buttons/button/secondary-button/secondary-button";
import { BaseContainer } from "$/ui/components/container/base-container";
import { Dropdown } from "$/ui/components/dropdown/dropdown";

type Props = {
  perPage: number;
  currentPage: number;
  isLastPage: boolean;
  setPerPage: (n: number) => void;
  setCurrentPage: (n: number) => void;
};

export function PaginationControls({
  perPage,
  currentPage,
  isLastPage,
  setPerPage,
  setCurrentPage,
}: Props) {
  return (
    <BaseContainer layout="row">
      <div style={{ flex: 1 }}></div>
      <Dropdown
        icon="caretDown"
        label={`Items per page: ${perPage}`}
        typography="overline"
        options={[5, 10, 15].map((num) => ({
          label: String(num),
          onClick: () => {
            setPerPage(num);
            setCurrentPage(1);
          },
        }))}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <SecondaryButton
          onClick={() => setCurrentPage(currentPage - 1)}
          isDisabled={currentPage === 1}
          icon="caretLeft"
        />
        <span>{currentPage}</span>
        <SecondaryButton
          onClick={() => setCurrentPage(currentPage + 1)}
          isDisabled={isLastPage}
          icon="caretRight"
        />
      </div>
    </BaseContainer>
  );
}
