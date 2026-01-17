import ModalRouteWrapper from "@/components/ModalRouteWrapper/ModalRouteWrapper";
import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  return (
    <ModalRouteWrapper>
      <NotePreviewClient id={id} />
    </ModalRouteWrapper>
  );
}