import React from "react";
import { ListItem } from '../List/ListItem';
import { sliderSettings, languages } from "./SliderDetails";

import Slider from 'react-slick';

export const LanguageSlider = () => {
    const languageName = languages.map((name) => {
        return (
            <ListItem
                className="list-group-item list-group-item-action list-group-item-primary"
                name={name}
            />
        )
    })
    return (
        <div id="skills">
            <Slider {...sliderSettings}>
                {languageName}
            </Slider>
        </div>
    )
}
