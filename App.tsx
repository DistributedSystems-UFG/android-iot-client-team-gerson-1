import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from "./src/Routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
  <NavigationContainer>
    <Routes/>
  </NavigationContainer>
  </QueryClientProvider>
  
);

export default App;

