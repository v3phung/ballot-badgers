import { ToolHeader } from "./ToolHeader";

export const Welcome = ({slogan}) => {
  return (
    <>
      <ToolHeader title={"Welcome!"} />
      <div className="center">
        <img src="/badger.png" />
        <p>Join Bella and her badger buddies by voting.</p>
        <p>{slogan}</p>
      </div>
    </>
  );
};