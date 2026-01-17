import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: { slug?: string[] };
};

export default async function FilteredNotesPage({ params }: Props) {
  const slugValue = params.slug?.[0] ?? "all";
  const tag = slugValue === "all" ? undefined : slugValue;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, perPage: 12, tag }],
    queryFn: () => fetchNotes(1, 12, undefined, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}