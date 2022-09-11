import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

const CodeBlocks = ({ code }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <CodeBlock
        text={code}
        language={'javascript'}
        theme={dracula}
        codeBlock
        wrapLines={true}
      />
    </div>
  );
};

export default CodeBlocks;
