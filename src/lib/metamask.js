import { BrowserProvider } from "ethers";
import { networks } from "@/config/networks";

export default class MetamaskConnect {
    constructor() {
        this.ethereum = window["ethereum"];
        this.networkConfig = networks.testnet;
    }

    getProvider(ethereum) {
        if (!ethereum)
            throw new Error("Metamask is not installed");
        return new BrowserProvider(ethereum);
    };

    async switchToHederaNetwork(ethereum) {
        try {
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: this.networkConfig.chainId }],
            });
            return;
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainName: `Hedera (${this.networkConfig.network})`,
                                chainId: this.networkConfig.chainId,
                                nativeCurrency: {
                                    name: "HBAR",
                                    symbol: "HBAR",
                                    decimals: 18,
                                },
                                rpcUrls: [this.networkConfig.jsonRpcUrl],
                            },
                        ],
                    });
                    return;
                } catch (addError) {
                    throw addError;
                }
            }
            else throw error;
        }
    };

    connectToMetamask() {
        return new Promise(async (resolve, reject) => {
            const provider = this.getProvider(this.ethereum);
            let accounts = [];

            try {
                await this.switchToHederaNetwork(this.ethereum);
                accounts = provider.send("eth_requestAccounts", []);
            } catch (error) {
                console.error(error);
                if (error.code === 4001) return reject("Please connect to Metamask.");
                else return reject();
            }

            return resolve(accounts);
        })
    };
}