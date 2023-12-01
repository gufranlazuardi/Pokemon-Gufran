import { useToast } from "@/components/ui/use-toast";
import { getPokemon } from "@/utils/apis/home/api";
import Layout from "@/components/ui/layout";
import { useEffect, useState } from "react";

const Home = () => {
  const { toast } = useToast();

  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPokemon(); // gangerti
      setPokemon(result.results);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row py-6 px-3 gap-5">
        {pokemon.map((data) => (
          <div key={data.name} className=" border rounded">
            <img
              className="w-40 h-40"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.url
                .slice(34)
                .replace(/\/+$/, "")}.svg`}
              alt={data.name}
            />
            <p className=" font-bold text-center p-2">{data.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
