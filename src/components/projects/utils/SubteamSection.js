const SubteamSection = ({ id, leftChild, rightChild }) => {
  return (
    <div id={id} className="m-10 flex w-full flex-col gap-6 lg:flex-row">
      <div className="h-full w-full">
        {leftChild}
      </div>
      <div className="h-full w-full">
        {rightChild}
      </div>
    </div>
  );
}

export default SubteamSection;
