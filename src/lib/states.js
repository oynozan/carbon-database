import { create } from 'zustand'

// Modal State
export const useModalStore = create(set => ({
    modal: "", // Modal Key
    options: {},
    setModal: (type, options = {}) => set(() => ({
        modal: type,
        options: options
    })),
}))

// Wallet State
export const useWalletStore = create((set) => ({
    wallet: null,
    setWallet: (state) => set(() => ({ wallet: state })),
}))