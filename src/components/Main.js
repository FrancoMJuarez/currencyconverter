import React, { useEffect, useState } from "react";
import {
  ButtonDiv,
  CurrencyWrapper,
  FormContainer,
  ImageBackground,
  InputDiv,
  MainContainer,
  ResultContainer,
  SelectContainer,
  SelectDiv,
  SwapDiv,
} from "./MainElements";
import axios from "axios";
import { IoSwapHorizontal } from "react-icons/io5";

const Main = () => {
  const [currencies, setCurrencies] = useState([]);
  const [originalCurrency, setOriginalCurrency] = useState({
    name: "USD",
    fullName: "United States Dollar",
    amount: 1,
  });
  const [finalCurrency, setFinalCurrency] = useState({
    name: "ARS",
    fullName: "Argentine Peso",
  });
  const [exchangeRate, setExchangeRate] = useState(144.0571);
  const [isActive, setIsActive] = useState(false);

  //Loading list of avaible Currencies
  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/f90aed2299ba5d4819552841/codes`)
      .then((response) => {
        const currenciesList = response.data.supported_codes;
        setCurrencies(currenciesList);
      });
  }, []);

  //Changing the name of the original currency
  useEffect(() => {
    currencies.map((currency) => {
      if (currency[0] == originalCurrency.name) {
        setOriginalCurrency((prevState) => ({
          ...prevState,
          fullName: currency[1],
        }));
      }
    });
  }, [originalCurrency.name]);

  //Changing the name of the final currency
  useEffect(() => {
    currencies.map((currency) => {
      if (currency[0] == finalCurrency.name) {
        setFinalCurrency((prevState) => ({
          ...prevState,
          fullName: currency[1],
        }));
      }
    });
  }, [finalCurrency.name]);

  //Changing the exchange rate
  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/f90aed2299ba5d4819552841/pair/${originalCurrency.name}/${finalCurrency.name}`
      )
      .then((response) => {
        setExchangeRate(response.data.conversion_rate);
      });
  }, [originalCurrency.name, finalCurrency.name]);

  //Changing the currencies
  const changeCurrency = (currency, typeCurrency) => {
    if (typeCurrency == "original") {
      setOriginalCurrency((prevState) => ({ ...prevState, name: currency }));
    } else {
      setFinalCurrency((prevState) => ({ ...prevState, name: currency }));
    }
  };

  //Changing the amount
  const changeAmount = (e) => {
    setOriginalCurrency((prevState) => ({ ...prevState, amount: e }));
  };

  //Swap Currencies
  const swapCurrencies = () => {
    const temporalCurrency = {
      name: originalCurrency.name,
      fullName: originalCurrency.fullName,
    };
    setOriginalCurrency((prevState) => ({
      ...prevState,
      name: finalCurrency.name,
      fullName: finalCurrency.fullName,
    }));
    setFinalCurrency((prevState) => ({
      ...prevState,
      name: temporalCurrency.name,
      fullName: temporalCurrency.fullName,
    }));
  };

  return (
    <MainContainer>
      <ImageBackground />
      <h1>{`Convert ${originalCurrency.amount} ${originalCurrency.fullName} to ${finalCurrency.fullName}`}</h1>
      <h2>Currency Converter</h2>
      <CurrencyWrapper>
        <FormContainer>
          <InputDiv>
            <p>Import</p>
            <input
              type="number"
              onChange={(e) => changeAmount(e.target.value)}
            ></input>
          </InputDiv>
          <SelectDiv>
            <p>From</p>
            <SelectContainer>
              <select
                value={originalCurrency.name}
                onChange={(e) => {
                  changeCurrency(e.target.value, "original");
                }}
              >
                {currencies.map((currency) => (
                  <option value={currency[0]} key={currency[0]}>
                    {currency[0]}
                  </option>
                ))}
              </select>
            </SelectContainer>
          </SelectDiv>
          <SwapDiv>
            <div onClick={() => swapCurrencies()}>
              <IoSwapHorizontal />
            </div>
          </SwapDiv>
          <SelectDiv>
            <p>To</p>
            <SelectContainer>
              <select
                value={finalCurrency.name}
                onChange={(e) => {
                  changeCurrency(e.target.value, "final");
                }}
              >
                {currencies.map((currency) => (
                  <option value={currency[0]} key={currency[0]}>
                    {currency[0]}
                  </option>
                ))}
              </select>
            </SelectContainer>
          </SelectDiv>
        </FormContainer>
        <ResultContainer isActive={isActive}>
          <p>{`${originalCurrency.amount} ${originalCurrency.fullName} =`}</p>
          <h2>{`${originalCurrency.amount * exchangeRate} ${
            finalCurrency.fullName
          }`}</h2>
          <h6>{`1 ${originalCurrency.name} = ${1 * exchangeRate} ${
            finalCurrency.name
          }`}</h6>
          <h6>{`1 ${finalCurrency.name} = ${1 / exchangeRate} ${
            originalCurrency.name
          }`}</h6>
        </ResultContainer>
        <ButtonDiv>
          <button onClick={() => setIsActive(true)}>Convert</button>
        </ButtonDiv>
      </CurrencyWrapper>
    </MainContainer>
  );
};

export default Main;
