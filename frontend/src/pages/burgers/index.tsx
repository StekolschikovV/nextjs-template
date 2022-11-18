import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';

export interface IBurger {
  id: number
  image: string
  name: string
  desc: string
}

export const getStaticProps = async (): Promise<{
  props: { burgers: IBurger }
}> => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}

const Burgers: React.FC<{burgers: IBurger[]}> = ({ burgers }) => {
  return (
    <div>
      <h1>Наши Бургеры</h1>
      {burgers.map(burger => (
        <Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width="100"
                height="100"
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
        </Link>
      ))}
    </div>
  );
}
 
export default Burgers;
