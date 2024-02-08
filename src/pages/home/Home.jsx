import Layout from '../../modules/layout/Layout'
import MilkSystem from '../../modules/milkSystem/MilkSystem'

/* 

это домашняя страница которая соответственно 
держит Layout и систему для учета и распределения молока

*/

function Home() {
	return (
		<>
			<Layout bgImage={'/images/milk.jpg'} />
			<MilkSystem />
		</>
	)
}

export default Home
