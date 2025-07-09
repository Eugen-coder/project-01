import { useEffect, useState } from "react";

export const AgePredictor = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  async function fetchAge(name: string) {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    const obj = await res.json();
    setAge(obj.age);
  }

  useEffect(() => {
    fetchAge(name);
  }, [name]);
  return (
    <section>
      <h2>Age Predictor</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        Estimated age is {age} for name {name}
      </div>
    </section>
  );
};