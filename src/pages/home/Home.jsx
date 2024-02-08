import Layout from '../../modules/layout/Layout'
import MilkSystem from '../../modules/milkSystem/MilkSystem'

function Home() {
	return (
		<>
			<Layout bgImage={'/images/milk.jpg'} />
			<MilkSystem />
		</>
	)
}

export default Home
