import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';

import { Form, Button, Input } from 'antd';
import { getEntryReferences, getLoanForm } from '../../../lib/Api';
import { LoanFormType } from '../../../types';
import { LoanFormReferenceType } from './types';

type ButtonType =
  | 'link'
  | 'text'
  | 'ghost'
  | 'default'
  | 'primary'
  | 'dashed'
  | undefined;

export const LoanForm: React.FC = () => {
  const [data, setData] = useState<LoanFormReferenceType | null>(null);
  const [formData, setFormData] = useState<LoanFormType | null>(null);

  useEffect(() => {
    getLoanForm()
      .then((res) => {
        setFormData(res);
      })
      .catch((err) => console.error(err));
    getEntryReferences()
      .then((res) => {
        setData(res);
      })
      .catch((err) => err);
  }, []);

  if (formData == null || data == null) {
    return null;
  }

  const submitButton = data.includes.Entry.find(
    (item) => item.sys.id === formData.fields.submitButton.sys.id
  );
  return (
    <Continer>
      <Heading>{formData?.fields.heading}</Heading>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
        className="w-80"
      >
        {formData?.fields.inputs.map((item) => {
          const inputField = data?.includes.Entry.find(
            (ele) => ele.sys.id === item.sys.id
          );

          return (
            <Form.Item
              key={item.sys.id}
              label={inputField?.fields.name?.['en-US']}
              name={inputField?.fields.name?.['en-US']}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder={inputField?.fields.placeholder?.['en-US']} />
            </Form.Item>
          );
        })}

        <Form.Item wrapperCol={{ offset: 14, span: 10 }}>
          <Button
            type={submitButton?.fields.theme?.['en-US'] as ButtonType}
            htmlType="submit"
            className="w-full"
          >
            {String(submitButton?.fields.text?.['en-US'])}
          </Button>
        </Form.Item>
      </Form>
    </Continer>
  );
};

const Continer = tw.div`h-[30rem] w-96 flex flex-col justify-center items-center`;
const Heading = tw.span`text-2xl text-gray-500 pb-4`;
