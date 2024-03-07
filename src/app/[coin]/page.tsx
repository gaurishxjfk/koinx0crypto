import Breadcrumbs from "@/components/Breadcrumbs";
import CoinComponent from "@/components/Coin/CoinComponent";
import ScrollableTabs from "@/components/ScrollableTabs/ScrollableTabs";
import Sentiments from "@/components/ScrollableTabs/Sentiments";
import Team from "@/components/ScrollableTabs/Team";
import GetStartedKoinx from "@/components/SideComponents/GetStartedKoinx";
import TrendingCoins from "@/components/SideComponents/TrendingCoins";
import Suggestions from "@/components/Suggestions/Suggestions";

export default function Page({ params }: { params: { coin: string } }) {
  return (
    <main className="px-[1rem] md:px-[3.7rem]">
      <Breadcrumbs id={params.coin} />
      <section className="relative lg:flex lg:gap-2">
        <CoinComponent id={params.coin} />
        <aside className="hidden lg:block">
          <GetStartedKoinx />
          <TrendingCoins />
        </aside>
      </section>
      <section>
        <ScrollableTabs />
      </section>
      <section className="bg-white mt-4  lg:max-w-[69%] xl:max-w-[75%] p-3">
        <Sentiments />
      </section>

      <section className="bg-white mt-4  lg:max-w-[69%] xl:max-w-[75%] p-3">
        <Team />
      </section>
      <section className="-mx-[1rem] md:-mx-[3.7rem]">
        <Suggestions />
      </section>
      <section className="md:hidden px-[1rem]">
        <GetStartedKoinx />
        <TrendingCoins />
      </section>
    </main>
  );
}
