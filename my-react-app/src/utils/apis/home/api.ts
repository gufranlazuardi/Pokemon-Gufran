import axiosWithConfig from "../axiosWithConfig";

interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export const getPokemon = async () => {
  try {
    const response = await axiosWithConfig.get("/pokemon/");

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
