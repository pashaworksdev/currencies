import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import CurrenciesPicker from '../CurrenciesPicker';
import SelectBlockDefault, { SelectBlockFavorite } from '../SelectBlock';
import ButtonToSaveFavorite from '../../PageCurrencies/ButtonToSaveFavorite';
import GraphicBlockDefault, { GraphicBlockFavorite } from '../GraphicBlock';
import Converter from '../../PageConverter/Converter';
import About from '../../PageAbout/About';
import FavoriteBlock from '../../PageFavorite/FavoriteBlock';
import FavoriteInformation from '../../PageFavorite/FavoriteInformation';

import './CurrentPage.styles.scss';

const CurrentPage = () => (

    <div className="current-page">
        <Header />
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <div className="main current-page__main">
                        <CurrenciesPicker />
                        <SelectBlockDefault additionalClassName="main">
                            <ButtonToSaveFavorite />
                            <GraphicBlockDefault />
                        </SelectBlockDefault>
                    </div>
                )}
            />
            <Route
                path="/converter"
                render={() => (
                    <div className="main current-page__main">
                        <CurrenciesPicker />
                        <SelectBlockDefault additionalClassName="main">
                            <Converter />
                            <GraphicBlockDefault />
                        </SelectBlockDefault>
                    </div>
                )}
            />
            <Route path="/about" component={About} />
            <Route
                path="/favorite"
                render={() => (
                    <FavoriteBlock>
                        <SelectBlockFavorite additionalClassName="favorite">
                            <FavoriteInformation />
                            <GraphicBlockFavorite />
                        </SelectBlockFavorite>
                    </FavoriteBlock>
                )}
            />
        </Switch>
    </div>

);

export default CurrentPage;
