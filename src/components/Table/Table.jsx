import styles from './Table.module.css';
import PNGpencil from '../../style/img/pencil.png';
import PNGcross from '../../style/img/cross.png';
import PNGarrow from '../../style/img/Arrow.png';


export default function Table() {

    return (
        <>
            <form>
                <div className={styles.component}>
                    <div className={styles.divTable}>
                        <table className={styles.table}>
                            <thead className={styles.thead}>
                                <tr>
                                    <th rowSpan={2}>Пищ. комп.</th>
                                    <td colSpan={7}>НУТРИЕНТЫ</td>
                                </tr>
                                <tr>
                                    <td>Вес</td>
                                    <td>Ккл</td>
                                    <td>Вода</td>
                                    <td>Белок</td>
                                    <td>Жир</td>
                                    <td>НЖК</td>
                                    <td>Холестирин</td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className={styles.dateRow}>
                                    <td colSpan={8}>
                                        <span>День 1</span>
                                        <span>1.06.2021г</span>
                                    </td>
                                </tr>
                                <tr className={styles.pkRow}>
                                    <th>
                                        <img src={PNGpencil} alt='' className={styles.icon} />
                                        <span>ПК1</span>
                                        <img src={PNGcross} alt='' className={styles.icon} />
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.addRow}>
                                    <th>
                                        <img src={PNGarrow} className={styles.icon} />
                                        <span>Добавить</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.totalRow}>
                                    <th>
                                        <span>Итого:</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>

                                <tr className={styles.dateRow}>
                                    <td colSpan={8}>
                                        <span>День 1</span>
                                        <span>1.06.2021г</span>
                                    </td>
                                </tr>
                                <tr className={styles.pkRow}>
                                    <th>
                                        <img src={PNGpencil} alt='' className={styles.icon} />
                                        <span>ПК1</span>
                                        <img src={PNGcross} alt='' className={styles.icon} />
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.addRow}>
                                    <th>
                                        <img src={PNGarrow} className={styles.icon} />
                                        <span>Добавить</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.totalRow}>
                                    <th>
                                        <span>Итого:</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>

                                <tr className={styles.dateRow}>
                                    <td colSpan={8}>
                                        <span>День 1</span>
                                        <span>1.06.2021г</span>
                                    </td>
                                </tr>
                                <tr className={styles.pkRow}>
                                    <th>
                                        <img src={PNGpencil} alt='' className={styles.icon} />
                                        <span>ПК1</span>
                                        <img src={PNGcross} alt='' className={styles.icon} />
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.addRow}>
                                    <th>
                                        <img src={PNGarrow} className={styles.icon} />
                                        <span>Добавить</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.totalRow}>
                                    <th>
                                        <span>Итого:</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>

                                <tr className={styles.dateRow}>
                                    <td colSpan={8}>
                                        <span>День 1</span>
                                        <span>1.06.2021г</span>
                                    </td>
                                </tr>
                                <tr className={styles.pkRow}>
                                    <th>
                                        <img src={PNGpencil} alt='' className={styles.icon} />
                                        <span>ПК1</span>
                                        <img src={PNGcross} alt='' className={styles.icon} />
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.addRow}>
                                    <th>
                                        <img src={PNGarrow} className={styles.icon} />
                                        <span>Добавить</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>
                                <tr className={styles.totalRow}>
                                    <th>
                                        <span>Итого:</span>
                                    </th>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </>
    );
}