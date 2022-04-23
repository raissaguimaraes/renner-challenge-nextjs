import styles from '../styles/addCartButton.module.css'
import Link from 'next/link'
import Image from 'next/image'

function AddCartButton({ image, name }) {    
    return (        
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} />
      <Link href={`/product/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
}
export default AddCartButton