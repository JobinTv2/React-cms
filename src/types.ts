export interface LoanFormType {
  metadata: Metadata;
  sys: LoanFormTypeSys;
  fields: Fields;
}

export interface Fields {
  heading: string;
  inputs: SubmitButton[];
  submitButton: SubmitButton;
}

export interface SubmitButton {
  sys: SubmitButtonSys;
}

export interface SubmitButtonSys {
  type: string;
  linkType: string;
  id: string;
}

export interface Metadata {
  tags: any[];
}

export interface LoanFormTypeSys {
  space: SubmitButton;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: SubmitButton;
  revision: number;
  contentType: SubmitButton;
  locale: string;
}
