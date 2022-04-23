import AddCartButton from "../../components/addCartButton"
import styles from '../../styles/Home.module.css'


function Home() {
    return( 
        <main className={styles.container}>
        <div className={styles.small}>
          <AddCartButton image="https://img.lojasrenner.com.br/item/565759305/zoom/1.jpg" name="BERMUDA CINTURA MÉDIA" />
          <AddCartButton image="https://img.lojasrenner.com.br/item/601231031/zoom/1.jpg" name="BLUSA REGATA CROPPED" />
          <AddCartButton image="https://img.lojasrenner.com.br/item/597003828/zoom/1.jpg" name="JAQUETA PESADA COM CAPUZ" />
        </div>
        <div className={styles.large}>
          <AddCartButton image="https://img.lojasrenner.com.br/item/616836711/zoom/1.jpg" name="BODY ALGODAO ESTAMPA" />
          <AddCartButton image="https://img.lojasrenner.com.br/item/552422527/zoom/1.jpg" name="REGATA MULTICORES"
          />
        </div>
      </main>
        )
  }
  
export default Home