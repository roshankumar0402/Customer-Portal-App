import React from 'react';

interface Customer {
    id: number;
    name: string;
    title: string;
}

interface Props {
    customers: Customer[];
    selectedCustomerId: number | null;
    onCustomerSelect: (id: number) => void;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, onCustomerSelect }) => {
    return (
        <div className="customer-list">
            {customers.map(customer => (
                <div
                    key={customer.id}
                    className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
                    onClick={() => onCustomerSelect(customer.id)}
                >
                    <p>{customer.name}</p>
                    <p>{customer.title}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerList;
