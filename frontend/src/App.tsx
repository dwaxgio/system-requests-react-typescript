import React from "react";
import RFQForm from "./components/RFQForm.tsx";
import QuoteList from "./components/QuoteList.tsx";

const App: React.FC = () => {
  return (
    <div>
      <h1>RFQ Processing App</h1>
      <RFQForm />
      <QuoteList />
    </div>
  );
};

export default App;
