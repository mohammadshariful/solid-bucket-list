export function BucketListItem(props) {

  const itemDeleteHandler = (currentItem) => {
    const isDeleteItem = confirm('Are you sure want to delete item?');
    if (isDeleteItem) {
      props.setItems((items) => {
        return items.filter(item => item.text !== currentItem.text)
      })
    }
  }


  return (
    <li
      class="list-item"
      style={{
        "text-decoration": props.item.complete ? "line-through" : undefined,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label>
          <input
            type="checkbox"
            checked={props.item.complete}
            onChange={() => {
              props.setItems((items) => {
                const newItems = items.map((item) =>
                  props.item === item
                    ? { ...item, complete: !item.complete }
                    : item
                );
                return newItems;
              });
            }}
          />
          {props.item.text}
        </label>
        <button disabled={props.item.complete} type="button" onClick={() => itemDeleteHandler(props.item)}>delete</button>
      </div>
    </li>
  );
}
