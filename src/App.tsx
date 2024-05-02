import './App.css';
import UserList from './ui-common/molecules/UserList/UserList';
import SideHeader from './ui-common/molecules/SideHeader/SideHeader';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className='side-header-wrapper'>
      <div><SideHeader /></div>
      <div className='main-body'><UserList /><UserList /><UserList /><UserList /><UserList /><UserList /><UserList /><UserList /><UserList /></div>
      </div>
    </QueryClientProvider>
  )
}

export default App
