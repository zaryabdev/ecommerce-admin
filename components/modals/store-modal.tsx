"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Modal } from "@/components/ui/model";
import { useStoreModal } from "@/hooks/use-store-model";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post("/api/stores", values);
            console.log(response.data);

            window.location.assign(`/${response.data.id}`);

            // toast.success("Store created.");
        } catch (error) {
            toast.error("Something went wrong.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Create Store"
            description="Add new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E commerce"
                                                disabled={loading}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button
                                    disabled={loading}
                                    variant="outline"
                                    onClick={storeModal.onClose}
                                >
                                    Cancel
                                </Button>
                                <Button disabled={loading} type="submit">
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};
