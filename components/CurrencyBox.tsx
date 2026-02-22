import React, { JSX } from 'react'

export interface currencyBoxProps {
    rates?: Record<string, number> | null;
    selectedCurrency: string | null; 
    onChangeCurr: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedAmount: number | null;
    onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CurrencyBox: React.FC<currencyBoxProps> = (props: currencyBoxProps) : JSX.Element => {
    const {
        rates,
        selectedCurrency,
        onChangeCurr,
        selectedAmount,
        onChangeAmount,
    } = props;

    const keys = rates ? Object.keys(rates) : [];

  return (
    <div className='m-5'>
        <input type="number" value={selectedAmount ?? ""} onChange={onChangeAmount}  className='mx-3 bg-pink-200'/>
        
        <select name="Currency" id="curr" value={selectedCurrency ?? ""} onChange={onChangeCurr} className='mx-2 bg-pink-400'>
            {keys.map((key) => (
                <option key={key} value={key}>{key}</option>
            ))}
        </select>
    </div>
  )
}

