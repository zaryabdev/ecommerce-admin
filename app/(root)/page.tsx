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

    return (
        <div className="p-4">
            Root Page
            {/* <Modal isOpen title="Title" description="Dewc" onClose={() => {}}>
                Children
            </Modal> */}
            {/* <header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSwitchSessionUrl="/" />
                </SignedIn>
            </header> */}
        </div>
    );
};

export default SetupPage;
