import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="menu-links">
          <Link href="/">Главная</Link>
          <Link href="/">Инфо</Link>
        </div>
        <Link className="btn" href="/magic-square">
          Начать квиз
        </Link>
      </div>
    </header>
  );
};

export { Header };
