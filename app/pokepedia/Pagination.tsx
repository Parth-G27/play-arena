import React, { JSX } from 'react'
import { pokemonListProps } from './page';

export interface PaginationProps{
    pokemonList: pokemonListProps[] | null;
}
export const Pagination: React.FC<PaginationProps> = (props:PaginationProps) : JSX.Element => {

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {props.pokemonList?.map((obj) => (
        <div
          key={obj.name}
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm hover:translate-0.5"
        >
          <span className="font-semibold text-slate-700">#{/\/(\d+)\/?$/.exec(obj.url)?.[1] ?? "-"}</span>
          <span className="ml-2 capitalize text-slate-900">{obj.name}</span>
        </div>
      ))}
    </div>
  )
}
