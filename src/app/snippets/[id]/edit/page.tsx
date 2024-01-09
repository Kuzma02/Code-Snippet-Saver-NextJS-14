import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snipper.findFirst({
    where: { id },
  });

  if(!snippet){
    notFound();
  }

  return <div>
    <SnippetEditForm snippet={snippet} />
    </div>;
}
