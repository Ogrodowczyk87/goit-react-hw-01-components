import React from "react";
// import PropTypes from 'prop-types';


export default function statistics({ stats, title }) {
    return <div>
        <section class="statistics">
            <h2 class="title">{title}</h2>
            <statList>
                {stats.map(el => (
                    <item key={el.id}>
                        <label>{el.label}</label>
                        <percentage>{el.percentage}</percentage>
                    </item>
                ))}
            </statList>

        </section>
    </div>;
}


