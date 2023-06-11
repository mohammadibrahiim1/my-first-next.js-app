import Card from "@/Components/Card/ProductCard";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

const Shop = ({ products }) => {
  console.log(products);

  const {
    token: { colorBgContainer, colorBgLayout },
  } = theme.useToken();
  return (
    <div>
      <section
        className=" container mx-auto"
        // style={{ padding: 0, "background": "colorBgContainer" }}
      >
        {/* <div className="flex">
          <div>left side checkbox filter</div>
          <h1>{products.products.length}</h1>
          <div className="grid grid-cols-3 gap-5">
            {products.products.map((product) => (
              <Card product={product} key={product.id}></Card>
            ))}
          </div>
        </div> */}
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Layout>
          <Sider
            style={{ background: colorBgLayout }}
            width={240}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              style={{ background: colorBgLayout }}
              //   theme="dark"
              mode="inline"
              //   defaultSelectedKeys={["4"]}
              items={
                [
                  {
                    // key: "1",
                    // icon: <UserOutlined />,
                    label: "smartphones",
                  },
                  {
                    // key: "2",
                    // icon: <VideoCameraOutlined />,
                    label: "home-decoration",
                  },
                  {
                    // key: "3",
                    // icon: <UploadOutlined />,
                    label: "groceries",
                  },
                ].map((item) => ({
                    // key: String(index + 1),
                    // icon: React.createElement(icon),
                  
                }))
                //  items={
                //     [
                // {
                //     key: '1',
                //     icon: <UserOutlined />,
                //     label: 'nav 1',
                //   },
                //   {
                //     key: '2',
                //     icon: <VideoCameraOutlined />,
                //     label: 'nav 2',
                //   },
                //   {
                //     key: '3',
                //     icon: <UploadOutlined />,
                //     label: 'nav 3',
                //   },
                // ]
              }
            />
          </Sider>
          <Layout>
            <Content width={926} style={{ background: colorBgLayout }}>
              <div
                className="grid grid-cols-4 gap-5"
                style={
                  {
                    //   padding: 24,
                    //   minHeight: 360,
                    //   background: colorBgContainer,
                  }
                }
              >
                {/* <div className="grid grid-cols-4 gap-5"> */}
                {products.products.map((product) => (
                  <Card product={product} key={product.id}></Card>
                ))}
                {/* </div> */}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </section>
    </div>
  );
};

export default Shop;
