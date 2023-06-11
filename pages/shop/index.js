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
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <section className="">
        {/* <div className="flex">
          <div>left side checkbox filter</div>
          <h1>{products.products.length}</h1>
          <div className="grid grid-cols-3 gap-5">
            {products.products.map((product) => (
              <Card product={product} key={product.id}></Card>
            ))}
          </div>
        </div> */}
        <Layout>
          <Sider
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

            //   theme="dark"
            //   mode="inline"
            //   defaultSelectedKeys={["4"]}
            //   items={[
            //     UserOutlined,
            //     VideoCameraOutlined,
            //     UploadOutlined,
            //     UserOutlined,
            //   ].map((icon, index) => ({
            //     key: String(index + 1),
            //     icon: React.createElement(icon),
            //     label: `nav ${index + 1}`,
            //   }))}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content width={926}
            style={{ margin: "24px 16px 0" }}
            >
              <div
                style={{
                  //   padding: 24,
                  //   minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <div className="grid grid-cols-5 gap-5">
                  {products.products.map((product) => (
                    <Card product={product} key={product.id}></Card>
                  ))}
                </div>
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
