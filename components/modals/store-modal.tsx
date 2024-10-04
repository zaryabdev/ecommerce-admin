"use client";

import { Modal } from "@/components/ui/model";
import { useStoreModal } from "@/hooks/use-store-model";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="Create Store"
            description="Add new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    );
};
