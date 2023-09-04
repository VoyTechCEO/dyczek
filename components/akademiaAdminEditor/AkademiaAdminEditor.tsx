import React, { useRef, useState } from 'react';
import akademiaAdminEditorStyles from './akademiaAdminEditor.module.css';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import ElementRef from '../elementRef/ElementRef';
import { useRouter } from 'next/router';
import AkademiaWarningBtn from '../akademiaWarningBtn/AkademiaWarningBtn';

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
          const res = await fetch(
            `https://dyczek.netlify.app/api/notices/basic`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                content: editorRef.current.getContent(),
              }),
            }
          );
          const data = await res.json();
          router.push('/akademia_chiropraktyki/szkolenie_podstawowe#startView');
        } else {
          await fetch(`https://dyczek.netlify.app/api/notices/advanced`, {
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
      <div className={`container ${akademiaAdminEditorStyles.container}`}>
        <div className={akademiaAdminEditorStyles.label}>
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
            <div className={akademiaAdminEditorStyles.label}>
              <p>Wprowadź tytuł:</p>
              <input
                className={akademiaAdminEditorStyles.advanced}
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={akademiaAdminEditorStyles.label}>
              <p>Wprowadź opis:</p>
              <input
                className={akademiaAdminEditorStyles.advanced}
                type='text'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </>
        )}
        <div className={akademiaAdminEditorStyles.label}>
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
        <div className={akademiaAdminEditorStyles.buttons}>
          <button
            className={akademiaAdminEditorStyles.normal}
            onClick={viewContent}
          >
            Wyświetl podgląd
          </button>
          <AkademiaWarningBtn
            btnContent='Zamieść komunikat'
            func={postContent}
            warning='Po zamieszczeniu komunikatu, będzie on widoczny w sekcji szkoleń dla wszystkich użytkowników strony.'
          />
        </div>
        <ElementRef
          element='section'
          content={content}
          className={akademiaAdminEditorStyles.preview}
        />
      </div>
    </>
  );
};

export default AkademiaDocument;
