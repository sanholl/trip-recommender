export const parseResponseToHtml = (response: string): string => {
  return response
    .replace(/### (.*?)\n/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/ - (.*?)\n/g, '<li>$1</li>')
    .replace(/\n/g, '<br />');
};