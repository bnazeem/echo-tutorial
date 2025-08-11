"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation } from "convex/react";

export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <p>apps/web</p>
        <Button onClick={() => addUser()}>Add</Button>
      </div>
    </div>
  );
}
