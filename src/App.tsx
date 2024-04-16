import React, { useState } from "react";
import "./App.css";
import CustomerList from "./Components/CustomerList";
import CustomerDetails from "./Components/CustomerDetails";
import customersData from "./data/customers.json";

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );

  const handleCustomerSelect = (id: number) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer =
    selectedCustomerId !== null
      ? customersData.find((customer) => customer.id === selectedCustomerId) ??
        null
      : null;

  return (
    <div>
      <h1 className="Title">Customer Portal</h1>
      <div className="app">
        <CustomerList
          customers={customersData}
          selectedCustomerId={selectedCustomerId}
          onCustomerSelect={handleCustomerSelect}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
