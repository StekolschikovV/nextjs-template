import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import {IBurger} from "../burgers/index";

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:5000/items')
      .then( data => data.json())
      .catch(() => []);


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
  const data = await fetch(`http://localhost:5000/items/${id}`)
      .then( data => data.json())
      .catch(() => []);

  return {
    props: { burger: data }
  }
}

const Details: React.FC<{burger: IBurger}>  = ({ burger }) => {
  return (
       burger && <div className={styles.singleBurger}>
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
