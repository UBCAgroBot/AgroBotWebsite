const SubteamSection = ({ id, leftChild, rightChild }) => {
  return (
    <div id={id} className="w-full m-10 flex flex-col lg:flex-row gap-6">
      <div className="w-full h-full">
        {leftChild}
      </div>
      <div className="w-full h-full">
        {rightChild}
      </div>
    </div>
  );
}

export default SubteamSection;
