"use client";

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";
// import { editSnippet } from "@/actions";

interface SnippetEditFormPage {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormPage) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code); // amra bind call kortesi editSnippetAction er ekta preloaded version bananor jonno.
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        //options={{ minimap: { enabled: false } }} //ekhane aro kisu chaile amra additional design feature dite pari. Eta minimap shorabe.
        onChange={handleEditorChange}
      ></Editor>
      <form action={editSnippetAction}>
        <button className="p-2 border rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
