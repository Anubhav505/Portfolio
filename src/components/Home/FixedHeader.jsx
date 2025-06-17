import Scene from "./ThreeJs/Scene";
import Left from "./Left";
import Right from "./Right";
export default function FixedHeader() {
  return (
    <div className="h-screen w-full flex">
      <Left />
      <Scene />
      <Right />
    </div>
  );
}