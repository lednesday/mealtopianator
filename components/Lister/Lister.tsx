export default function Lister(itemArray: Array<any>) {
    if (typeof (itemArray) === "undefined") {
        return (<ul></ul>);
    }
    else {
        const items = itemArray.map((item: any) =>
            <li key={item.id}>{item.name}</li>);

        return (
            < ul >
                {items}
            </ul >
        );
    }
};