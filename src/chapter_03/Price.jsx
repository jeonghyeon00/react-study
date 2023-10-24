import Food from "./Food";

function Price() {
  return (
    <div>
      <Food name="김치볶음밥" numOfPrice={6500} />
      <Food name="알리오올리오" numOfPrice={8000} />
      <Food name="스테이크" numOfPrice={25000} />
    </div>
  );
}

export default Price;
