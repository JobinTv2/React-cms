import { LoanFormReferenceType } from '../components/2-molecules/LoanForm/types';
import {
  baseUrlContentManagement,
  baseUrlDeliveryManagement,
  contentfulDeliveryToken,
  contentfulEnvironmentID,
  contentfulManagementToken,
  contentfulSpaceId,
} from '../constants';
import { LoanFormType } from '../types';

export const getLoanForm: () => Promise<LoanFormType> = async () => {
  const response = await fetch(
    `${String(baseUrlDeliveryManagement)}/spaces/${String(
      contentfulSpaceId
    )}/environments/${String(
      contentfulEnvironmentID
    )}/entries/1rCnhuQzprh9khONj2tzkO?access_token=${String(
      contentfulDeliveryToken
    )}`
  );
  const result = await response.json();
  return result;
};

export const getEntryReferences: () => Promise<LoanFormReferenceType> =
  async () => {
    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${String(contentfulManagementToken)}`,
    };
    const requestOptions = {
      contentType: 'application/json',
      method: 'GET',
      headers,
    };
    const response = await fetch(
      `${String(baseUrlContentManagement)}/spaces/${String(
        contentfulSpaceId
      )}/environments/${String(
        contentfulEnvironmentID
      )}/entries/1rCnhuQzprh9khONj2tzkO/references?include=6`,
      requestOptions
    );
    const result = await response.json();
    return result;
  };
