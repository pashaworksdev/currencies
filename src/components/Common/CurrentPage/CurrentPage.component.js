import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import CurrenciesPicker from '../CurrenciesPicker';
import SelectBlock from '../SelectBlock';
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
                        <SelectBlock additionalClassName="main">
                            <ButtonToSaveFavorite />
                            <GraphicBlockDefault />
                        </SelectBlock>
                    </div>
                )}
            />
            <Route
                path="/converter"
                render={() => (
                    <div className="main current-page__main">
                        <CurrenciesPicker />
                        <SelectBlock additionalClassName="main">
                            <Converter />
                            <GraphicBlockDefault />
                        </SelectBlock>
                    </div>
                )}
            />
            <Route path="/about" component={About} />
            <Route
                path="/favorite"
                render={() => (
                    <FavoriteBlock>
                        <SelectBlock additionalClassName="favorite">
                            <FavoriteInformation />
                            <GraphicBlockFavorite />
                        </SelectBlock>
                    </FavoriteBlock>
                )}
            />
        </Switch>
    </div>

);

export default CurrentPage;
