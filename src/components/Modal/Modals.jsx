/**
 * This component handles different types of modals
 */

'use client'

import { useModalStore } from "@/lib/states"
import Add from "../Add";
import Modal from ".";

export default function Modals() {

    const selectedModal = useModalStore(state => state.modal);
    const setModal = useModalStore(state => state.setModal);

    if (!selectedModal) return <></>

    return (
        <Modal set={setModal}>
            {/* Add Modals */}
            { selectedModal === "add" && (
                <Add set={setModal} />
            )}
        </Modal>
    )
}