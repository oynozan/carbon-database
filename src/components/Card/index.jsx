import truncateAddress from '@/helpers/truncateAddress';
import './card.scss';

export default function Card({
    date,
    wallet,
    emission,
    maker,
    model,
    description = ""
}) {

    let emissionCategory;

    if (emission < 100) emissionCategory = "very-low";
    else if (emission < 150) emissionCategory = "low";
    else if (emission < 250) emissionCategory = "medium";
    else if (emission < 300) emissionCategory = "high";
    else emissionCategory = "very-high";

    return (
        <div className="card">
            <p className="user">
                <span>By: </span>
                <a href={`https://explorer.arkhia.io/testnet/account/${wallet}`} target="_blank">
                    {truncateAddress(wallet)}
                </a>
            </p>
            <div>
                <h3><span>{maker}</span> {model}</h3>
                { description && <p className="desc">{description}</p> }
            </div>
            <div>
                <div className={"emission " + (emissionCategory)}>
                    Carbon Emission: <span>{emission} g/km</span>
                </div>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}