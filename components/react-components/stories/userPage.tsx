import React from "react";
import Container from "../general/Container";
import Input from "../general/Input";

export default function UserPage() {
  return (
    <div>
      <Container name="Profile" className="">
        <div className="p-2">
          <div className="flex gap-2">
            <FormInput label="First Name" disabled value="FN" />
            <FormInput label="Last Name" disabled value="LN" />
          </div>
          <FormInput label="Email" value="abc@gmail.com" />
        </div>
      </Container>
    </div>
  );
}

function FormInput(props: {
  label: string;
  disabled?: boolean;
  value?: string;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <label>{props.label}</label>
      <Input type="text" disabled={props.disabled} value={props.value} />
    </div>
  );
}
