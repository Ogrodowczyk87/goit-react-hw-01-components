import React from "react";
import PropTypes from 'prop-types';


export default function statistics({ stats }) {
    return <div>
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
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


