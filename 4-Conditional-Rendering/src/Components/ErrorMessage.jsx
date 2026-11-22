function ErrorMessage(props) {
  let { fItems } = props;
  if (fItems.length === 0) {
    return (
      <>
        <h1>No Records Found</h1>
      </>
    );
  }
}

export default ErrorMessage;
