"use client";

import { useTooltip } from "@/shared/hooks";
import { FieldError, Form, Icon, Input, Label, Stack, SubmitButton } from "..";

export const ComponentsDemo = () => {
  const foobarTooltip = useTooltip({
    anchorSelect: "#foobar",
    content: "foobar tooltip",
    place: "top-end",
    variant: "error"
  });

  return (
    <div className="space-y-lg">
      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Styles</h2>
      </div>

      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Form Elements</h2>

        <Form
          options={{ title: "Form Title" }}
          style={{ form: { maxWidth: "md", backgroundColor: "primary", padding: "lg" } }}
        >
          <Stack>
            <Label options={{ text: "Label One", htmlFor: "foobar" }} />
            <div className="relative flex items-center">
              <Input
                options={{ name: "foobar", id: "foobar", placeholder: "input one" }}
                style={{ width: "full" }}
              />
              <Icon
                name="error"
                id="foobar"
                style={{
                  textColor: "warning-light",
                  position: "absolute",
                  fontSize: "lg",
                  className: "right-2"
                }}
              />
              {foobarTooltip}
            </div>
            <FieldError options={{ message: "Error message one" }} />
          </Stack>

          <Stack>
            <Label options={{ text: "Label Two", htmlFor: "foobaz" }} />
            <Input options={{ name: "foobaz", id: "foobaz", placeholder: "input two" }} />
            <FieldError options={{ message: "Error message two" }} />
          </Stack>

          <SubmitButton
            options={{ text: "Submit", variant: "primary" }}
            style={{ marginY: "sm", padding: "sm" }}
          />
        </Form>
      </div>

      {/* <div className="demo">
        <h2 className="w-xs border-b mb-lg">Icon</h2>
        <Icon
          name="check"
          id="foobar"
        />
        {tooltip1}
        <Icon
          name="error"
          id="foobaz"
          style={{ fontSize: "4xl" }}
        />
        {tooltip2}
      </div> */}

      {/* <div className="demo">
        <h2 className="w-xs border-b mb-lg">Button</h2>
        <Button style={{ border: "sm" }}>Submit</Button>
      </div> */}

      {/* <div className="demo">
        <h2 className="w-xs border-b mb-lg">Box</h2>
        <Box
          style={{
            border: "sm",
            width: "full",
            padding: "lg",
            className: "md:w-md lg:w-sm md:p-sm"
          }}
        >
          Box Children
        </Box>
      </div> */}

      {/* <div className="demo">
        <h2 className="w-xs border-b mb-lg">Layout</h2>
        <Layout
          options={{ title: <h3>Title</h3> }}
          style={{
            parentWrapper: { border: "sm", padding: "lg", spaceY: "lg" },
            titleWrapper: { border: "sm" },
            bodyWrapper: { border: "sm" }
          }}
        >
          <div>
            <p>layout child one</p>
          </div>
          <div>
            <p>layout child two</p>
          </div>
        </Layout>
      </div> */}
    </div>
  );
};
