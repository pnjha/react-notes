export default () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">contact us</h1>
      <form className="p-4 m-4">
        <input type="text" className="border border-black p-2 m-2" placeholder="name" />
        <input type="text" className="border border-black p-2 m-2" placeholder="message" />
        <button className="m-2 p-2 rounded-md border border-black bg-black text-white">Submit</button>
      </form>
    </div>
  );
};
