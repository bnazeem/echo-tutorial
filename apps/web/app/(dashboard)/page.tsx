"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <p>apps/web</p>
        <Button onClick={() => addUser()}>Add</Button>
        <div className="max-w-sm w-full mx-auto ">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
    // <>
    //   <Authenticated>
    //     <div className="flex flex-col items-center justify-center min-h-svh">
    //       <div className="flex flex-col items-center justify-center gap-4">
    //         <UserButton />
    //         <p>apps/web</p>
    //         <Button onClick={() => addUser()}>Add</Button>
    //         <div className="max-w-sm w-full mx-auto ">
    //           {JSON.stringify(users, null, 2)}
    //         </div>
    //       </div>
    //     </div>
    //   </Authenticated>
    //   <Unauthenticated>
    //     <p>Must be signed in!</p>
    //     <SignInButton>Sign in</SignInButton>
    //   </Unauthenticated>
    // </>
  );
}
