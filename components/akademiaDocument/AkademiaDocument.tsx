import React, { useRef, useState } from 'react';
import akademiaDocumentStyles from './akademiaDocument.module.css';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import ElementRef from '../elementRef/ElementRef';

const AkademiaDocument = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [content, setContent] = useState('');

  const viewContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className={`container ${akademiaDocumentStyles.container}`}>
        <Editor
          id='EditorID'
          tinymceScriptSrc={
            process.env.NEXT_PUBLIC_PUBLIC_URL + '/tinymce/tinymce.min.js'
          }
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue='<p>This is the initial content of the editor.</p>'
          init={{
            menubar: false,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'preview',
              'help',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
          }}
        />
        <div className={akademiaDocumentStyles.buttons}>
          <button onClick={viewContent}>Wyświetl podgląd</button>
          <div className={akademiaDocumentStyles.extended}>
            <button onClick={viewContent}>Zamieść komunikat</button>
            <svg
              id='Warstwa_1'
              data-name='Warstwa 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 56 56'
            >
              <g>
                <circle cx='28' cy='46' r='6' />
                <polyline points='24.21 36 31.95 36 35 5 21 5' />
              </g>
              <circle cx='28' cy='28' r='27.5' strokeWidth='1' fill='none' />
            </svg>
            <p className={akademiaDocumentStyles.warning}>
              Po zamieszczeniu komunikatu, będzie on widoczny w sekcji szkoleń
              dla wszystkich użytkowników strony.
            </p>
          </div>
        </div>
        <ElementRef
          element='section'
          content={content}
          className={akademiaDocumentStyles.preview}
        />
      </div>
    </>
  );
};

export default AkademiaDocument;
