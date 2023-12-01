import Layout from "@/components/ui/layout";
import { useEffect } from "react";
import Home from "./home/home";

const Index = () => {
  //const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    console.log("test");
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        <Home />
      </div>
    </Layout>
  );
};

export default Index;
