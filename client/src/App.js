import axios from 'axios';
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient({});

function TestComp() {
	const getData = async () => {
		const data = await axios.get('http://localhost:8080');

		console.log(data);

		return data;
	};

	const {isLoading, isError, data, error, refetch} = useQuery({ queryKey: ['key'], queryFn: getData })

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<h1>{data.data}</h1>
			<button onClick={refetch}>Refetch</button>
		</>
	);
}


function App() {

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<header className="App-header">
					<TestComp />
				</header>
			</div>
		</QueryClientProvider>
	);
}

export default App;
