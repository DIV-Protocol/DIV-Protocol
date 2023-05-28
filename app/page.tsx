import Countdown from "./countdown";

const END_DATE = new Date().getTime();

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-white items-center">
      <header className="flex items-center justify-center bg-black w-full">
        <h1 className="text-white text-4xl py-4">Digital Identity Vault</h1>
      </header>
      <main className="h-full w-[80%] py-4 text-center">
        <h2 className="text-2xl my-8">
          Révolutionnez le monde de la cybersécurité avec la blockchain et les
          NFT
        </h2>
        <p className="my-4">
          Les NFT (Non-Fungible Tokens) sont des actifs numériques uniques et
          sécurisés qui peuvent être utilisés pour stocker les informations
          d&aposidentification sous forme cryptée.
        </p>
        <p className="my-4">
          Notre solution permet aux utilisateurs de contrôler l&aposaccès à
          leurs informations personnelles en émettant des NFT à des tiers pour
          prouver leur identité ou leur propriété. Notre solution offre une
          alternative à la gestion d&aposidentité traditionnelle, qui est
          vulnérable aux cyberattaques et aux violations de données.
        </p>
        <a href="/whitepaper.pdf" className="underline">
          Cliquez ici pour consulter notre white paper
        </a>

        <Countdown enddate={"05/01/2024 00:00:00"} />
      </main>
    </div>
  );
}
