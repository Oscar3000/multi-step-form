import { Card, CardContent } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import React from "react";
import { object, mixed, number } from "yup";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Formik
          validationSchema={object({
            money: mixed().when("millionaire", {
              is: true,
              then: number()
                .required()
                .min(1000000, "You need to have 1 million"),
              otherwise: number().required(),
            }),
          })}
          initialValues={{
            firstName: "",
            lastName: "",
            millionaire: false,
            money: 0,
            description: "",
          }}
          onSubmit={() => {}}
        >
          <Form autoComplete="off">
            <div>
              <Field
                name="firstName"
                component={TextField}
                label="First Name"
              />
              <Field name="lastName" component={TextField} label="Last Name" />
              <Field
                name="millionaire"
                tyepe="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: "I'a millionaire" }}
              />
            </div>
            <div>
              <Field
                name="money"
                type="number"
                component={TextField}
                label="All the money I have"
              />
            </div>
            <div>
              <Field
                name="description"
                component={TextField}
                label="Description"
              />
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}


export function FormikStepper({ children, ...props: FormikConfig<FormikValues> }) {
  
}