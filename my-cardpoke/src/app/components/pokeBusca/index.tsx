"use client";
import { useEffect, useState } from "react";

type Props = {
  onSearch: (term: string) => void;
};

export function PokeBusca({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  useEffect(() => {
    onSearch(term); 
  }, [term, onSearch]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term.trim()); 
  };
  onSearch?.(term);

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Busque por nome (ex: pik)"
        className="w-full rounded border border-slate-300 px-3 py-2 outline-none ring-sky-200 focus:ring-4"
      />
      <button
        type="submit"
        className="rounded bg-sky-500 px-4 py-2 font-semibold text-white hover:bg-sky-600"
      >
        Buscar
      </button>
    </form>
  );
}
