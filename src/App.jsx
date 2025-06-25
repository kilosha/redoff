import './App.css';
import ShoppingCart from './components/ShoppingCart';
import TasksList from './components/TasksList';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <>
            <UserProfile />
            <TasksList />
            <ShoppingCart />
        </>
    );
}

export default App;
