import { memo } from 'react';
import './CommonButton.scss';


interface Props {
    handleOnClick: () => void;
    caption: string;
  }
  
function CommonButton({ handleOnClick, caption }: Props) {
    return <> <button onClick={handleOnClick}>{caption}</button></>
}

export default memo(CommonButton)
  