export const parseResponseToHtml = (response: string): string => {
  return response
    .replace(/### /g, '<h5>')
    .replace(/ - /g, '<li>')
    .replace(/\n/g, '<br />');
};