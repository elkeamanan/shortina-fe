import { getRedirection } from "@/actions";
import { notFound, redirect } from "next/navigation";

interface RedirectionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RedirectionPage(props: RedirectionPageProps) {
  const { id } = await props.params;

  if (!id || id == "") {
    redirect("/");
  }
  const redirectionUrl = await getRedirection(id);

  if (!redirectionUrl) {
    return notFound();
  }

  redirect(redirectionUrl);
}
