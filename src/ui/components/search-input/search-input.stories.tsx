import type { Meta, StoryFn } from "@storybook/react";
import withMaxWidth from "$/storybook-helpers/decorators/with-maxwidth";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import { SearchInput, SearchInputProps } from "./search-input";

export default {
  title: "UI: Components/Search Input",
  component: SearchInput,
  decorators: [withMaxWidth(), withPadding()],
  args: {
    onChange: () => {},
    onSubmit: () => {},
    description: "Search description",
    placeholder: "Search placeholder",
  },
  // See fix to avoid circular dependencies in React-Hook-Form https://github.com/storybookjs/storybook/issues/12747
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta;

const Template: StoryFn<SearchInputProps> = (props) => {
  return <SearchInput {...props} />;
};

export const Default = Template.bind({});
