// DEFINE FUNCTIONS TO CALL HTTP TO THE BACKEND ROUTES
import axios from "axios";

const submitRFQ = async (emailContent: string) => {
  try {
    const response = await axios.post("/rfq/submit", { emailContent });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { submitRFQ };
