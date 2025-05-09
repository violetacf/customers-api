import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";

import {
  Container,
  Description,
  Form,
  Input,
  SearchIcon,
} from "./search-input.styles";

interface SearchInputForm {
  searchProduct: string;
}

export interface SearchInputProps {
  onChange: (term: string) => void;
  defaultValue?: string;
  onSubmit?: (term: string, reset?: () => void) => void;
  placeholder: string;
  isDisabled?: boolean;
  helperMessage?: string;
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  onChange,
  defaultValue,
  onSubmit: parentOnSubmit,
  helperMessage: description,
  placeholder,
  isDisabled = false,
}) => {
  const defaultValues = useMemo(
    () => ({ searchProduct: defaultValue }),
    [defaultValue]
  );

  const formMethods = useForm<SearchInputForm>({
    defaultValues,
  });

  // Added register to save the input value for the fetch
  const { handleSubmit, watch, reset, register } = formMethods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const watchedValue = watch("searchProduct");
  const [debouncedValue] = useDebounce(watchedValue, 500);

  const [previousValue, setPreviousValue] = useState<string>();

  useEffect(() => {
    if (debouncedValue) {
      onChange(debouncedValue.toLowerCase());
      setPreviousValue(debouncedValue);
    } else if (previousValue !== undefined) {
      onChange("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange, debouncedValue]);

  const onSubmit = useCallback(
    (data: SearchInputForm) => {
      if (parentOnSubmit) {
        parentOnSubmit(data.searchProduct);
      }
    },
    [parentOnSubmit]
  );

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Input
            {...register("searchProduct")}
            name="searchProduct"
            type="search"
            placeholder={placeholder}
            disabled={isDisabled}
          />
          <SearchIcon name="magnifyingGlass" />
        </Container>
        {description ? (
          <Description typography="body2">{description}</Description>
        ) : undefined}
      </Form>
    </FormProvider>
  );
};
