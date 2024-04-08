'use client'

import { useWalletStore, useModalStore } from "@/lib/states"
import Button from "../Button";

export default function AddButton() {

    const wallet = useWalletStore(state => state.wallet);
    const setModal = useModalStore(state => state.setModal);

    if (!wallet) return <></>

    return (
        <Button
            custom={{ padding: "5px 40px" }}
            click={() => {
                setModal("add");
            }}
        >
            Add Carbon Emission Data
        </Button>
    )
}