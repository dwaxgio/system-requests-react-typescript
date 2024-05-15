import React, { useState } from "react";
import { submitRFQ } from "../services/rfqService";

const RFQForm: React.FC = () => {
  const [emailContent, setEmailContent] = useState("");

  const handleEmailContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEmailContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await submitRFQ(emailContent);
      alert("RFQ submitted successfully!");
      setEmailContent("");
    } catch (error) {
      console.error("Error submitting RFQ:", error);
      alert("Error submitting RFQ. Please try again.");
    }
  };

  return (
    <div>
      <h2>RFQ Form</h2>
      <textarea value={emailContent} onChange={handleEmailContentChange} />
      <button onClick={handleSubmit}>Submit RFQ</button>
    </div>
  );
};

export default RFQForm;
