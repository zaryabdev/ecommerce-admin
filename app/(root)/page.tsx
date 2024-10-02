// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
"use client";
import { Modal } from "@/components/ui/model";
const SetupPage = () => {
    return (
        <div>
            <Modal isOpen title="Title" description="Dewc" onClose={() => {}}>
                Children
            </Modal>
            {/* <header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSwitchSessionUrl="/" />
                </SignedIn>
            </header>
            <Button>Click Me</Button> */}
        </div>
    );
};

export default SetupPage;
