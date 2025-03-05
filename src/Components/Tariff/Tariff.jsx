
import st from './Tariff.module.scss';

export default function Tariff({title, speed, price, volume, className}) {
    return (
        <div className={st.tariff}>
                <div className={st[className]}>
                    <p className={st['tariff-title']}>{title}</p> 
                    <div className={st['tariff-price']}>
                        <p>{price}</p>
                    </div>
                    <p className={st["tariff-speed"]}>{speed}</p>
                    <p className={st["tariff-volume"]}>{volume}</p>
                </div>
        </div>
    );
}


