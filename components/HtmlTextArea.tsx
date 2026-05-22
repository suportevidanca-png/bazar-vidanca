'use client';

import { useState, useRef } from 'react';
import { Bold, Italic, List, Minus } from 'lucide-react';

export default function HtmlTextArea({ name, required, placeholder, className }: { name: string, required?: boolean, placeholder?: string, className?: string }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertTag = (tagStart: string, tagEnd: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    const newValue = before + tagStart + selected + tagEnd + after;
    setValue(newValue);

    // Reposition cursor
    setTimeout(() => {
      textarea.selectionStart = start + tagStart.length;
      textarea.selectionEnd = end + tagStart.length;
      textarea.focus();
    }, 0);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 bg-slate-100 p-2 rounded-xl border border-slate-200">
        <button type="button" onClick={() => insertTag('<b>', '</b>')} className="p-2 hover:bg-white rounded-lg transition" title="Negrito">
          <Bold size={16} />
        </button>
        <button type="button" onClick={() => insertTag('<i>', '</i>')} className="p-2 hover:bg-white rounded-lg transition" title="Itálico">
          <Italic size={16} />
        </button>
        <button type="button" onClick={() => insertTag('<br/>\n', '')} className="p-2 hover:bg-white rounded-lg transition" title="Quebra de Linha">
          <Minus size={16} />
        </button>
        <button type="button" onClick={() => insertTag('<ul>\n  <li>', '</li>\n</ul>')} className="p-2 hover:bg-white rounded-lg transition" title="Lista">
          <List size={16} />
        </button>
        <span className="text-xs text-slate-400 ml-auto flex items-center px-2">
          Suporta HTML
        </span>
      </div>
      <textarea 
        ref={textareaRef}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={6} 
        required={required} 
        placeholder={placeholder} 
        className={className}
      ></textarea>
    </div>
  );
}
