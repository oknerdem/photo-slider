import Head from 'next/head';

interface HeaderProps {
  title: string;
  content: string;
}

const Header = ({ content, title }: HeaderProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={content} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/icon.png" />
  </Head>
);

export default Header;
