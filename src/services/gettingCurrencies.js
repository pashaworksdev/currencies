import axios from 'axios';

class GettingCurrencies {

    requestCurrencies(url) {
        return axios.get(url)
            .then(result => result.data)
            .catch((error) => console.log(`Error in request${error}`))
    }

    getUrlCurrenciesForDate(year, month, date) {
        let url = `http://www.nbrb.by/API/ExRates/Rates?onDate=${year}-${month + 1}-${date}&Periodicity=0`;
        return this.requestCurrencies(url);
    }

    getCurrenciesForDate() {
        let today = new Date();
        let currenciesToday = this.getUrlCurrenciesForDate(today.getFullYear(), today.getMonth(), today.getDate());

        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let currenciesYesterday = this.getUrlCurrenciesForDate(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

        return Promise.all([currenciesToday, currenciesYesterday])
            .then(([resultToday, resultYesterday]) => {
                let correctionResultToday = resultToday.map((item) => this.correctionObject(item));
                let correctionResultYesterday = resultYesterday.map((item) => this.correctionObject(item));

                return correctionResultToday.map((item, index) => {
                    item.Difference = item.Rate - correctionResultYesterday[index].Rate;
                    return item;
                });
            });
    }

    getUrlCurrencyForPeriod(id, startDate, endDate) {
        startDate = startDate.toISOString();
        endDate = endDate.toISOString();

        let url = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${startDate}&endDate=${endDate}`;
        return this.requestCurrencies(url);
    }

    getCurrencyForPeriod(id, startDate, endDate) {
        let Promise = this.getUrlCurrencyForPeriod(id, startDate, endDate);

        return Promise
            .then(result => {
                return result.map((item) => this.correctionObject(item));
            });
    }

    correctionObject(item) {
        let format = {
            Cur_ID: "Id",
            Cur_Abbreviation: "Abbreviation",
            Cur_Scale: "Scale",
            Cur_Name: "Name",
            Cur_OfficialRate: "Rate"
        };

        for (let key in item) {
            if (format[key]) {
                let newKey = format[key];
                item[newKey] = item[key];
                delete item[key];
            }
        }
        return item;
    }

}

export const gettingCurrencies = new GettingCurrencies();
