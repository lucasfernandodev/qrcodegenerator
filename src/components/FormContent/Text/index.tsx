const Text = () => {
  return (
    <>
    <label htmlFor="contentInput">Digite seu Texto</label>
        <textarea
          name="contentInput"
          id="contentInput"
          cols={30}
          rows={10}
          placeholder="Seu texto..."
        ></textarea>
    </>
  )
};

export default Text;