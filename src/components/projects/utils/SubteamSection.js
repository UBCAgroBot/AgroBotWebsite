const SubteamSection = ({ leftChild, rightChild }) => {
  return (
    <section className="max-w-[1000px] w-[calc(100% - 2rem)] my-1rem">
      <div className="grid gap-[1.5rem]">
        <div className="w-full h-full">
          {leftChild}
        </div>
        <div className="w-full h-full">
          {rightChild}
        </div>
      </div>
    </section>
  );
}

export default SubteamSection;
