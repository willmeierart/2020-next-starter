import { useQuery } from '@apollo/react-hooks'
import HOME_QUERY from 'lib/queries/home.query';
import PageHead from 'layout/PageHead'

const Home = () => {
	const { data } = useQuery(HOME_QUERY);
	return (
		<div>
			<PageHead metadata={data?.pageMetadata} />
		</div>
	)
}

export default Home
