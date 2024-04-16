"use client";

interface ErrorPageProps {
  error: Error; //etate kisu information thakbe exactly kon error ta ase.
  reset: () => void; //ta ekta function jeta allow kore automatically refresh korte ekta route ke. Jemon ekta button rakhlam, user oi button click korle ei reset function ta call hoye jabe
}
export default function ErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
