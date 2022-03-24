const Email = () => {
  return (
    <>
         <label htmlFor="contentInput">Seu email</label>
        <input type="url" name="contentInput" id="contentInput" placeholder="seu@email.com"/>

        <label htmlFor="contentInput">Assunto</label>
        <input type="url" name="contentInput" id="contentInput" placeholder="assunto..."/>

        <label htmlFor="contentInput">Mensagem</label>
          <textarea
          name="contentInput"
          id="contentInput"
          cols={30}
          rows={10}
          placeholder="Sua mensagem..."
        ></textarea>
    </>
  )
};

export default Email;