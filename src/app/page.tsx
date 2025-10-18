// Sever component by default
// Cant use hooks
// Not to be exposed to the client side
// access backend resource directly
// Keep sensistive info in server side
// add event is not possible
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>This is home page the Root level</h1>
    </div>
  );
}
