"use client";

// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useStoreModal } from "@/hooks/use-store-model";
import { useEffect } from "react";

const SetupPage = () => {
    const isOpen = useStoreModal((state) => state.isOpen);
    const onOpen = useStoreModal((state) => state.onOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return null;
};

{
    /*
    <header>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
        </SignedIn>
    </header> */
}

export default SetupPage;
