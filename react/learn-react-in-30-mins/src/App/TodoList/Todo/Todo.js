import { assert } from "../../../utils";
import * as styles from "./styles";

export default function Todo({todo}){
    assert.checkObj(todo)
    return (
        <label style={styles.label}>
            <input type="checkbox" checked={todo.complete} />
            {todo.name}
        </label>
    );
}
