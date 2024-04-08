'use server'

import get from "@/actions/get";
import AddButton from "@/components/Add/Button";
import Card from "@/components/Card";

import '../assets/home.scss';

export default async function Home() {

	let data = [];
	try { data = (await get()).data }
	catch(e) { data = [] }

	return (
		<main>
			<div className="top">
				<p>There are total of <b>{data.length}</b> carbon emission entry ✨</p>
				<AddButton />
			</div>

			<div className="list">
				{data.map((car, i) => {
					return (
						<Card
							key={i}
							date={new Date(car.date).toLocaleDateString()}
							wallet={car.user}
							emission={car.emission}
							maker={car.maker}
							model={car.model}
							description={car.desc}
						/>
					)
				})}
			</div>

			<nav>

			</nav>
		</main>
	)
}
