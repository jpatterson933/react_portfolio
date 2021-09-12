import React from "react";
import { ListItem } from '../List/ListItem';
import { sliderSettings } from "./SliderSettings";
import Slider from 'react-slick';

export const LanguageSlider = () => {
        return (
            <Slider {...sliderSettings}>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Known Languages" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="HTML" />

                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="CSS" />
                </div>
                <div>

                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Javascript" />
                </div>
                <div>

                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Jquery" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Bootstrap" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Node.js" />
                </div>
                <div>

                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Sequelize" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="MySQL" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="GraphQL" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Apollo" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Mongoose" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="Handlebars" />
                </div>
                <div>

                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="EJS" />
                </div>
                <div>
                    <ListItem
                        className="list-group-item list-group-item-action list-group-item-primary"
                        name="React" />
                </div>
            </Slider>

        )
    }
