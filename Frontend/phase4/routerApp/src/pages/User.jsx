import { useParams } from 'react-router-dom';

const User=()=> {
  const { id } = useParams();
  return <h2>👤 Viewing Profile of User ID: {id}</h2>;
}
export default User;
