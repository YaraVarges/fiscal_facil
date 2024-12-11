import axios from "axios";

export const fetchCFOPData = async () => {
  try {
    const response = await axios.get(
      "https://"
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados do CFOP");
  }
};

