"use client"
import { moneSerrat } from '@/app/layout';
import { authClient } from '@/lib/auth-client';
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { Button, Checkbox, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Signup = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email(
      { name, email, password },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };
 const [isVisible, setIsVisible] = useState(false);
 const [password, setPassword] = useState("");
  return (
    <div className={`${moneSerrat.className}`}>
      <Form
        className="flex w-96 flex-col gap-4 mx-auto my-10 bg-base-200 p-8 rounded-2xl"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" variant="secondary" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>
  <TextField className="w-full max-w-[280px]" name="password">
                     <Label>Password</Label>
                     <InputGroup>
                       <InputGroup.Input
                         className="w-full max-w-[280px]"
                         type={isVisible ? "text" : "password"}
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                       />
                       <InputGroup.Suffix className="pr-0">
                         <Button
                           isIconOnly
                           aria-label={isVisible ? "Hide password" : "Show password"}
                           size="sm"
                           variant="ghost"
                           onPress={() => setIsVisible(!isVisible)}
                         >
                           {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                         </Button>
                       </InputGroup.Suffix>
                     </InputGroup>
                   </TextField>

        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;