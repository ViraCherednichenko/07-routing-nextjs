"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const { isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    enabled: Boolean(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Something went wrong.</p>;

  // NoteDetailsClient сам дістане note з кешу (бо queryKey той самий)
  return <NoteDetailsClient id={id} />;
}