import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const userName = useSelector((state: any) => state.user.value.userName);
    return (
        <div>
            <h1>{userName != "" && <span>{userName}'s</span>}Homepage</h1>
        </div>
    )
}