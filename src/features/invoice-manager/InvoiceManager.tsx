"use client";
const dummyOrders = [
  {
    companyName: "QuantumLeap Innovations",
    numOfItems: 10,
    date: new Date().toISOString().split("T")[0]
  },
  {
    companyName: "ZenCorp Technologies",
    numOfItems: 3,
    date: new Date().toISOString().split("T")[0]
  },
  {
    companyName: "Cyberlynx Solutions",
    numOfItems: 7,
    date: new Date().toISOString().split("T")[0]
  },
  {
    companyName: "NovaTech Industries",
    numOfItems: 4,
    date: new Date().toISOString().split("T")[0]
  }
];

// TODO: *** View order items modal ***

export const InvoiceManager = () => {
  return (
    <div className="bg-primary rounded-lg p-lg">
      <h2 className="mb-lg">Invoice Manager</h2>

      <div className="bg-secondary rounded-lg p-lg">
        <div className="flex items-center justify-between mb-lg">
          <h3>Unresolved Orders</h3>
          <button className="btn-ghost opacity-75 hover:opacity-100 focus:opacity-100">
            Generate All Invoices
          </button>
        </div>

        <div className="bg-primary rounded-lg p-md">
          <div className="flex items-center gap-lg text-foreground/50 italic">
            <span className="min-w-sm border-b border-foreground/50 px-xs">Company</span>
            <span className="min-w-3xs border-b border-foreground/50 px-xs">
              # of Items
            </span>
            <span className="min-w-3xs border-b border-foreground/50 px-xs">Date</span>
          </div>

          {dummyOrders.map((order) => (
            <div
              key={order.companyName}
              className="flex items-center gap-lg p-xs bg-tertiary/25 rounded-lg mt-md"
            >
              <h5 className="min-w-sm">{order.companyName}</h5>
              <span className="min-w-3xs">{order.numOfItems}</span>
              <span className="min-w-3xs">{order.date}</span>
              <button className="btn-ghost py-none ml-auto opacity-60 hover:opacity-100 focus:opacity-100">
                Invoice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
