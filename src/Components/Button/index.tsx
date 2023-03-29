import TrashIcon from "../../Assets/Icons/trash.svg";
import TrashIconDark from "../../Assets/Icons/trash-dark.svg";

import * as S from "./styles";

interface IProps {
  onClick: (e: React.FormEvent<EventTarget>) => void;
  value: string | number;
  white: boolean;
  icon?: boolean;
}

export default function Button({ onClick, value, white, icon }: IProps) {
  return (
    <S.Button onClick={onClick} value={value} white={white}>
      {icon ? (
        white == true ? (
          <S.Icon src={TrashIcon} alt="Icone de lixeira" />
        ) : (
          <S.Icon src={TrashIconDark} alt="Icone de lixeira" />
        )
      ) : (
        value
      )}
    </S.Button>
  );
}
