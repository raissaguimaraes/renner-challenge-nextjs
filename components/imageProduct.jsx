import styles from '../styles/addCartButton.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ImageProduct = ({ product }) => {
    return(
    <div className={styles.card}>
      <Image className={styles.image} src={product.image} height={700} width={1300} />
      <Link href={`/product/${product.code}`}>
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
    )
}

export default ImageProduct;