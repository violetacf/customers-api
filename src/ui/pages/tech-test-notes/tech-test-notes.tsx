import { BaseContainer } from "$/ui/components/container/base-container";
import { BackButton } from "$/ui/components/buttons/back-button/back-button";
import { Heading } from "$/ui/components/heading/heading";
import { TechTestCard } from "./components/TechTestCard";

export function TechTestNotes() {
  return (
    <BaseContainer>
      <BaseContainer layout="row" noPadding alignItemsCenter>
        <BackButton to="/customers" />
        <Heading $level={1} typography="headline2">
          Tech Test Notes
        </Heading>
      </BaseContainer>

      <TechTestCard title="API Fetching">
        First I started by fetching the data in Postman, using the available
        endpoints. Once I saw how the data was structured I started writing the
        fetch API in <code>api/customers.ts</code>. Once I had that, I worked on
        rendering the paginated customers in the UI. I encountered a CORS error
        and had to look up how to fix it, I had never worked with vite before
        and I learned about using a proxy in the <code>vite.config.ts</code>{" "}
        configuration file.
      </TechTestCard>

      <TechTestCard title="Reusable Components">
        I focused on creating reusable components where possible, specially when
        seeing repetitive code. For example, the PaginationControls,
        CustomerCard, and the CustomerTableHeader, making the code more
        maintainable and easier to extend in the future.
      </TechTestCard>

      <TechTestCard title="Storybook">
        I used Storybook to visualize and test the components in isolation, and
        it was really useful. It helped me understand the components' behaviors,
        and ensured that I could easily find what was wanted in Figma.
      </TechTestCard>

      <TechTestCard title="What I Learned">
        This exercise reinforced my understanding of working with paginated
        data, managing API calls, and handling CORS issues. I also learned more
        about structuring components in a way that allows them to be easily
        reused across the app. One important takeaway was how to improve user
        experience when handling large data sets, such as adding a message when
        fewer items are available than the page size.
      </TechTestCard>
    </BaseContainer>
  );
}
