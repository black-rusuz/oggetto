import './styles.scss';
import {memo, useState} from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

function TaskWithCode() {
  const [exampleCode, setExampleCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [code, setCode] = useState('');

  return (
    <div className="task-with-code">
      <CodeEditor
        value={exampleCode}
        language="js"
        placeholder="Здесь был код для примера"
        onChange={(evn) => setExampleCode(evn.target.value)}
        padding={25}
        style={{
          fontSize: 14,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          marginBottom: '26px',
        }}
      />

      <CodeEditor
        value={code}
        language="js"
        placeholder="Пожалуйста, введите ваш код"
        onChange={(evn) => setCode(evn.target.value)}
        padding={25}
        style={{
          fontSize: 14,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  )
}

export default memo(TaskWithCode);