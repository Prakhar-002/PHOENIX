/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


export default function toTitleCase(text) {
      return text
            .split(' ')
            .map((i) => i.replace(i[0], i[0].toUpperCase()))
            .join(' ');
}