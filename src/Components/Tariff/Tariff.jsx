
import st from './Tariff.module.scss';

export default function Tariff({title, speed, price, volume, className, onClick, isActive}) {
   
    return (
        <div className={`${st.tariff} `} onClick={onClick}> 
    
                <div className={st[className]}>
                    <p className={`${st['tariff-title']} ${isActive ? st.active: ''}`}>{title}</p> 
                    <div className={st['tariff-price']}>
                        <p>{price}</p>
                    </div>
                    <p className={st["tariff-speed"]}>{speed}</p>
                    <p className={st["tariff-volume"]}>{volume}</p>
                </div>
               
        </div>
        
    );
}

// export default function Tariff() {
//     const [tariff, setTariff] = useState([]);
//     const [tariffIndex, setTariffIndex] = useState(0);

// const handleNext = () => {
//     setTariffIndex((tariffIndex + 1) % tariff.length);
//   };

//   const handlePrevious = () => {
//     setTariffIndex((tariffIndex - 1 + tariff.length) % tariff.length);
//   };

//   if (tariff.length === 0) return <div>Загрузка...</div>;

//   const currentTariff = tariff[tariffIndex];

//   return (
//     <main>
//       <div className={styles.cardNext}>
//         <button onClick={handlePrevious}>Предыдущий</button>
//         <section className={styles.cardList} onClick={handleNext}>
//           <Card key={currentTariff.id} color={currentTariff.color} tariff={currentTariff.tariff} speed={currentTariff.speed} />
//         </section>
//         <button onClick={handleNext}>Следующий</button>
//       </div>
//     </main>
//   );
// }