    class CurrencyConverter {
        currencies = $state({});
        loading = $state(true);
        error: string | undefined = $state();
        initialBaseCurrency: string | undefined = undefined;
        initialTargetCurrency: string | undefined = undefined;
        initialBaseValue: number | undefined = undefined;

        #baseValue: number | undefined = $state(1);
        get baseValue() {
            return this.#baseValue;
        }
        set baseValue(v) {
            if (v && v >= 0) {
                this.#baseValue = v;
            }
            else {
                this.#baseValue = 0;
            }
            this.#targetValue = this.#calculateTarget();
        }

        #baseCurrency: string | undefined = $state('usd');
        get baseCurrency() {
            return this.#baseCurrency;
        }
        set baseCurrency(v) {
            this.#baseCurrency = v;
            this.#fetchRates();
        }

        #targetValue: number | undefined = $state(0);
        get targetValue () {
            return this.#targetValue;
        }
        set targetValue(v) {
            this.#targetValue = v;
            this.#baseValue = this.#calculateBase();
        }

        #targetCurrency: string | undefined = $state('eur');
        get targetCurrency() {
            return this.#targetCurrency;
        }
        set targetCurrency(v) {
            this.#targetCurrency = v;
            this.#targetValue = this.#calculateTarget();
        }

        #baseRates: Record<string, number> = $state({});
        get baseRates() {
            return this.#baseRates;
        }
        set baseRates(v) {
            this.#baseRates = v;
            this.#targetValue = this.#calculateTarget();
        }
        
        constructor(baseValue: number, baseCurrency: string, targetCurrency: string) {
            this.baseValue = baseValue;
            this.initialBaseValue = baseValue;
            this.baseCurrency = baseCurrency;
            this.initialBaseCurrency = baseCurrency;
            this.targetCurrency = targetCurrency;
            this.initialTargetCurrency = targetCurrency;
            this.#loadCurrencies();
            this.#fetchRates();
        }

        async #fetchRates() {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.baseCurrency}.json`);
            const resJSON = await res.json();
            this.baseRates = resJSON[this.baseCurrency];
        }

        async #loadCurrencies() {
            this.loading = true;
            this.error = undefined;
            try {
                const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json').then((r) => r.json());
                this.currencies = res;
            } catch {
                this.error = 'An error has occured.';
            }
            this.loading = false;
        }

        #calculateTarget() {
            return this.baseValue && this.baseRates[this.targetCurrency] && +(this.baseValue * this.baseRates[this.targetCurrency]).toFixed(3);
        }

        #calculateBase() {
            return this.#targetValue && this.baseRates[this.targetCurrency] && +(this.#targetValue / this.baseRates[this.targetCurrency]).toFixed(3);
        }

        get rate() {
            return this.baseRates[this.targetCurrency];
        }

        switch () {
            const base = this.baseCurrency;
            this.baseCurrency = this.targetCurrency;
            this.targetCurrency = base;
        }

        reset() {
            this.baseCurrency = this.initialBaseCurrency;
            this.targetCurrency = this.initialTargetCurrency;
            this.baseValue = this.initialBaseValue;
        }
    }

    export default CurrencyConverter;
