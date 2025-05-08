type SizeOption = 'small' | 'large' | 'huge' | false;
type ScriptOption = 'sub' | 'super';
type AlignOption = '' | 'center' | 'right' | 'justify';
type IndentOption = '-1' | '+1';
type ListOption = 'ordered' | 'bullet' | 'check';
type HeaderOption = 1 | 2 | 3 | 4 | 5 | 6 | false;

type ToolbarItem =
  | { size: SizeOption[] }
  | { font: string[] }
  | { color: string[] }
  | { background: string[] }
  | { script: ScriptOption[] }
  | { list: ListOption | ListOption[] }
  | { header: HeaderOption[] }
  | { indent: IndentOption[] }
  | { align: AlignOption[] }
  | 'bold' | 'italic' | 'underline' | 'strike'
  | 'blockquote' | 'code-block'
  | 'link' | 'image' | 'video'
  | 'clean';

type ToolbarGroup = ToolbarItem[];          

export type ToolbarStructure = (ToolbarItem | ToolbarGroup)[];


