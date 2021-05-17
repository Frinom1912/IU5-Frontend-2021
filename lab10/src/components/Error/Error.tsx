import {TypedUseSelector} from "../Selector"

function Error() {
    const user = TypedUseSelector(state=>state.user.login);
    return (
      <div style={{margin: "0px 5% 0px 5%", textAlign: "center"}} className="res">Ошибка, пользователя с логином {<strong>{user}</strong>} не существует! Попробуйте еще раз.</div>
    );
  }

export default Error;