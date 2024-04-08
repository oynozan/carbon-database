'use client'

import Image from 'next/image';
import Button from '../Button';
import { toast } from 'react-hot-toast';
import MetamaskConnect from '@/lib/metamask';
import { useWalletStore } from '@/lib/states';
import truncateAddress from '@/helpers/truncateAddress';

import './header.scss';

export default function Header() {

    const wallet = useWalletStore(state => state.wallet);
    const setWallet = useWalletStore(state => state.setWallet);

    function connect() {
        const metamask = new MetamaskConnect();

        metamask.connectToMetamask()
            .then(response => {
                if (response.length >= 1) setWallet(response[0]);
                else {
                    toast.error("Wallet cannot be connected");
                    return;
                }
                toast.success("Wallet is successfully connected");
            })
            .catch(error => {
                if (error) toast.error(error);
            });
    }

    return (
        <header>
            <div className="logo">
                <Image
                    src="/logo.png"
                    alt="Carbon Database Logo"
                    height={90}
                    width={500}
                    className="desktop"
                />
                <Image
                    src="/favicon.svg"
                    alt="Carbon Database Logo"
                    height={90}
                    width={500}
                    className="mobile"
                />
            </div>
            <div className="links">
                { wallet ? (
                    <p className="wallet">{truncateAddress(wallet)}</p>
                ) : (
                    <Button
                        type="main"
                        click={connect}
                    >
                        Connect MetaMask
                    </Button>
                )}
            </div>
        </header>
    )
}