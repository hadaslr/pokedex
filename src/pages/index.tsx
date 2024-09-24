
import { Main } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block w-full w-full text-center justify-center">
          <p className="text-xl">Welcome to</p>
          <div className="flex flex-col items-center justify-center mt-4">
            <Main className="" />
            <img className="h-80" src="/running.gif" alt="" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="bg-lime-500  text-white font-semibold"
            size="lg"
            radius="full"
          >
            Pokedex
          </Button>
          <Button
            className="bg-blue-500 text-white font-semibold"
            size="lg"
            radius="full"
          >
            Abilities
          </Button>
          <Button
            className="bg-fuchsia-800 text-white font-semibold"
            size="lg"
            radius="full"
          >
            Locations
          </Button>
          <Button
            className="bg-orange-500 text-white font-semibold"
            size="lg"
            radius="full"
          >
            Moves
          </Button>
          <Button
            className="bg-amber-400 text-white font-semibold"
            size="lg"
            radius="full"
          >
            Items
          </Button>
          <Button
            className="bg-stone-600 text-white font-semibold"
            size="lg"
            radius="full"
          >
            Top Charts
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
