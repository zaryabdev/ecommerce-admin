import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
        <div>
            <header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSwitchSessionUrl="/" />
                </SignedIn>
            </header>
            <Button>Click Me</Button>
        </div>
    );
};

export default SetupPage;
