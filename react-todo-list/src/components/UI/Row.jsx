import Card from "./Card";

const Row = (props) => {
  return (
    <>
      <h1 className="font-bold text-xl">{props.title}</h1>
      <Card className="bg-purple-100 my-1">
        <p>{props.description}</p>
      </Card>
    </>
  );
};

export default Row;
