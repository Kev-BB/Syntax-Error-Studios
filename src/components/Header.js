const projectOnClick = () => {
  return alert("Bitmiş bir projemiz bulunmamaktadır.")
}

const aboutOnClick = () => {
  return alert("Fazla söze gerek yok bizi bilen bilir 😎.")
}

const contactOnClick = () => {
  return alert("Lütfen bize ulaşmaya çalışmayın 😬.")
}


const Header = () => {
  return (
    <div className="button-container">
      <button onClick={projectOnClick}>Projelerimiz</button>
      <button onClick={aboutOnClick}>Hakkında</button>
      <button onClick={contactOnClick}>İletişim</button>
    </div>
  );
};

export default Header;
