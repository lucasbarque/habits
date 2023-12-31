import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label htmlFor="title" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>
      <Check size={20} weight="bold" />
      <button
        className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold justify-center bg-green-600 hover:bg-green-500"
        type="submit"
      >
        Confirmar
      </button>
    </form>
  );
}
