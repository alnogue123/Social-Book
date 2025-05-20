import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

export function convertirDeltaDeStringAHtml(delta: any): string {
  try {
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    return converter.convert();
  } catch (error) {
    console.error("Error al convertir el delta:", error);
    return delta;
  }
}