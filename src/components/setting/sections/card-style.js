import { memo, Fragment } from "react";

import RadioBtn from "../elements/radio-btn";

const CardStyle = memo((props) => {
  return (
    <Fragment>
      <div className="d-grid gap-3 grid-cols mb-3 col-span-full ">
        <RadioBtn
          btnName="card_style"
          id="card_default"
          labelclassName="d-block text-center mt-4"
          defaultChecked={props.cardStyle}
          value="card-default"
        >
          Default Navbar
        </RadioBtn>
      </div>
    </Fragment>
  );
});

CardStyle.displayName = "CardStyle";
export default CardStyle;
