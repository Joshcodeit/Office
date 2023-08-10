import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  perPage: 5
};

export const simSlice = createSlice({
  name: "sim-deals",
  initialState,
  reducers: {
    addDeals: (state, { payload }) => {
      state.data = payload;
      state.filteredData = payload;
    },

    filterData: (state, { payload }) => {
      const {
        activeProviders,
        value,
        activeMonthlyCost,
        data,
        minutes,
        contractLength,
        show5GDeals,
        sms,
      } = payload;

      const [minPrice, maxPrice] = value;

      state.filteredData = state.data.filter(deal => {
        /**
         * filter the original sim data based on the filters selected
         * and store the filtered data in new arr;
         * 
         * we have multiple flags -- see return value at end;
         * 
         * all these flags must be true in order for a deal 
         * to be kept in the filtered array;
         * 
         * flags are evaluated based on the filters selected.
         */

        const { device, price, period } = deal;
        const { manufacturer } = device;
        const { data: dealData, talktime, sms: dealSms } = deal.package;

        let matchAnyProvider = true;

        if (activeProviders.length) {
          matchAnyProvider = activeProviders.some(
            provider => provider.toLowerCase() === manufacturer.toLowerCase()
          );
        }

        const matchPriceRange = price >= minPrice && price <= maxPrice;

        const matchMonthlyCost = !activeMonthlyCost || price <= activeMonthlyCost;


        // if no data filter selected the flag must be true to pass the current item
        // thats why true at end;
        const matchData = data ?
          (data === "unlimited" ? dealData === "unlimited" : dealData === Number(data))
          : true;



        let matchTalktime = true;

        if (minutes === 0 || minutes >= 1) {
          matchTalktime = talktime === minutes
        } else if (minutes && minutes === "unlimited") {
          matchTalktime = talktime === "unlimited";
        }

        let matchContractLength = true;
        if (contractLength === 0 || contractLength >= 1) {
          matchContractLength = period === contractLength
        }


        // only  vodacom and mtn deals are 5G as of writing this
        const match5G = show5GDeals
          ? manufacturer.toLowerCase() === "vodacom" ||
          manufacturer.toLowerCase() === "mtn" ||
          manufacturer.toLowerCase() === "rain"
          : true;

        let matchSms = true;
        if (sms) {
          matchSms = sms === dealSms;
        } else if (sms === 0) {
          matchSms = dealSms === 0
        }

        return (
          matchPriceRange &&
          matchAnyProvider &&
          matchData &&
          matchTalktime &&
          matchContractLength &&
          match5G &&
          matchMonthlyCost &&
          matchSms
        );
      });

      // reset the current page

      state.currentPage = 1;
    },

    incrementCurrentPage: (state, action) => {
      // check if we can increment page and increment it

      if (state.perPage * state.currentPage < state.filteredData.length) {
        state.currentPage += 1
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { addDeals, filterData, incrementCurrentPage } = simSlice.actions;

export default simSlice.reducer;
