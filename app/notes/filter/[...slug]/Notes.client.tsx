"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", { page: 1, perPage: 12, tag }],
    queryFn: () => fetchNotes(1, 12, undefined, tag),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !data) return <p>Something went wrong.</p>;

  return <NoteList notes={data.notes} />;
}