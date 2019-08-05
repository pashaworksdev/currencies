import axios from 'axios';
import moment from 'moment';

class GettingCurrencies {

    correctCurrency(currency) {
        const format = {
            Cur_ID: 'id',
            Cur_Abbreviation: 'abbreviation',
            Cur_Scale: 'scale',
            Cur_Name: 'name',
            Cur_OfficialRate: 'rate',
            Date: 'date',
        };

        const changedItems = Object.keys(currency).map(key => {
            const newKey = format[key] || key;
            return { [newKey]: currency[key] };
        });
        return changedItems.reduce((previousValue, currentValue) =>
            Object.assign({}, previousValue, currentValue));
    }

    requestCurrencies(url) {
        return axios.get(url)
            .then(result => result.data)
            .catch(error => console.log(`Error in request${error}`));
    }

    getUrlStorageOfCurrencies(year, month, date) {
        const url = `http://www.nbrb.by/API/ExRates/Rates?onDate=${year}-${month + 1}-${date}&Periodicity=0`;
        return this.requestCurrencies(url);
    }

    getStorageOfCurrencies() {
        const today = moment();
        const currenciesToday = this.getUrlStorageOfCurrencies(today.year(), today.month(), today.date());

        const yesterday = moment().add(-1, 'days');
        const currenciesYesterday = this.getUrlStorageOfCurrencies(yesterday.year(), yesterday.month(), yesterday.date());

        return Promise.all([currenciesToday, currenciesYesterday])
            .then(([resultToday, resultYesterday]) => {
                const correctionResultToday = resultToday.map(currency => this.correctCurrency(currency));
                const correctionResultYesterday = resultYesterday.map(currency => this.correctCurrency(currency));

                return correctionResultToday.map((currency, index) => {
                    currency.difference = currency.rate - correctionResultYesterday[index].rate;
                    return currency;
                });
            });
    }

    getUrlChangesCurrencyForPeriod(id, startDate, endDate) {
        const url = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
        return this.requestCurrencies(url);
    }

    getChangesCurrencyForPeriod(id, startDate, endDate) {
        const Promise = this.getUrlChangesCurrencyForPeriod(id, startDate, endDate);
        return Promise
            .then(result => result.map(currency => this.correctCurrency(currency)));
    }

}

const gettingCurrencies = new GettingCurrencies();

export default gettingCurrencies;
