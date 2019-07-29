import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

export const FormExampleField = () => (
  <Form>
    <Form.Field>
      <label>Give us a 5 star description about yourself!</label>
      <Form.Field
        control={Input}
        label="Bio"
        placeholder="Tell us more about yourself..."
      />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);
