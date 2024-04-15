"use client";

import type { Snippet } from "@prisma/client";

interface SnippetEditFormPage {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormPage) {
  return <div>Client component has snippet with title {snippet.title}</div>;
}
