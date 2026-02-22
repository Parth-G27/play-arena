"use client";
import React, { useEffect, useState } from "react";
import { CurrencyBox } from "@/components/CurrencyBox";
// MY API Key: e368740d488acb18060b9301
// Request: https://v6.exchangerate-api.com/v6/e368740d488acb18060b9301/latest/USD

export default function CurrencyConverter() {
  const BASE_URL =
    "https://v6.exchangerate-api.com/v6/e368740d488acb18060b9301/";

  const [CurrencyData, setCurrencyData] = useState<Record<
    string,
    number
  > | null>(null);
  const [conversionRate, setconversionRate] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  // currency
  const [fromCurr, setfromCurr] = useState<string | null>(null);
  const [toCurr, settoCurr] = useState<string | null>(null);
  const [fromAmount, setfromAmount] = useState<number | null>(null);
  const [toAmount, settoAmount] = useState<number | null>(null);

  useEffect(() => {
    fetchRates();
  }, []);

  useEffect(() => {
        if (fromCurr && toCurr) {
            setconversionRate(null);
            settoAmount(null);
            fetctConversionRates();
        }
    }, [fromCurr, toCurr]);

    useEffect(() => {
        if (fromAmount != null && conversionRate != null) {
            settoAmount(fromAmount * conversionRate);
        } else if (fromAmount == null) {
            settoAmount(null);
        }
    }, [fromAmount, conversionRate]);

  const fetchRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(BASE_URL + "latest/USD");
      const data = await res.json();

      console.log(data?.conversion_rates);
      setCurrencyData(data?.conversion_rates);
    } catch (err) {
      console.error("Failed to fetch exchange rates:", err);
      setError(
        typeof err === "object" && err !== null && "message" in err
          ? String((err as { message?: unknown }).message)
          : "Failed to fetch",
      );
    } finally {
      setLoading(false);
    }
  };

  const fetctConversionRates = async () => {
        try {
            const res = await fetch(`${BASE_URL}pair/${fromCurr}/${toCurr}/1`);
            if(!res.ok){
                const text = await res.text().catch(() => '');
                throw new Error(`HTTP ${res.status} ${res.statusText} ${text}`);
            }
            const rate = await res.json();
            console.log("Conversion Rate", rate?.conversion_rate);
            setconversionRate(rate?.conversion_rate);
            //handleConversionProcess();

        } catch (error) {
            console.log("Error while Fetching conversion Rate for 2 Curr" + error);
        }
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>Currency Converter</div>
      <CurrencyBox
        rates={CurrencyData}
        selectedCurrency={fromCurr}
        onChangeCurr={(e) => setfromCurr(e.target.value)}
        selectedAmount={fromAmount}
        onChangeAmount={(e) => setfromAmount(e.target.value === '' ? null : Number(e.target.value)) }
      /> {fromAmount}
      <div> = </div>
      <CurrencyBox
        rates={CurrencyData}
        selectedCurrency={toCurr}
        onChangeCurr={(e) => settoCurr(e.target.value)}
        selectedAmount={toAmount}
        onChangeAmount={(e) => settoAmount(e.target.value === '' ? null : Number(e.target.value)) }
      /> {toAmount}
    </div>
  );
}
