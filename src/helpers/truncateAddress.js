export default function truncateAddress(address) {
    if (address.length > 30) return address.slice(0, 12) + "..." + address.slice(address.length - 12, address.length);
    return address.slice(0, Math.floor(address.length / 2)) + "...";
}