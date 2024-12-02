export const AddressMatch = () => {
  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-lg rounded-lg">
      <div>
        <h3 className="border-b">Billing Address</h3>
      </div>

      <div className="flex gap-lg">
        <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">
          Same as shipping
        </p>
      </div>
    </div>
  );
};
