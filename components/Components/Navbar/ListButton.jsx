
import { Connexion } from '../Connexion/Connexion';
import { Creation } from '../Connexion/Creation';


const ListButton = () => {
  return (
    <div className='flex gap-2'>
      <Creation/>
      <Connexion/>
    </div>
  );
};

export default ListButton;