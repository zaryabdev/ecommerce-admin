"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Separator } from "@radix-ui/react-separator";
import { Trash } from "lucide-react";

interface SettingsFormProps {
    initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title="Settings"
                    description="Manage store prefrence"
                />
                <Button
                    variant={"destructive"}
                    size={"icon"}
                    onClick={() => {}}
                >
                    <Trash className="h-4 w-4" />
                </Button>
                <Separator />
            </div>
        </>
    );
};

export { SettingsForm };
