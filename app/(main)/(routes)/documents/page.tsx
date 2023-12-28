"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const route = useRouter();
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      route.push(`/documents/${documentId}`)
    );
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note Created",
      error: "Failed to create a new note.",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className=" dark:hidden"
        alt="Empty"
        height="300"
        width="300"
        src="/empty.png"
      />
      <Image
        className=" dark:block hidden"
        alt="Empty"
        height="300"
        width="300"
        src="/empty-dark.png"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentPage;
