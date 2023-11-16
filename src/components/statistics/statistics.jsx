import React from "react";
import PropTypes from 'prop-types';
import css from "./Statistic.module.css"

export default function Statistics({ stats, title }) {


    return <div>
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {/* <h2 className={css.title}>{title}</h2> */}
            <ul className={css.statList}>
                {stats.map(el => (
                    <item className={css.item} key={el.id}>
                        <label className={css.label}>{el.label}</label>
                        <percentage className={css.percentage}>{el.percentage}</percentage>
                    </item>
                ))}
            </ul>

        </section>
    </div>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
};


