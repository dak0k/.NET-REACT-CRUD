
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import "./globals.css";
import { Menu } from "antd";
import Link from "next/link";


const items = [
  {key: "home", label: <Link href={"/"}>Home</Link>},
  {key: "book", label: <Link href={"/books"}>Books</Link>}
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu theme="dark" 
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                  items={items}
                  style={{flex:1, minWidth:0}}/>
          </Header>
          <Content style={{padding:"0 58px"}}> {children}</Content>
          <Footer style={{textAlign: "center"}}>
            Book store 2024 Created By Darkhan Adaibekov
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
