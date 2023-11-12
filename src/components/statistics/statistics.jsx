import React from "react";
import PropTypes from 'prop-types';
import css from "./Statistic.styled.module.css"

export default function statistics({ stats,}) {

    const title = "Statistics"
    
    return <div>
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
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

statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


