
interface Props {
key: number,
index: number,
task: any
}

function Item({key, index, task} : Props):JSX.Element;

export default Item;