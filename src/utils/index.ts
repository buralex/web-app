import { SERVER_ERROR_MESSAGE } from '@/constants';
import axios, { AxiosError } from 'axios';
import { ReadonlyURLSearchParams } from 'next/navigation';

/**
 * Joins css classes conditionally.
 * Example: `cssClasses(['status', isActive && 'active'])`
 */
export const cssClasses = (classes: (string | null | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getPaginationParams = (searchParams: ReadonlyURLSearchParams) => {
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('hitsPerPage')) || 10;

  return { currentPage, itemsPerPage };
};

export const getIsClickedOnTextFreeSpace = (
  target: HTMLElement,
  textFieldCssClass: string,
) => {
  return (
    target.firstChild?.nodeType !== Node.TEXT_NODE &&
    !['svg', 'path'].includes(target.tagName.toLowerCase()) &&
    !String(target?.className).includes(textFieldCssClass)
  );
};

interface ErrorResponse {
  message?: string;
}

export const getAxiosErrorMessage = (
  error: AxiosError<ErrorResponse> | unknown,
) => {
  if (axios.isAxiosError<ErrorResponse>(error)) {
    return error.response?.data?.message || SERVER_ERROR_MESSAGE;
  }
  return SERVER_ERROR_MESSAGE;
};
