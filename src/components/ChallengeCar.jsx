import styles from './ChallengeCar.module.css';

const ChallengeCar = ({marca, km, cor}) => {
    return (
      <div>
          <h3>Detalhes do Carro:</h3>
          <ul>
              <li className={styles.my_car}>Marca: {marca}</li>
              <li className={styles.my_car}>Quilometragem: {km}</li>
              <li className={styles.my_car}>Cor: {cor}</li>
          </ul>
     </div>
    );
  };
  
  export default ChallengeCar;