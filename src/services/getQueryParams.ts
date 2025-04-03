import qs from 'qs';

export function getQueryParams(data: { [key: string | number]: string | number }) {
  return qs.stringify(data, { arrayFormat: 'repeat' });
}
