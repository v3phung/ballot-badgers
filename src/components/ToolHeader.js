export const ToolHeader = ({ title, slogan }) => {
  return (
    <header className="header-block">
      <img src="./badger.jpeg" alt='badger logo' className="logo" />
      <h1 className="page-header">{title}</h1>
      <span className="slogan">{slogan}</span>
    </header>
  );
};
