import Image from "next/image";
import Logo from "@/app/assets/logo.ico"
export function Footer() {
  return (
    <footer className=" flex mt-auto w-full bg-slate-900 text-slate-100 itens-center">
      
      <div className='max-w-6xl px-6 py-4 text-center text-sm'>
        <Image src={Logo} alt='Logo' width={30} height={2} /></div>
        <div>
        <a href="https://pokeapi.co/" className="m-0"> POKEAPI</a></div>
        <div>
        <p> &copy; 2025 . Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}