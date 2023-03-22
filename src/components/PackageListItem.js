const PackageListItem = (props) => {
  const { item } = props;

  return (
    <li key={item.index}>
      <h3>
        {item.index}. Paket {item.name}
      </h3>
      <p>Price: {item.price}</p>
    </li>
  );
};

export default PackageListItem;
