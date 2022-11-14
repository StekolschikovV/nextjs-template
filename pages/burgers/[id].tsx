import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import {IBurger} from "../burgers/index";

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  const paths = data.map((burger: { id: any; }) => {
    return {
      params: { id: burger.id }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps= async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data }
  }
}

const Details: React.FC<{burger: IBurger}>  = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{ burger.name }</h1>
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
          <p>{ burger.desc }</p>
      </div>
    </div>
  );
}

export default Details;
