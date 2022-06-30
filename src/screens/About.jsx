import { useParams } from "react-router-dom";

export default function About() {
  const { name } = useParams();
  return (
    <div>
      <h1>THIS IS THE ABOUT PAGE FOR {name}</h1>
    </div>
  );
}
