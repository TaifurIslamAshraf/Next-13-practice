const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      product
      <h1>{params.id}</h1>
    </div>
  );
};

export default page;
