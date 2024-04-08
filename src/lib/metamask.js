import { networks } from "@/config/networks";

export default class MetamaskConnect {
    constructor(set) {
        this.ethereum = window["ethereum"];
        this.networkConfig = networks.testnet;

        this.ethereum.request({ method: 'eth_accounts' })
            .then(resp => {
                if (resp?.length >= 1 && set) set(resp[0])
            })
            .catch(() => {});

        this.ethereum.on('accountsChanged', accounts => {
            if (accounts?.length >= 1 && set) set(accounts[0])
        });
    }

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
            let accounts = [];

            try {
                await this.switchToHederaNetwork(this.ethereum);
                accounts = await this.ethereum.request({ method: "eth_requestAccounts" });
            } catch (error) {
                console.error(error);
                if (error.code === 4001) return reject("Please connect to Metamask.");
                else return reject();
            }

            return resolve(accounts);
        })
    };
}