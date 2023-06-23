import React, { useRef, useState } from 'react';
import akademiaDocumentStyles from './akademiaEditor.module.css';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import ElementRef from '../elementRef/ElementRef';
import { useRouter } from 'next/router';

const AkademiaDocument = () => {
  const router = useRouter();
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [trainingType, setTrainingType] = useState('basic');

  const viewContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };

  const postContent = async () => {
    if (editorRef.current) {
      try {
        if (trainingType === `basic`) {
          await fetch(`/api/notices/basic`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: editorRef.current.getContent(),
            }),
          });
          router.push('/akademia_chiropraktyki/szkolenie_podstawowe#startView');
        } else {
          await fetch(`/api/notices/advanced`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              desc: desc,
              content: editorRef.current.getContent(),
            }),
          });
          router.push(
            '/akademia_chiropraktyki/szkolenie_zaawansowane#startView'
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className={`container ${akademiaDocumentStyles.container}`}>
        <div className={akademiaDocumentStyles.label}>
          <p>Wybierz rodzaj szkolenia:</p>
          <select
            name='trainingType'
            id='trainingType'
            value={trainingType}
            onChange={(e) => setTrainingType(e.target.value)}
          >
            <option value='basic'>Podstawowe</option>
            <option value='advanced'>Zaawansowane</option>
          </select>
        </div>
        {trainingType === `advanced` && (
          <>
            <div className={akademiaDocumentStyles.label}>
              <p>Wprowadź tytuł:</p>
              <input
                className={akademiaDocumentStyles.advanced}
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={akademiaDocumentStyles.label}>
              <p>Wprowadź opis:</p>
              <input
                className={akademiaDocumentStyles.advanced}
                type='text'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </>
        )}
        <div className={akademiaDocumentStyles.label}>
          <p>Wprowadź treść komunikatu:</p>
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
        </div>
        <div className={akademiaDocumentStyles.buttons}>
          <button onClick={viewContent}>Wyświetl podgląd</button>
          <div className={akademiaDocumentStyles.extended}>
            <button onClick={postContent}>Zamieść komunikat</button>
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
              <circle
                cx='28'
                cy='28'
                r='27.5'
                fill='none'
                stroke='#000'
                strokeMiterlimit='10'
              />
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
