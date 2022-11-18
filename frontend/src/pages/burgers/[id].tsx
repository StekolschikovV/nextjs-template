import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import {IBurger} from "./type";

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:5000/items')
      .then( data => {
        return data.json()
      })
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
  const data = await fetch(`http://localhost:1337/api/burgers/${id}?populate=*`)
      .then( data => data.json())
      .catch(() => []);
  const burger: IBurger = data.data

  burger.attributes.image.data.attributes.url =  `http://localhost:1337${burger.attributes.image.data.attributes.url}`
  return {
    props: { burger }
  }
}

const Details: React.FC<{burger: IBurger}>  = ({ burger }) => {
  return (
       burger && <div className={styles.singleBurger}>
      <h1>{ burger.attributes.name }</h1>
        <div className={styles.imageContainer}>
          <Image
            src={`${burger.attributes.image.data.attributes.url}`}
            alt={`img`}
            width="100"
            height="100"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <p>{ burger.attributes.desc }</p>
      </div>
    </div>
  );
}

export default Details;
