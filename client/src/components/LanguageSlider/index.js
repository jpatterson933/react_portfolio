import React from "react";
import './index.css';
import { ListItem } from '../List/ListItem';
import { sliderSettings, languages } from "./SliderDetails";
import Slider from 'react-slick';

export const LanguageSlider = () => {
    const languageName = languages.map((name) => {
        return (
            <ListItem
                className="list-group-item list-group-item-action list-group-item-primary"
                name={name}
                key={name}
                id="lang"
            />
        )
    })
    return (
        <div id="language-list">
            <h1 id="language-title">Known Languages</h1>
            <Slider {...sliderSettings}>
                {languageName}
            </Slider>
        </div>
    )
}
