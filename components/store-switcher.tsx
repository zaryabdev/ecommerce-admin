"use client";

import { Check, ChevronsUpDown, Store as StoreIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-model";
import { cn } from "@/lib/utils";
import { Store } from "@prisma/client";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
    typeof PopoverTrigger
>;

interface StroreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StroreSwitcherProps) => {
    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        value: item.id,
        lable: item.name,
    }));

    const currentStore = formattedItems.find(
        (item) => item.value == params.storeId
    );

    const [open, setOpen] = useState(false);

    const onStoreSelect = (store: { value: string; lable: string }) => {
        setOpen(false);
        router.push(`/${store.value}`);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size={"sm"}
                    aria-expanded={open}
                    role="combobox"
                    aria-label="Select a Store"
                    className={cn("w-[200px] justify-between", className)}
                >
                    <StoreIcon className="mr-2 h-4 w-4" />
                    Current Store
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Search Store..." />
                        <CommandEmpty>No store found.</CommandEmpty>
                        <CommandGroup heading="Stores">
                            {formattedItems.map((store) => {
                                return (
                                    <CommandItem
                                        key={store.value}
                                        onSelect={() => onStoreSelect(store)}
                                        className="text-sm"
                                    >
                                        <StoreIcon className="w-4 h-4 mr-2" />
                                        {store.lable}
                                        <Check
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                store.value ==
                                                    currentStore?.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export { StoreSwitcher };
