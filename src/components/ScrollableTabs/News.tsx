import React from "react";
import CardComp from "./CardComp";

const News = () => {
  return (
    <>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        <CardComp
          heading="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
          para="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
          classnames="bg-blue-300"
        />
        <CardComp
          heading="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
          para="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
          classnames="bg-green-300"
        />
      </div>
    </>
  );
};

export default News;
